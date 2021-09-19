import React, { useState, useEffect } from 'react';
import useStoreContext from 'Store/useStoreContext.js';
import './smileystyles.scss'

export default React.memo(() => {

  const [{ surprised, flagsRemaining }, dispatch] = useStoreContext();

  const resetCallback = () => {
    dispatch({ type: 'RESET SMILES' });
    dispatch({ type: 'SWITCH TIMER OFF' });
  }

  return (
    <div id='smiley-bar'>
      <div className='smiley-guy'
        id={
          surprised === 'dead' ? 'dead-guy'
            : surprised === 'victory' ? 'victory-guy'
              : surprised === true ? 'surprised-guy'
                : 'smiley-guy'
        }
        onClick={resetCallback}></div>
      <div id='flags-remaining'>{flagsRemaining}</div>
    </div>
  );
});