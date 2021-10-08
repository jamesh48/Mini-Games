import React from 'react';
import ReactDOM from 'react-dom';
import Minesweeper from './components/Minesweeper/Minesweeper.js';
import { GlobalStoreProvider } from 'GlobalStore';

ReactDOM.hydrate(
  (
    <GlobalStoreProvider>
      <Minesweeper ssrTopTimes={window.__INITIAL__DATA__.topTimes} />
    </GlobalStoreProvider>
  ),
  document.getElementById('minesweeper-root')
);
