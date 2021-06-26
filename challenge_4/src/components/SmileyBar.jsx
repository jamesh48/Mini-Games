import React, {useState, useEffect} from 'react';

export default ({surprised, flagsRemaining, resetCallback}) => {

  return (
    <div id='smiley-bar' style={{alignItems: 'center'}}>
      <div className='smiley-guy' id={surprised === 'dead' ? 'dead-guy' : surprised === 'victory' ? 'victory-guy' : surprised === true ? 'surprised-guy' : 'smiley-guy'} onClick={() => {resetCallback()}}></div>
      <div id='flags-remaining'>{flagsRemaining}</div>
    </div>
  )
}