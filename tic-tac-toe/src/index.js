import React from 'react';
import ReactDOM from 'react-dom';
import TicTacToe from 'Components/TicTacToe.js';

ReactDOM.hydrate(
  <TicTacToe />,
  document.getElementById('tictactoe-root')
);
