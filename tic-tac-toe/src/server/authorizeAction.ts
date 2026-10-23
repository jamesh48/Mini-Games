import type { GameAction, GameState, Seat } from 'Components/GameStore/types';

const cleanName = (name: unknown) => (typeof name === 'string' ? name.trim().slice(0, 20) : '');

// Turns whatever a browser sent into an action its seat is allowed to make, or null
const authorizeAction = (seat: Seat | undefined, game: GameState, sent: unknown): GameAction | null => {
  if (!seat || seat === 'spectator' || typeof sent !== 'object' || sent === null) return null;
  const { type, index, mark, name } = sent as Record<string, unknown>;

  switch (type) {
    case 'PLAY MOVE':
      if (typeof index !== 'number' || !Number.isInteger(index) || index < 0 || index > 8) return null;
      return seat === 'both' || seat === game.currentPlayer ? { type, index } : null;
    case 'SET PLAYER NAME': {
      // Single-device play can name both players; otherwise only your own seat
      const target = seat === 'both' ? mark : seat;
      return target === 'X' || target === 'O' ? { type, mark: target, name: cleanName(name) } : null;
    }
    case 'NEW ROUND':
    case 'RESET SCORES':
      return { type };
    default:
      return null;
  }
};

export { authorizeAction, cleanName };
