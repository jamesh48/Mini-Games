import React from 'react';
// Player Header
import { PlayerHeaderStoreProvider } from 'Components/PlayerHeaderComponents/PlayerHeaderStore/playerHeaderStore.js';
import PlayerHeaders from 'Components/PlayerHeaderComponents/PlayerHeaders.js';

// Board
import { BoardStoreProvider } from 'Components/BoardComponents/BoardStore/boardStore.js';
import Board from 'Components/BoardComponents/Board.js';

import PlayerNameEntry from 'Components/PlayerNameEntryComponents/PlayerNameEntry.js';

import './main-styles/reset.scss';
import './main-styles/main.scss';
import './main-styles/global.scss';

export default () => {
  return (
    <div id='container'>
      <PlayerHeaderStoreProvider>
        <PlayerHeaders />
      </PlayerHeaderStoreProvider>

      <BoardStoreProvider>
        <Board />
      </BoardStoreProvider>

      <PlayerNameEntry />
    </div>
  )
}