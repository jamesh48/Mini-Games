import crypto from 'crypto';
import https from 'https';
import { ChildProcess, spawn } from 'child_process';
import { promises as dns } from 'dns';
import type { IncomingHttpHeaders } from 'http';
import type { Server, Socket } from 'socket.io';
import { gameReducer, initialState } from 'Components/GameStore/gameReducers';
import type { GameState, Mark, Seat, ServerSnapshot, TunnelState } from 'Components/GameStore/types';
import { authorizeAction, cleanName } from './authorizeAction';

const marks: Mark[] = ['X', 'O'];

// Fetched through the tunnel to confirm it reaches this server before the link is shown
const tunnelCheckToken = crypto.randomBytes(8).toString('hex');

// Tunnel visitors also arrive from localhost, but Cloudflare adds forwarding headers to their requests
const isThisComputer = (address: string | undefined, headers: IncomingHttpHeaders) => {
  const loopback = ['127.0.0.1', '::1', '::ffff:127.0.0.1'].includes(address ?? '');
  return loopback && !headers['cf-connecting-ip'] && !headers['x-forwarded-for'];
};

// Ask public DNS rather than this computer's, so an early miss isn't cached here
const publicDns = new dns.Resolver();
publicDns.setServers(['1.1.1.1', '8.8.8.8']);
// Show the link anyway after this long, e.g. on networks that block outside DNS servers
const readyTimeoutMs = 60000;

// Loads /tunnel-check through the tunnel, the way a friend's browser would, looking the name up on public DNS
const reachesThisServer = (url: string) =>
  new Promise<boolean>((resolve) => {
    const lookup = (hostname: string, options: { all?: boolean }, callback: (...args: unknown[]) => void) =>
      publicDns
        .resolve4(hostname)
        .then(([address]) => (options.all ? callback(null, [{ address, family: 4 }]) : callback(null, address, 4)))
        .catch((error) => callback(error));
    const request = https.get(`${url}/tunnel-check`, { lookup, timeout: 5000 } as https.RequestOptions, (response) => {
      let body = '';
      response.on('data', (chunk) => (body += chunk));
      response.on('end', () => resolve(response.statusCode === 200 && body === tunnelCheckToken));
    });
    request.on('timeout', () => request.destroy());
    request.on('error', () => resolve(false));
  });

const startOnlinePlay = (io: Server, port: number) => {
  // The server owns the game; browsers send actions and get the new state back
  let game: GameState = initialState;
  const seats: Record<Mark, { clientId: string | undefined; connected: boolean }> = {
    X: { clientId: undefined, connected: false },
    O: { clientId: undefined, connected: false }
  };

  // Online play: off means only this computer can play; on starts a Cloudflare quick tunnel
  let online = false;
  let tunnel: TunnelState = { status: 'off' };
  let tunnelProcess: ChildProcess | undefined;

  const players = () => ({ X: seats.X.connected, O: seats.O.connected });
  const broadcastGame = () => io.emit('state', game);
  const broadcastPlayers = () => io.emit('players', players());
  const broadcastMode = () => io.emit('mode', { online, tunnel });

  const takeSeat = (socket: Socket): Seat => {
    if (!online) {
      return 'both';
    }
    const { clientId, name } = socket.data;
    // Reclaim a seat after a refresh, otherwise take an empty or abandoned one, otherwise watch.
    const mark = marks.find((m) => seats[m].clientId === clientId) || marks.find((m) => !seats[m].connected);
    if (!mark) {
      return 'spectator';
    }
    // A returning player keeps the seat's name; a new player brings their saved name
    if (seats[mark].clientId !== clientId) {
      game = gameReducer(game, { type: 'SET PLAYER NAME', mark, name: cleanName(name) });
    }
    seats[mark] = { clientId, connected: true };
    return mark;
  };

  const welcome = (socket: Socket) => {
    socket.data.seat = takeSeat(socket);
    socket.emit('welcome', { seat: socket.data.seat, isHost: socket.data.local, game });
  };

  const reject = (socket: Socket) => {
    socket.emit('rejected');
    socket.disconnect(true);
  };

  // Kick out other devices, or hand out seats again, after switching modes. This computer gets seated first.
  const reseatEveryone = () => {
    game = initialState;
    marks.forEach((m) => (seats[m] = { clientId: undefined, connected: false }));
    const sockets = Array.from(io.sockets.sockets.values()).sort((a, b) => Number(b.data.local) - Number(a.data.local));
    sockets.forEach((socket) => (!online && !socket.data.local ? reject(socket) : welcome(socket)));
    broadcastGame();
    broadcastPlayers();
    broadcastMode();
  };

  const stopTunnel = () => {
    const child = tunnelProcess;
    tunnelProcess = undefined;
    child?.kill();
  };

  const goOffline = (error?: string) => {
    stopTunnel();
    online = false;
    tunnel = error ? { status: 'error', error } : { status: 'off' };
    reseatEveryone();
  };

  const goOnline = () => {
    online = true;
    tunnel = { status: 'starting' };
    reseatEveryone();

    const child = spawn('cloudflared', ['tunnel', '--url', `http://localhost:${port}`]);
    tunnelProcess = child;
    // cloudflared prints its address before the tunnel works: it still has to connect, the name has to reach
    // DNS, and Cloudflare has to start routing it. A link opened too early fails, and browsers then remember
    // the failure for a while, so only show it once a request through the tunnel gets back here.
    let url: string | undefined;
    let registered = false;
    const startedAt = Date.now();

    const markReady = () => {
      if (child === tunnelProcess && tunnel.status === 'starting' && url) {
        tunnel = { status: 'ready', url };
        console.log(`  Online at: ${url}`);
        broadcastMode();
      }
    };

    const waitUntilReachable = async (address: string) => {
      while (child === tunnelProcess && tunnel.status === 'starting') {
        const reachable = registered && (await reachesThisServer(address));
        if (reachable || Date.now() - startedAt > readyTimeoutMs) {
          markReady();
          return;
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }
    };

    const readOutput = (data: Buffer) => {
      const text = data.toString();
      const match = text.match(/https:\/\/[a-z0-9-]+\.trycloudflare\.com/);
      if (match && !url) {
        url = match[0];
        waitUntilReachable(url);
      }
      if (text.includes('Registered tunnel connection')) {
        registered = true;
      }
    };
    child.stdout.on('data', readOutput);
    child.stderr.on('data', readOutput);
    child.on('error', (error: NodeJS.ErrnoException) => {
      if (child === tunnelProcess) {
        goOffline(
          error.code === 'ENOENT'
            ? "cloudflared isn't installed. Run `brew install cloudflared`, then try again."
            : `Couldn't start the tunnel: ${error.message}`
        );
      }
    });
    child.on('exit', () => {
      // Only an unexpected exit; stopTunnel() clears tunnelProcess first
      if (child === tunnelProcess) {
        goOffline('The online link stopped unexpectedly. Turn online play on to try again.');
      }
    });
  };

  io.on('connection', (socket) => {
    socket.data.clientId = socket.handshake.auth.clientId || socket.id;
    socket.data.name = socket.handshake.auth.name;
    socket.data.local = isThisComputer(socket.handshake.address, socket.handshake.headers);

    if (!online && !socket.data.local) {
      reject(socket);
      return;
    }

    welcome(socket);
    broadcastGame();
    broadcastPlayers();
    socket.emit('mode', { online, tunnel });

    socket.on('action', (sent: unknown) => {
      const action = authorizeAction(socket.data.seat, game, sent);
      const next = action ? gameReducer(game, action) : game;
      if (next !== game) {
        game = next;
        broadcastGame();
      }
    });

    // Only this computer can switch online play on or off
    socket.on('setOnline', ({ on }: { on: boolean }) => {
      if (!socket.data.local || on === online) {
        return;
      }
      on ? goOnline() : goOffline();
    });

    socket.on('disconnect', () => {
      const seat: Seat = socket.data.seat;
      if ((seat === 'X' || seat === 'O') && seats[seat].clientId === socket.data.clientId) {
        seats[seat].connected = false;
        broadcastPlayers();
      }
    });
  });

  const snapshot = (isHost: boolean): ServerSnapshot => ({
    game,
    online,
    tunnel,
    players: players(),
    isHost,
    rejected: !online && !isHost
  });

  return { snapshot, stopTunnel };
};

export { startOnlinePlay, isThisComputer, tunnelCheckToken };
