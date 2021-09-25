import React, { useState } from 'react';
import { useMainContext } from 'MainStore';
import './playerNameEntry.scss';

export default () => {
  const [{xPlayerName, oPlayerName}, mainDispatch] = useMainContext();

  const [localXPlayerName, setLocalXPlayerName] = useState('');
  const [localOPlayerName, setLocalOPlayerName] = useState('');

  const handleSubmit = () => {
    event.preventDefault();
    if (localXPlayerName && localOPlayerName) {
      mainDispatch({ type: 'SUBMIT X PLAYER NAME', payload: localXPlayerName });
      mainDispatch({ type: 'SUBMIT O PLAYER NAME', payload: localOPlayerName });
    }
  };

  return (
    <div id='player-name-entry'>
      <legend id='enter-your-players'>Enter Your Players!</legend>
      <form className="enter-players" onSubmit={handleSubmit}>
        <input className='player-name-input' autoComplete='off' id='p1' type='text' placeholder='X Player' value={localXPlayerName} onChange={() => {
          return xPlayerName ? null :
            setLocalXPlayerName(event.target.value);
        }}></input>
        <input className='player-name-input' autoComplete='off' id='p2' type='text' placeholder='O Player' value={localOPlayerName} onChange={() => {
          return oPlayerName ? null :
            setLocalOPlayerName(event.target.value);
        }}></input>
        <input className='player-name-input' autoComplete='off' id='board-size' type='text' placeholder='Board Width'></input>
        <button type='submit' value='Submit' hidden>Submit Form</button>
      </form>

      <form>
        <input id='new-game-button' type='button' value='New Game!'></input>
      </form>
    </div>
  )
}