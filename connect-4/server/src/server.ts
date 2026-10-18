import crypto from "crypto";
import http from "http";
import https from "https";
import os from "os";
import path from "path";
import { ChildProcess, spawn } from "child_process";
import { promises as dns } from "dns";
import express from "express";
import { Server, Socket } from "socket.io";

type Color = "red" | "yellow";
// "both" is single-device play: one browser plays both colors
type Seat = Color | "both" | "spectator";

const app = express();
app.use(express.static(path.resolve(__dirname, "../../client/public")));

// Fetched through the tunnel to confirm it reaches this server before the link is shown
const tunnelCheckToken = crypto.randomBytes(8).toString("hex");
app.get("/tunnel-check", (_req, res) => {
  res.send(tunnelCheckToken);
});
const server = http.createServer(app);
const io = new Server(server);

const port = Number(process.env.PORT) || 4000;

const networkAddresses = (): string[] =>
  ([] as os.NetworkInterfaceInfo[])
    .concat(...Object.values(os.networkInterfaces()).map((nets) => nets || []))
    .filter((net) => net.family === "IPv4" && !net.internal)
    .map((net) => `http://${net.address}:${port}`);

// The server only relays moves; every client runs the same game logic on the same move list.
let moves: number[] = [];
const colors: Color[] = ["red", "yellow"];
const defaultNames: { [color in Color]: string } = { red: "Red", yellow: "Yellow" };
const seats: { [color in Color]: { clientId: string | undefined; connected: boolean; name: string } } = {
  red: { clientId: undefined, connected: false, name: defaultNames.red },
  yellow: { clientId: undefined, connected: false, name: defaultNames.yellow }
};

// Online play: off means only this computer can play; on starts a Cloudflare quick tunnel
let online = false;
let tunnel: { status: "off" | "starting" | "ready" | "error"; url?: string; error?: string } = { status: "off" };
let tunnelProcess: ChildProcess | undefined;

const cleanName = (name: unknown, color: Color) =>
  (typeof name === "string" && name.trim().slice(0, 20)) || defaultNames[color];

const nextColor = (): Color => (moves.length % 2 === 0 ? "red" : "yellow");
const columnHeight = (column: number) => moves.filter((move) => move === column).length;

const broadcastPlayers = () =>
  io.emit("players", {
    red: { connected: seats.red.connected, name: seats.red.name },
    yellow: { connected: seats.yellow.connected, name: seats.yellow.name }
  });
const broadcastMode = () => io.emit("mode", { online, tunnel });

// Tunnel visitors also arrive from localhost, but Cloudflare adds forwarding headers to their requests
const isThisComputer = (socket: Socket) => {
  const { address, headers } = socket.handshake;
  const loopback = ["127.0.0.1", "::1", "::ffff:127.0.0.1"].includes(address);
  return loopback && !headers["cf-connecting-ip"] && !headers["x-forwarded-for"];
};

const takeSeat = (socket: Socket): Seat => {
  if (!online) {
    return "both";
  }
  const { clientId, name } = socket.data;
  // Reclaim a seat after a refresh, otherwise take an empty or abandoned one, otherwise watch.
  const color =
    colors.find((c) => seats[c].clientId === clientId) || colors.find((c) => !seats[c].connected);
  if (!color) {
    return "spectator";
  }
  // A returning player keeps the seat's name; a new player brings their saved name
  const seatName = seats[color].clientId === clientId ? seats[color].name : cleanName(name, color);
  seats[color] = { clientId, connected: true, name: seatName };
  return color;
};

const welcome = (socket: Socket) => {
  socket.data.seat = takeSeat(socket);
  socket.emit("welcome", { color: socket.data.seat, moves, isHost: socket.data.local });
};

// Kick out other devices, or hand out seats again, after switching modes. This computer gets seated first.
const reseatEveryone = () => {
  moves = [];
  colors.forEach((c) => (seats[c] = { ...seats[c], clientId: undefined, connected: false }));
  const sockets = Array.from(io.sockets.sockets.values()).sort(
    (a, b) => Number(b.data.local) - Number(a.data.local)
  );
  sockets.forEach((socket) => {
    if (!online && !socket.data.local) {
      socket.emit("rejected");
      socket.disconnect(true);
    } else {
      welcome(socket);
    }
  });
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
  tunnel = error ? { status: "error", error } : { status: "off" };
  reseatEveryone();
};

// Ask public DNS rather than this computer's, so an early miss isn't cached here
const publicDns = new dns.Resolver();
publicDns.setServers(["1.1.1.1", "8.8.8.8"]);
// Show the link anyway after this long, e.g. on networks that block outside DNS servers
const readyTimeoutMs = 60000;

// Loads /tunnel-check through the tunnel, the way a friend's browser would, looking the name up on public DNS
const reachesThisServer = (url: string) =>
  new Promise<boolean>((resolve) => {
    const lookup: any = (hostname: string, options: { all?: boolean }, callback: Function) =>
      publicDns
        .resolve4(hostname)
        .then(([address]) =>
          options.all ? callback(null, [{ address, family: 4 }]) : callback(null, address, 4)
        )
        .catch((error) => callback(error));
    const request = https.get(`${url}/tunnel-check`, { lookup, timeout: 5000 } as https.RequestOptions, (response) => {
      let body = "";
      response.on("data", (chunk) => (body += chunk));
      response.on("end", () => resolve(response.statusCode === 200 && body === tunnelCheckToken));
    });
    request.on("timeout", () => request.destroy());
    request.on("error", () => resolve(false));
  });

const goOnline = () => {
  online = true;
  tunnel = { status: "starting" };
  reseatEveryone();

  const child = spawn("cloudflared", ["tunnel", "--url", `http://localhost:${port}`]);
  tunnelProcess = child;
  // cloudflared prints its address before the tunnel works: it still has to connect, the name has to reach
  // DNS, and Cloudflare has to start routing it. A link opened too early fails, and browsers then remember
  // the failure for a while, so only show it once a request through the tunnel gets back here.
  let url: string | undefined;
  let registered = false;
  const startedAt = Date.now();

  const markReady = () => {
    if (child === tunnelProcess && tunnel.status === "starting" && url) {
      tunnel = { status: "ready", url };
      console.log(`  Online at: ${url}`);
      broadcastMode();
    }
  };

  const waitUntilReachable = async () => {
    while (child === tunnelProcess && tunnel.status === "starting") {
      const reachable = registered && (await reachesThisServer(url!));
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
      waitUntilReachable();
    }
    if (text.includes("Registered tunnel connection")) {
      registered = true;
    }
  };
  child.stdout.on("data", readOutput);
  child.stderr.on("data", readOutput);
  child.on("error", (error: NodeJS.ErrnoException) => {
    if (child === tunnelProcess) {
      goOffline(
        error.code === "ENOENT"
          ? "cloudflared isn't installed. Run `brew install cloudflared`, then try again."
          : `Couldn't start the tunnel: ${error.message}`
      );
    }
  });
  child.on("exit", () => {
    // Only an unexpected exit; stopTunnel() clears tunnelProcess first
    if (child === tunnelProcess) {
      goOffline("The online link stopped unexpectedly. Turn online play on to try again.");
    }
  });
};

io.on("connection", (socket) => {
  socket.data.clientId = socket.handshake.auth.clientId || socket.id;
  socket.data.name = socket.handshake.auth.name;
  socket.data.local = isThisComputer(socket);

  if (!online && !socket.data.local) {
    socket.emit("rejected");
    socket.disconnect(true);
    return;
  }

  welcome(socket);
  broadcastPlayers();
  socket.emit("mode", { online, tunnel });

  socket.on("move", ({ column }: { column: number }) => {
    const seat: Seat = socket.data.seat;
    const valid = Number.isInteger(column) && column >= 1 && column <= 7 && columnHeight(column) < 6;
    if ((seat !== "both" && seat !== nextColor()) || !valid) {
      return;
    }
    moves.push(column);
    io.emit("move", { column });
  });

  socket.on("setName", ({ color, name }: { color: Color; name: string }) => {
    const seat: Seat = socket.data.seat;
    // Single-device play can name both players; otherwise only your own seat
    const target = seat === "both" && colors.includes(color) ? color : seat;
    if (target !== "red" && target !== "yellow") {
      return;
    }
    seats[target].name = cleanName(name, target);
    broadcastPlayers();
  });

  socket.on("newGame", () => {
    if (socket.data.seat === "spectator") {
      return;
    }
    moves = [];
    io.emit("newGame");
  });

  // Only this computer can switch online play on or off
  socket.on("setOnline", ({ on }: { on: boolean }) => {
    if (!socket.data.local || on === online) {
      return;
    }
    on ? goOnline() : goOffline();
  });

  socket.on("disconnect", () => {
    const seat: Seat = socket.data.seat;
    const clientId: string = socket.data.clientId;
    if ((seat === "red" || seat === "yellow") && seats[seat].clientId === clientId) {
      seats[seat].connected = false;
      broadcastPlayers();
    }
  });
});

// Don't leave a tunnel running after the server stops (nodemon restarts send SIGUSR2)
["SIGINT", "SIGTERM", "SIGUSR2"].forEach((signal) =>
  process.on(signal, () => {
    stopTunnel();
    process.exit(0);
  })
);

server.listen(port, () => {
  console.log(`Connect-4 listening on port ${port}`);
  // Print the addresses other computers on the network can use once online play is on
  networkAddresses().forEach((address) => console.log(`  On your network: ${address}`));
});
