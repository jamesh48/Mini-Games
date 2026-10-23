import type { GameState } from './types';
import { gameReducer, initialState } from './gameReducers';

const playMoves = (state: GameState, ...indexes: number[]) =>
  indexes.reduce((acc, index) => gameReducer(acc, { type: 'PLAY MOVE', index }), state);

describe('game reducer', () => {
  it('places a mark and passes the turn', () => {
    const state = playMoves(initialState, 4);
    expect(state.board[4]).toEqual('X');
    expect(state.currentPlayer).toEqual('O');
  });

  it('ignores moves on taken boxes', () => {
    const state = playMoves(initialState, 4);
    expect(playMoves(state, 4)).toBe(state);
  });

  it('records a win and blocks further moves', () => {
    const state = playMoves(initialState, 0, 3, 1, 4, 2);
    expect(state.result).toEqual({ kind: 'win', winner: 'X', line: [0, 1, 2] });
    expect(state.scores).toEqual({ X: 1, O: 0, draws: 0 });
    expect(playMoves(state, 8)).toBe(state);
  });

  it('records a draw when the board fills without a winner', () => {
    const state = playMoves(initialState, 0, 1, 2, 4, 3, 5, 7, 6, 8);
    expect(state.result).toEqual({ kind: 'draw' });
    expect(state.scores.draws).toEqual(1);
  });

  it('starts a new round with the other player going first and keeps scores', () => {
    const won = playMoves(initialState, 0, 3, 1, 4, 2);
    const next = gameReducer(won, { type: 'NEW ROUND' });
    expect(next.board.every((cell) => cell === null)).toBe(true);
    expect(next.result).toBeNull();
    expect(next.currentPlayer).toEqual('O');
    expect(next.scores.X).toEqual(1);
  });

  it('resets scores and sets player names', () => {
    const won = playMoves(initialState, 0, 3, 1, 4, 2);
    expect(gameReducer(won, { type: 'RESET SCORES' }).scores).toEqual({ X: 0, O: 0, draws: 0 });
    expect(gameReducer(initialState, { type: 'SET PLAYER NAME', mark: 'O', name: 'Linus' }).playerNames).toEqual({ X: '', O: 'Linus' });
  });
});
