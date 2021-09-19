import React from 'react';
import ReactDOM from 'react-dom';
import Minesweeper from './components/Minesweeper/Minesweeper.js';
import { StoreProvider } from './store/store.js';

ReactDOM.hydrate(
  (
    <StoreProvider>
      <Minesweeper ssrTopTimes={window.__INITIAL__DATA__.topTimes} />
    </StoreProvider>
  ),
  document.getElementById('minesweeper-root')
);
