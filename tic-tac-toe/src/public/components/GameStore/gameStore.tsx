import React from 'react';
import { io, Socket } from 'socket.io-client';
import { initialState, otherPlayer } from './gameReducers';
import type { GameAction, GameState, Mark, Seat, ServerSnapshot } from './types';

export type { Cell, GameAction, GameState, Mark, RoundResult, Seat, ServerSnapshot, TunnelState, WinningLine } from './types';

export interface ConnectionState extends Omit<ServerSnapshot, 'game'> {
  connected: boolean;
  // Unknown until the server welcomes this browser
  seat: Seat | undefined;
}

interface ConnectionStore {
  connection: ConnectionState;
  setOnline: (on: boolean) => void;
  canPlay: (mark: Mark) => boolean;
}

type GameStore = [GameState, (action: GameAction) => void];

const defaultSnapshot: ServerSnapshot = {
  game: initialState,
  online: false,
  tunnel: { status: 'off' },
  players: { X: false, O: false },
  isHost: false,
  rejected: false
};

const getSavedName = () => {
  try {
    return localStorage.getItem('tictactoe-name') || undefined;
  } catch {
    return undefined;
  }
};

const saveName = (name: string) => {
  try {
    localStorage.setItem('tictactoe-name', name);
  } catch {}
};

// One id per browser tab, kept across refreshes so a player gets their seat back
const getClientId = () => {
  const fresh = Math.random().toString(36).slice(2);
  try {
    const id = sessionStorage.getItem('tictactoe-client-id') || fresh;
    sessionStorage.setItem('tictactoe-client-id', id);
    return id;
  } catch {
    return fresh;
  }
};

const connectToServer = () => io({ auth: { clientId: getClientId(), name: getSavedName() } });

const GameStoreContext = React.createContext<GameStore | undefined>(undefined);
const ConnectionContext = React.createContext<ConnectionStore | undefined>(undefined);

interface GameStoreProviderProps {
  children: React.ReactNode;
  snapshot?: ServerSnapshot;
  // Lets tests swap in a fake socket instead of connecting to the server
  createSocket?: () => Socket;
}

// The server owns the game: actions are sent to it, and it sends back the new state to every player
const GameStoreProvider = ({ children, snapshot = defaultSnapshot, createSocket = connectToServer }: GameStoreProviderProps) => {
  const { game: initialGame, ...initialConnection } = snapshot;
  const [game, setGame] = React.useState<GameState>(initialGame);
  const [connection, setConnection] = React.useState<ConnectionState>({ ...initialConnection, connected: false, seat: undefined });
  const socketRef = React.useRef<Socket>();

  React.useEffect(() => {
    const socket = createSocket();
    socketRef.current = socket;
    const update = (changes: Partial<ConnectionState>) => setConnection((current) => ({ ...current, ...changes }));

    socket.on('connect', () => update({ connected: true }));
    socket.on('disconnect', () => update({ connected: false }));
    socket.on('welcome', ({ seat, isHost, game }: { seat: Seat; isHost: boolean; game: GameState }) => {
      update({ seat, isHost, rejected: false });
      setGame(game);
    });
    socket.on('state', (game: GameState) => setGame(game));
    socket.on('players', (players: Record<Mark, boolean>) => update({ players }));
    socket.on('mode', ({ online, tunnel }: Pick<ConnectionState, 'online' | 'tunnel'>) => update({ online, tunnel }));
    socket.on('rejected', () => update({ rejected: true }));

    return () => {
      socket.disconnect();
    };
  }, []);

  const { seat } = connection;

  const dispatch = React.useCallback((action: GameAction) => {
    // Remember your own name for next time; the host plays X once online play is on
    if (action.type === 'SET PLAYER NAME' && (seat === action.mark || (seat === 'both' && action.mark === 'X'))) {
      saveName(action.name);
    }
    socketRef.current?.emit('action', action);
  }, [seat]);

  const gameStore = React.useMemo<GameStore>(() => [game, dispatch], [game, dispatch]);

  const connectionStore = React.useMemo<ConnectionStore>(() => ({
    connection,
    setOnline: (on) => socketRef.current?.emit('setOnline', { on }),
    canPlay: (mark) => connection.connected && (seat === 'both' || seat === mark)
  }), [connection, seat]);

  return (
    <ConnectionContext.Provider value={connectionStore}>
      <GameStoreContext.Provider value={gameStore}>{children}</GameStoreContext.Provider>
    </ConnectionContext.Provider>
  );
};

const useGameContext = () => {
  const context = React.useContext(GameStoreContext);
  if (context === undefined) {
    throw new Error('useGameContext must be used within a GameStoreProvider');
  }
  return context;
};

const useConnectionContext = () => {
  const context = React.useContext(ConnectionContext);
  if (context === undefined) {
    throw new Error('useConnectionContext must be used within a GameStoreProvider');
  }
  return context;
};

const playerLabel = (playerNames: Record<Mark, string>, mark: Mark) => playerNames[mark] || `Player ${mark}`;

export { useGameContext, useConnectionContext, GameStoreProvider, playerLabel, otherPlayer, defaultSnapshot };
