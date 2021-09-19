import React from 'react';
// Minesweeper Main Components
import Board from 'Components/Board/Board.js';
import MilliSecondTimer from 'Components/MillisecondTimer/MillisecondTimer.js';
import SkillLevelSelector from 'Components/SkillLevelSelector/SkillLevelSelector.js';
import LeaderBoard from 'Components/Leaderboard/LeaderBoard.js';
import SmileyBar from 'Components/SmileyBar/SmileyBar.js';
import UserNameEntry from 'Components/UserNameEntry/UserNameEntry.js';
import useStoreContext from 'Store/useStoreContext.js';
import './minesweeper.scss';

export default ({ ssrTopTimes }) => {
  const [{ dimensions: { skillLevel } }] = useStoreContext();

  return (
    <div className='space-containers'>
      <UserNameEntry />

      <div className='space-containers' id='main-space-container'>
        <div id='total-board' className={skillLevel}>
          <SmileyBar />
          <Board />
        </div>
        <LeaderBoard ssrTopTimes={ssrTopTimes} />
      </div>
      <div className='space-containers'>
        <MilliSecondTimer />
        <SkillLevelSelector />
      </div>
    </div>
  );
};

