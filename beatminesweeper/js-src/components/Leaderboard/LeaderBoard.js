import React, { useState, useEffect } from 'react';
import axios from 'axios';
import LeaderBoardEntry from './LeaderBoardEntry.js';
import { useGlobalContext } from 'GlobalStore';
import './leaderboard.scss';

export default
  React.memo(({ ssrTopTimes }) => {
    const [{ dimensions: { skillLevel }, topTimes }, globalDispatch] = useGlobalContext();

    const [personalized, setPersonalized] = useState(false);

    // Axios Utils--------------------------------
    const getAllResults = async () => {
      try {
        const { data: initTopScores } = await axios('/minesweeper-topTimes', { params: { skillLevel } });

        globalDispatch({ type: 'SET TOP TIMES', payload: { topTimes: initTopScores } });

      } catch (err) {
        console.error(err);
      };
    };

    const getPersonalizedResults = async () => {
      try {
        const { data: personalizedResults } = await axios('/minesweeper-topTimes', { params: { skillLevel, username: personalized } });
        globalDispatch({ type: 'SET TOP TIMES', payload: { topTimes: personalizedResults } });
      } catch (err) {
        console.error(err);
      };
    };

    useEffect(() => {
      if (personalized) {
        getPersonalizedResults()
      } else {
        getAllResults()
      }
    }, [personalized, skillLevel]);

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
        {(topTimes || ssrTopTimes).map((entry, index) => {
          return entry ? <LeaderBoardEntry key={index} personalized={personalized} index={index} entry={entry} handleClick={handleClick} formatTime={formatTime} /> : null;
        })}
        {personalized ? <input type='button' onClick={handleClick} id='return-to-leaderboard' value={`return to ${skillLevel} LeaderBoard`}>
        </input> : null}
      </div>
    )
  })