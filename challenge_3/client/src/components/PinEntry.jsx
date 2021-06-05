import React, { useState, useEffect } from 'react';
import BowlingBall from './BowlingBall.jsx';
export default ({ pinCount, pinReset, sweepBarPosition, handleBowl, pinEntryClientHeight }) => {
  const [pinEntry, setPinEntry] = useState(0);
  // Validation Tests
  const prospectivePins = (Number(pinEntry) + Number(pinCount));
  const rightAmountOfPins = (pinEntry > 0 && (prospectivePins <= 10));
  const strikeOrSpare = prospectivePins === 10;
  const tooManyPins = prospectivePins > 10;

  return (
    <div style={{ bottom: `${sweepBarPosition !== 0 ? sweepBarPosition + 'px' : '-47.5vh'}` }} ref={pinEntryClientHeight} id={sweepBarPosition !== 0 ? 'sweep-bar' : 'pin-entry'}>
      {sweepBarPosition === 0 ?

        <form onSubmit={(e) => {
          return new Promise((resolve, reject) => {
            handleBowl(e, resolve)
          }).then(() => {
            setPinEntry(10 - (pinCount + Number(pinEntry)))
          })
        }}>

          <input id={rightAmountOfPins ? 'pin-input-active' : tooManyPins ? 'pin-input-invalid' : 'pin-input-inactive'} type='text' value={pinEntry || ''} onChange={() => { setPinEntry(event.target.value) }}></input>
          <button hidden style={{ display: 'none' }}
            // id={rightAmountOfPins ? 'bowl-button-active' : 'bowl-button-inactive'}
            type='submit'>Bowl!</button>
        </form> : null
      }

    </div>
  )
}