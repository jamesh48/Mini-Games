import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ skillLevel, surprised, solidUserName }) => {
  const [topScores, setTopScores] = useState([]);
  const [personalized, setPersonalized] = useState(false);

  // Axios Utils--------------------------------
  const getAllResults = () => {
    return axios.get('/minesweeper-topTimes', { params: { skillLevel } })
      .then(({ data: results }) => {
        setTopScores(results);
      })
  }

  const getPersonalizedResults = () => {
    return axios.get('/minesweeper-topTimes', { params: { skillLevel, username: personalized } })
      .then(({ data: results }) => {
        setTopScores(results);
      })
  }

  //  Use Effect Section-------------------------
  useEffect(() => {
    if (personalized) {
      getPersonalizedResults();
    } else {
      getAllResults();
    }
  }, [skillLevel]);

  useEffect(() => {
    if (
      //Get all results on a win.
      (surprised === 'victory')
    ) {
      if (personalized) {
        getPersonalizedResults();
      } else {
        getAllResults();
      }
    }
  }, [surprised, solidUserName])

  useEffect(() => {
    if (personalized) {
      getPersonalizedResults();
    } else {
      getAllResults();
    }
  }, [personalized])


  const formatTime = (resultTime) => {
    let centiseconds = ("0" + (Math.floor(resultTime / 10) % 100)).slice(-2);
    let seconds = ("0" + (Math.floor(resultTime / 1000) % 60)).slice(-2);
    let minutes = ("0" + (Math.floor(resultTime / 60000) % 60)).slice(-2);
    let hours = ("0" + Math.floor(resultTime / 3600000)).slice(-2);

    if (minutes !== "00") {
      return `${minutes} : ${seconds} . ${centiseconds}`
    }
    if (hours !== '00') {
      return `${hours} : ${minutes}: ${seconds} . ${centiseconds}`;
    }

    return `${seconds} . ${centiseconds} secs`;
  }

  const handleClick = () => {
    const username = event.target.innerHTML;
    if (!username) {
      setPersonalized(false)
    } else {
      setPersonalized(username);
    }
  }

  const makeTitle = () => {
    let skill = skillLevel;
    skill = skill.split('');
    skill.splice(0, 1, skill[0].toUpperCase());
    skill = skill.join('');

    if (personalized) {
      let user = personalized;
      user = user.split('');
      user.splice(0, 1, user[0].toUpperCase());
      user = user.join('');
      return `${user}'s ${skill} Leaderboard:`
    } else {
      return `${skill} Leaderboard:`
    }
  }
  return (
    <div id='leaderboard'>
      <h3 className='scores-list' id='leaderboard-header'>{makeTitle()}</h3>
      {topScores.map((entry, index) => {

        const golden = (solidUserName === entry.username);

        return entry ? (
          <div key={index} className={personalized ? 'personalized scores-list' : 'scores-list'}>

            {/* Number */}
            <h5 className={golden ? 'golden scores-user' : 'scores-user'} style={{ paddingRight: '5px' }}>
              {index + 1}.
            </h5>
            {/* Name */}
            <h5 onClick={handleClick} className={golden ? 'golden scores-user' : 'scores-user'}>
              {entry.username}
            </h5>
            {/* Vertical line */}
            <h5 className={golden ? 'golden scores-user' : 'black-num scores-user'}> | </h5>
            {/* Time */}
            <h5 className={golden ? 'golden scores-time' : 'scores-time'}>
              {formatTime(entry.time)}
            </h5>
          </div>
        ) : null;
      })}
      {personalized ? <input type='button' onClick={handleClick} id='return-to-leaderboard' value={`return to ${skillLevel} LeaderBoard`}>
      </input> : null}
    </div>
  )
}