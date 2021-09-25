import React from 'react';
// Player Header
import PlayerHeaderComponent from '../PlayerHeaderComponents/PlayerHeaders.js';
import { PlayerHeaderStoreProvider } from '../PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js';

// Board
import { BoardStoreProvider } from '../BoardComponents/BoardStore/boardStore.js';
import Board from '../BoardComponents/Board.js';

import PlayerNameEntry from 'Components/PlayerNameEntryComponents/PlayerNameEntry.js';

import './main-styles/reset.scss';
import './main-styles/main.scss';
import './main-styles/global.scss';

export default () => {
  return (
    <div id='container'>
      <PlayerHeaderStoreProvider>
        <PlayerHeaderComponent />
      </PlayerHeaderStoreProvider>

      <BoardStoreProvider>
        <Board />
      </BoardStoreProvider>

      <PlayerNameEntry />
    </div>
  )
}