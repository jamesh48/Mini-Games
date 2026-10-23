import type { Cell } from 'GameStore';
import { WINNING_LINES, findWinningLine, isBoardFull } from './winDetectionUtils';

const boardWith = (marks: Record<number, Cell>): Cell[] =>
  Array.from({ length: 9 }, (_, index) => marks[index] ?? null);

describe('win detection', () => {
  it.each(WINNING_LINES.map((line) => [line]))('detects the line %p', (line) => {
    const board = boardWith(Object.fromEntries(line.map((index) => [index, 'O'])));
    expect(findWinningLine(board, 'O')).toEqual(line);
    expect(findWinningLine(board, 'X')).toBeNull();
  });

  it('does not report a win for a broken line', () => {
    expect(findWinningLine(boardWith({ 0: 'X', 1: 'O', 2: 'X' }), 'X')).toBeNull();
  });

  it('knows when the board is full', () => {
    expect(isBoardFull(boardWith({ 0: 'X' }))).toBe(false);
    expect(isBoardFull(Array(9).fill('X'))).toBe(true);
  });
});
