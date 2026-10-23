import React from 'react';
import ReactDOM from 'react-dom';
import { CacheProvider } from '@emotion/react';
import TicTacToe from 'Components/TicTacToe';
import type { ServerSnapshot } from 'GameStore';
import createEmotionCache from './public/createEmotionCache';

declare global {
  interface Window {
    __TICTACTOE__?: ServerSnapshot;
  }
}

ReactDOM.hydrate(
  <CacheProvider value={createEmotionCache()}>
    <TicTacToe snapshot={window.__TICTACTOE__} />
  </CacheProvider>,
  document.getElementById('tictactoe-root')
);
