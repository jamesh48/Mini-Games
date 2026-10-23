import type { Cell, Mark, WinningLine } from 'Components/GameStore/types';

const WINNING_LINES: readonly WinningLine[] = [
  // rows
  [0, 1, 2], [3, 4, 5], [6, 7, 8],
  // columns
  [0, 3, 6], [1, 4, 7], [2, 5, 8],
  // diagonals
  [0, 4, 8], [2, 4, 6]
];

const findWinningLine = (board: readonly Cell[], player: Mark): WinningLine | null =>
  WINNING_LINES.find((line) => line.every((index) => board[index] === player)) ?? null;

const isBoardFull = (board: readonly Cell[]): boolean => board.every((cell) => cell !== null);

export { WINNING_LINES, findWinningLine, isBoardFull };
