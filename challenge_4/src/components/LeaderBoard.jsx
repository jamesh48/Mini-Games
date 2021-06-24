import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default ({ skillLevel }) => {
  const [topScores, setTopScores] = useState([]);

  useEffect(() => {
    return axios.get('/topTimes', { params: { skillLevel } })
      .then(({ data: results }) => {
        setTopScores(results);
      })
  }, [skillLevel]);

  return (
    <div id='leaderboard'>
      {topScores.map((entry, index) => {
        return (<div key={index} className='scores-list'>
          <h5 className='scores-user'>{entry.username}</h5> | <h6 className='scores-time'>{entry.time}</h6>
        </div>
        )

      })}
    </div>
  )
}