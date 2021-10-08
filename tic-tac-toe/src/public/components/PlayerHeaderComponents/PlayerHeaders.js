import React from 'react';
import { useMainContext } from 'MainStore';
import { usePlayerHeaderContext } from 'PlayerHeaderStore';

import './playerHeaders.scss';

export default () => {
  const [{ xPlayerName, oPlayerName }] = useMainContext();
  const [{ xPlayerWinCount, oPlayerWinCount }] = usePlayerHeaderContext();

  return (
    <div id='player-headers'>
      <span className='player-name-headers' id='p1-name-header'>{xPlayerName || 'X Player-> '}
        <h1 className='player-name-tally' id='p-x-tally'>{xPlayerWinCount}</h1>
      </span>
      <span className='player-name-headers' id='p2-name-header'>{oPlayerName || 'O Player-> '}
        <p className='player-name-tally' id='p-o-tally'>{oPlayerWinCount}</p>
      </span>
    </div>
  );
};