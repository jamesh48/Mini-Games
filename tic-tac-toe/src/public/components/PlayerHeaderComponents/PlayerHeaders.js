import React from 'react';
import { usePlayerHeaderContext } from './PlayerHeaderStore/playerHeaderStore.js';
import { useMainContext } from 'MainStore';
import './playerHeaders.scss';

export default () => {
  const [{ xPlayerName, oPlayerName }] = useMainContext();

  return (
    <div id='player-headers'>
      <span className='player-name-headers' id='p1-name-header'>{xPlayerName || 'X Player-> '}
        <h1 className='player-name-tally' id='p-x-tally'>0</h1>
      </span>
      <span className='player-name-headers' id='p2-name-header'>{oPlayerName || 'O Player-> '}
        <p className='player-name-tally' id='p-o-tally'>0</p>
      </span>
    </div>
  );
};