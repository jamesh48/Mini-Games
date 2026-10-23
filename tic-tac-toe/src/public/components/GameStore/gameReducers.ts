import { findWinningLine, isBoardFull } from 'Components/BoardComponents/winDetectionUtils';
import type { GameAction, GameState, Mark } from './types';

const otherPlayer = (mark: Mark): Mark => (mark === 'X' ? 'O' : 'X');

const emptyBoard = () => Array(9).fill(null);

const initialState: GameState = {
  board: emptyBoard(),
  currentPlayer: 'X',
  startingPlayer: 'X',
  result: null,
  playerNames: { X: '', O: '' },
  scores: { X: 0, O: 0, draws: 0 }
};

const gameReducer = (state: GameState, action: GameAction): GameState => {
  switch (action.type) {
    case 'PLAY MOVE': {
      if (state.result || state.board[action.index] !== null) return state;

      const board = state.board.slice();
      board[action.index] = state.currentPlayer;

      const winningLine = findWinningLine(board, state.currentPlayer);
      if (winningLine) {
        return {
          ...state,
          board,
          result: { kind: 'win', winner: state.currentPlayer, line: winningLine },
          scores: { ...state.scores, [state.currentPlayer]: state.scores[state.currentPlayer] + 1 }
        };
      }

      if (isBoardFull(board)) {
        return { ...state, board, result: { kind: 'draw' }, scores: { ...state.scores, draws: state.scores.draws + 1 } };
      }

      return { ...state, board, currentPlayer: otherPlayer(state.currentPlayer) };
    }
    case 'NEW ROUND': {
      // players take turns going first each round
      const startingPlayer = otherPlayer(state.startingPlayer);
      return { ...state, board: emptyBoard(), result: null, startingPlayer, currentPlayer: startingPlayer };
    }
    case 'RESET SCORES':
      return { ...state, scores: initialState.scores };
    case 'SET PLAYER NAME':
      return { ...state, playerNames: { ...state.playerNames, [action.mark]: action.name } };
    default:
      return state;
  }
};

export { initialState, gameReducer, otherPlayer };
