import React, { useState, useEffect } from 'react';
import useStoreContext from 'Store/useStoreContext.js';
import { useInterval } from 'Components/customHooks.js';

import './millisecondstyles.scss';

export default () => {
  const [{ dimensions: { skillLevel }, timerOn, timerTime, timerDelay }, dispatch] = useStoreContext();

  // If Delay is null, clear the timer
  useEffect(() => {
    if (timerDelay === null) dispatch({ type: 'CLEAR TIMER TIME' })
  }, [timerDelay]);


  useInterval(() => {
    dispatch({ type: 'ITERATE TIMER TIME', payload: timerDelay });
  }, timerDelay);


  // If Timer is changed to true, start the timer.
  useEffect(async () => {
    if (timerOn && timerOn !== 'bombed') {
      dispatch({ type: 'INIT TIMER DELAY' });
    } else {
      dispatch({ type: 'UNSET TIMER DELAY' });
    };
  }, [timerOn]);

  const centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
  const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <div style={{ width: '100%', display: 'flex', justifyContent: 'center' }}>
      <h4 id='milli-second-timer' className={skillLevel}>
        {
          hours !== '00' ?
            `${hours} : ${minutes} : ${seconds} : ${centiseconds}`
            : minutes !== '00' ?
              `${minutes} : ${seconds} : ${centiseconds}`
              : `${seconds} : ${centiseconds}`
        }
      </h4>
    </div>
  )
};