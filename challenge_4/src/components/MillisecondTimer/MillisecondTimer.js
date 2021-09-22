import React, { useState, useEffect } from 'react';
import postResult from './postResult.js';
import { useGlobalContext } from 'GlobalStore';
import { useInterval } from 'Components/customHooks.js';
import { useTimerContext } from './TimerStore/timerStore.js';
import './millisecondstyles.scss';

export default () => {
  const [{ dimensions: { skillLevel }, definedUserName, timerOn }, globalDispatch] = useGlobalContext();

  const [{ timerTime }, timerDispatch] = useTimerContext();

  useInterval(() => {
    timerDispatch({ type: 'ITERATE TIMER TIME', payload: 10 });
  }, timerOn === true ? 10 : timerOn === 'FREEZE' || timerOn === 'VICTORY' ? -1 : null);


  // If Timer is changed to true, start the timer.
  useEffect(async () => {
    if (timerOn === false) {
      timerDispatch({ type: 'CLEAR TIMER TIME' });
    };

    if (timerOn === 'VICTORY') {
      const newTopTimes = await postResult(skillLevel, definedUserName, timerTime);

      globalDispatch({ type: 'SET TOP TIMES', payload: { topTimes: newTopTimes } });
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