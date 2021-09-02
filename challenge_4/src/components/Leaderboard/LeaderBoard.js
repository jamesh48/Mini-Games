import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeaderBoardEntry from './LeaderBoardEntry.js';
import './leaderboard.scss';

export default
  React.memo(({ skillLevel, surprised, definedUserName }) => {
    const [topScores, setTopScores] = useState([]);
    const [personalized, setPersonalized] = useState(false);

    // Axios Utils--------------------------------
    const getAllResults = async () => {
      try {
        const { data: topScores } = await axios('/minesweeper-topTimes', { params: { skillLevel } });
        setTopScores(topScores);
      } catch (err) {
        console.error(err);
      };
    };

    const getPersonalizedResults = async () => {
      try {
        const { data: personalizedResults } = await axios('/minesweeper-topTimes', { params: { skillLevel, username: personalized } });
        setTopScores(personalizedResults);
      } catch (err) {
        console.error(err);
      };
    };

    //  Use Effect Section-------------------------
    useEffect(() => {
      if (
        //Get all results on a win.
        surprised === 'victory'
      ) {
        return personalized ? getPersonalizedResults() : getAllResults();
      }
    }, [surprised, definedUserName])

    useEffect(() => personalized ? getPersonalizedResults() : getAllResults(), [personalized, skillLevel]);

    const formatTime = (resultTime) => {
      const centiseconds = ("0" + (Math.floor(resultTime / 10) % 100)).slice(-2);
      const seconds = ("0" + (Math.floor(resultTime / 1000) % 60)).slice(-2);
      const minutes = ("0" + (Math.floor(resultTime / 60000) % 60)).slice(-2);
      const hours = ("0" + Math.floor(resultTime / 3600000)).slice(-2);

      return minutes !== '00' ? `${minutes} : ${seconds} . ${centiseconds}`
        : hours !== '00' ? `${hours} : ${minutes}: ${seconds} . ${centiseconds}`
          : `${seconds} . ${centiseconds} secs`
    };

    const handleClick = ({ target: { innerHTML: username } }) => {
      return username ? setPersonalized(username) : setPersonalized(false);
    };

    const makeTitle = (personalized, skillLevel) => personalized ? `${personalized}s ${skillLevel} Leaderboard:` : `${skillLevel} Leaderboard`;

    return (
      <div id='leaderboard'>
        <h3 className='scores-list' id='leaderboard-header'>{makeTitle(personalized, skillLevel)}</h3>
        {topScores.map((entry, index) => {
          return entry ? <LeaderBoardEntry definedUserName={definedUserName} personalized={personalized} index={index} entry={entry} handleClick={handleClick} formatTime={formatTime} /> : null;
        })}
        {personalized ? <input type='button' onClick={handleClick} id='return-to-leaderboard' value={`return to ${skillLevel} LeaderBoard`}>
        </input> : null}
      </div>
    )
  })