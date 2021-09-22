import React, { useState, useEffect } from 'react';
import { useBoardContext } from 'BoardStore';
import { useGlobalContext } from 'GlobalStore'
import './smileystyles.scss'

export default React.memo(() => {

  const [{ dimensions: { numberOfMines }, timerOn }, globalDispatch] = useGlobalContext();

  const [{ surprised, flagsRemaining }, boardDispatch] = useBoardContext();

  const resetCallback = () => {
    boardDispatch({ type: 'RESET SMILES' });
    boardDispatch({ type: 'SET FLAGS REMAINING', payload: numberOfMines });
    globalDispatch({ type: 'SWITCH TIMER OFF' });
  };

  return (
    <div id='smiley-bar'>
      <div className='smiley-guy'
        id={
          surprised === 'dead' ? 'dead-guy'
            : timerOn === 'VICTORY' ? 'victory-guy'
              : surprised === true ? 'surprised-guy'
                : 'smiley-guy'
        }
        onClick={resetCallback}></div>
      <div id='flags-remaining'>{flagsRemaining}</div>
    </div>
  );
});