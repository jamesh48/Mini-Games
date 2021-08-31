import React, { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";
import Board from './Board.jsx';
import MilliSecondTimer from './MillisecondTimer.jsx';
import SkillLevelSelector from './skillLevel.jsx';
import LeaderBoard from './LeaderBoard.jsx';
import SmileyBar from './SmileyBar.jsx';
import UserNameEntry from './UserNameEntry.jsx';
import useInterval from './useInterval.jsx';
import { pure } from 'recompose';

import '../minesweeper.css';

export default () => {
  const [skillLevel, setSkillLevel] = useState('beginner');
  const [timerOn, setTimerOn] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const [flagsRemaining, setFlagsRemaining] = useState(10)
  const [surprised, setSurprised] = useState(false);

  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');
  const [delay, setDelay] = useState(null);
  const [definedUserName, setSolidUserName] = useState(null);

  // If Delay is null, clear the timer
  useEffect(() => {
    if (delay === null) {
      setTimerTime(0);
    };
  }, [delay]);

  // If Timer is changed to true, start the timer.
  useEffect(async () => {
    if (Array.isArray(timerOn)) {
      const result = await postResult(timerOn[0]);
      setDelay(-1);
    } else {
      setDelay(() => (timerOn && timerOn !== 'bombed') ? 10 : null)
    }
  }, [timerOn]);

  useInterval(() => {
    setTimerTime((prevTimerTime) => prevTimerTime += 10);
  }, delay);

  // This resets the flags whenever the skillLevel is changed or game is reset
  useEffect(() => {
    if (timerOn === false) {
      setFlagsRemaining(() => skillLevel === 'beginner' ? 10 : skillLevel === 'intermediate' ? 40 : 99);
    };
  }, [skillLevel, timerOn]);

  const postResult = async (resultTime) => {
    const { data: results } = await axios.post('/minesweeper-topTimes', null, { params: { skillLevel, definedUserName, resultTime } });
    return results;
  };

  const timerOnCallback = useCallback((indicator) => {
    if (Array.isArray(indicator)) {
      setTimerOn(indicator);
    } else if (indicator === 'bomb') {
      setTimerOn('bombed')
    } else if (!Array.isArray(indicator)) {
      setTimerOn(true);
    };
  }, []);

  const skillCallback = ({ target: { id } }) => {
    setSkillLevel(id);
  };

  const flagsRemainingCallback = useCallback((indicator) => {
    if (indicator === true) {
      setFlagsRemaining((prevFlagsRemaining) => prevFlagsRemaining - 1);
    }
    if (indicator === false) {
      setFlagsRemaining((prevFlagsRemaining) => prevFlagsRemaining + 1);
    }
  }, []);

  const resetCallback = () => {
    setSurprised(false);
    setTimerOn(false);
  };

  const surprisedCallback = useCallback((indicator) => {
    if (indicator === 'victory') {
      setSurprised('victory')
    } else if (indicator === 'dead') {
      setSurprised('dead')
    } else if (indicator === 'reset') {
      setSurprised(false);
    } else {
      setSurprised(true);
    }
  }, []);

  const handleSubmit = async () => {
    event.preventDefault();

    const { data: result } = await axios('/minesweeper-validateUser', { params: { userName, userPass } });

    if (result === 'does not exist') {
      const prompt = window.confirm('User does not exist, Create new user?');
      if (prompt) {
        const { data: posted } = await axios.post('/minesweeper-createUser', null, { params: { userName, userPass } });
        setSolidUserName(userName);
      };
    } else if (result === 'wrong password') {
      alert('Wrong Password, try again...');
    } else {
      setSolidUserName(userName)
    };
  };

  const userPassCallback = ({ target: { value } }) => {
    setUserPass(value);
  };

  const userNameCallback = ({ target: { value } }) => {
    setUserName(value);
  };

  return (
    <div>
      <UserNameEntry userName={userName} userPassCallback={userPassCallback} userPass={userPass} handleSubmit={handleSubmit} userNameCallback={userNameCallback} definedUserName={definedUserName} skillLevel={skillLevel} />

      <div style={{ display: 'flex' }}>
        <div id='total-board' className={skillLevel}>
          <SmileyBar surprised={surprised} skillLevel={skillLevel} flagsRemaining={flagsRemaining} resetCallback={resetCallback} />
          <Board
            timerTime={timerTime}
            definedUserName={definedUserName}
            surprised={surprised}
            surprisedCallback={surprisedCallback}
            timerOnCallback={timerOnCallback}
            timerOn={timerOn}
            skillLevel={skillLevel}
            resetCallback={resetCallback}
            flagsRemainingCallback={flagsRemainingCallback}
            flagsRemaining={flagsRemaining}
          />
        </div>
        <LeaderBoard definedUserName={definedUserName} skillLevel={skillLevel} surprised={surprised} />
      </div>
      <div>
        <MilliSecondTimer skillLevel={skillLevel} timerTime={timerTime} />

        <SkillLevelSelector skillLevel={skillLevel} skillCallback={skillCallback} />
      </div>
    </div>
  );
};

