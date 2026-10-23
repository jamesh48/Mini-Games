export type Mark = 'X' | 'O';
export type Cell = Mark | null;
export type WinningLine = readonly [number, number, number];

export type RoundResult =
  | { kind: 'win'; winner: Mark; line: WinningLine }
  | { kind: 'draw' }
  | null;

export interface GameState {
  board: Cell[];
  currentPlayer: Mark;
  startingPlayer: Mark;
  result: RoundResult;
  playerNames: Record<Mark, string>;
  scores: Record<Mark, number> & { draws: number };
}

export type GameAction =
  | { type: 'PLAY MOVE'; index: number }
  | { type: 'NEW ROUND' }
  | { type: 'RESET SCORES' }
  | { type: 'SET PLAYER NAME'; mark: Mark; name: string };

// "both" is single-device play: one browser plays both marks
export type Seat = Mark | 'both' | 'spectator';

export interface TunnelState {
  status: 'off' | 'starting' | 'ready' | 'error';
  url?: string;
  error?: string;
}

// What the server knows when it renders the page; the browser hydrates from the same data
export interface ServerSnapshot {
  game: GameState;
  online: boolean;
  tunnel: TunnelState;
  players: Record<Mark, boolean>;
  // Whether this browser is on the computer running the server, which controls online play
  isHost: boolean;
  // Turned away because online play is off on the host's computer
  rejected: boolean;
}
