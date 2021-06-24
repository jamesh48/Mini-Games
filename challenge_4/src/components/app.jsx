import React, { useState, useEffect } from 'react';
import axios from 'axios';

import Board from './Board.jsx';
import MilliSecondTimer from './MillisecondTimer.jsx';
import SkillLevelSelector from './skillLevel.jsx';
import LeaderBoard from './LeaderBoard.jsx';

export default () => {
  const [skillLevel, setSkillLevel] = useState('beginner');
  const [timerOn, setTimerOn] = useState(false);
  const [timerTime, setTimerTime] = useState(0);

  useEffect(() => {
    if (timerOn === true) {
      window.timer = setInterval(() => {
        setTimerTime((prevTimerTime) => prevTimerTime += 10);
      }, 10)
    }
  }, [timerOn]);

  const postResult = () => {
    return axios.post('/topTimes', null, { params: { skillLevel, timerTime } }).then((results) => console.log(results))
  }

  const timerOnCallback = (indicator) => {

    if (indicator === 'bomb') {
      clearInterval(window.timer);
      console.log(window.timer);
      // setTimerOn(false)
    } else if (indicator === 'victory') {
      clearInterval(window.timer);
      alert('Victorious!')
      postResult();
    } else {
      setTimerOn(true);
    }
  }

  const skillCallback = () => {
    setSkillLevel(event.target.id);
  }

  return (
    <div>
      <div style={{display: 'flex'}}>

      <div id='total-board' className={skillLevel}>
        <Board timerOnCallback={timerOnCallback} timerOn={timerOn} skillLevel={skillLevel} />
      </div>

      <LeaderBoard skillLevel={skillLevel} />
      </div>

      <MilliSecondTimer timerTime={timerTime} />
      <SkillLevelSelector skillCallback={skillCallback} />
    </div>
  )
}

