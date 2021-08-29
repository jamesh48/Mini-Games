import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Board from './Board.jsx';
import MilliSecondTimer from './MillisecondTimer.jsx';
import SkillLevelSelector from './skillLevel.jsx';
import LeaderBoard from './LeaderBoard.jsx';
import SmileyBar from './SmileyBar.jsx';
import UserNameEntry from './UserNameEntry.jsx';

import '../minesweeper.css';

export default () => {
  const [skillLevel, setSkillLevel] = useState('beginner');
  const [timerOn, setTimerOn] = useState(false);
  const [timerTime, setTimerTime] = useState(0);
  const [flagsRemaining, setFlagsRemaining] = useState(10)
  const [surprised, setSurprised] = useState(false);

  const [userName, setUserName] = useState('');
  const [userPass, setUserPass] = useState('');

  const [solidUserName, setSolidUserName] = useState(null);


  useEffect(() => {
    if (timerOn === true) {
      window.timer = setInterval(() => {
        setTimerTime((prevTimerTime) => prevTimerTime += 10);
      }, 10)
    }
    if (timerOn === false) {
      clearInterval(window.timer);
      setTimerTime(0);
    }

    if (timerOn === 'bombed') {
      clearInterval(window.timer);
    }
  }, [timerOn]);


  useEffect(() => {
    if (skillLevel === 'beginner') {
      setFlagsRemaining(10);
    }

    if (skillLevel === 'intermediate') {
      setFlagsRemaining(40);
    }

    if (skillLevel === 'advanced') {
      setFlagsRemaining(99);
    }

  }, [skillLevel])

  useEffect(() => {
    if (timerOn === false) {
      if (skillLevel === 'beginner') {
        setFlagsRemaining(10);
      }

      if (skillLevel === 'intermediate') {
        setFlagsRemaining(40);
      }

      if (skillLevel === 'advanced') {
        setFlagsRemaining(99);
      }
    }
  }, [timerOn])

  const postResult = () => {
    return axios.post('/minesweeper-topTimes', null, { params: { skillLevel, solidUserName, timerTime } }).then((results) => console.log(results))
  }

  const timerOnCallback = (indicator) => {
    if (indicator === 'bomb') {
      setTimerOn('bombed')
      clearInterval(window.timer);
    } else if (indicator === 'victory') {
      clearInterval(window.timer);
      postResult();
    } else {
      setTimerOn(true);
    }
  }

  const skillCallback = () => {
    setSkillLevel(event.target.id);
  }

  const flagsRemainingCallback = (indicator) => {
    if (indicator === true) {
      setFlagsRemaining((prevFlagsRemaining) => prevFlagsRemaining - 1);
    }

    if (indicator === false) {
      setFlagsRemaining((prevFlagsRemaining) => prevFlagsRemaining + 1);
    }
  }

  const resetCallback = () => {
    setSurprised(false);
    setTimerOn(false);
  }

  const surprisedCallback = (indicator) => {
    if (indicator === 'victory') {
      setSurprised('victory')
    } else if (indicator === 'dead') {
      setSurprised('dead')
    } else if (indicator === 'reset') {
      setSurprised(false);
    } else {
      setSurprised(true);
    }
  }

  const handleSubmit = () => {
    event.preventDefault();
    return axios('/minesweeper-validateUser', { params: { userName, userPass } })
      .then(({ data: result }) => {
        if (result === 'does not exist') {
          let prompt = window.confirm('User does not exist, Create new user?');
          if (prompt) {
            return axios.post('/minesweeper-createUser', null, { params: { userName, userPass } })
              .then(({ data: posted }) => {
                setSolidUserName(userName)
              })
          }
        } else if (result === 'wrong password') {
          alert('Wrong Password, try again');
        } else {
          setSolidUserName(userName);
        }
      })
  }

  const userPassCallback = () => {
    setUserPass(event.target.value);
  }
  const userNameCallback = () => {
    setUserName(event.target.value);
  }

  return (
    <div>
      <UserNameEntry userName={userName} userPassCallback={userPassCallback} userPass={userPass} handleSubmit={handleSubmit} userNameCallback={userNameCallback} solidUserName={solidUserName} skillLevel={skillLevel} />

      <div style={{ display: 'flex' }}>
        <div id='total-board' className={skillLevel}>
          <SmileyBar surprised={surprised} skillLevel={skillLevel} flagsRemaining={flagsRemaining} resetCallback={resetCallback} />
          <Board solidUserName={solidUserName} surprised={surprised} surprisedCallback={surprisedCallback} timerOnCallback={timerOnCallback} timerOn={timerOn} skillLevel={skillLevel} resetCallback={resetCallback} flagsRemainingCallback={flagsRemainingCallback} flagsRemaining={flagsRemaining} />
        </div>
        <LeaderBoard solidUserName={solidUserName} skillLevel={skillLevel} surprised={surprised} />
      </div>
      <div>
        <MilliSecondTimer skillLevel={skillLevel} timerTime={timerTime} />

        <SkillLevelSelector skillLevel={skillLevel} skillCallback={skillCallback} />
      </div>
    </div>
  )
}

