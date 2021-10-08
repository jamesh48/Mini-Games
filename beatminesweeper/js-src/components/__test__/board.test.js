/**
 * @jest-environment jsdom
 */

import React from 'react';
import ReactDOM from 'react-dom';
import Board from './../Board';
import { fireEvent, render, screen, prettyDOM, expectAnything } from '@testing-library/react'




// beforeEach(() => {
// const div = document.createElement('div');
// ReactDOM.render(<Board/>, div);
// render(<Board/>);
// })
// it('renders without crashing', () => {

// });

it('expect there to be 10 bombs in a beginner board', () => {
  // const div = document.createElement('div');
  // ReactDOM.render(<Board/>, div);
  const board = render(<Board />);
  let bombCount = 0;
  let boardTiles = document.querySelectorAll("[data-testid]");

  for (let i = 0; i < boardTiles.length; i++) {
    expect(board.getByTestId('test-' + i).innerHTML).toBeFalsy();
    fireEvent.click(board.getByTestId(`test-${i}`));
    if (board.getByTestId(`test-${i}`).innerHTML === '*') {
      bombCount++;
    }
  };
  if (boardTiles.length === 81) {
    expect(bombCount).toEqual(10);
  }
});
