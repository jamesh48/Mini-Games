import React from 'react';
// Minesweeper Main Components
import Board from 'Components/Board/Board.js';
import MilliSecondTimer from 'Components/MillisecondTimer/MillisecondTimer.js';
import SkillLevelSelector from 'Components/SkillLevelSelector/SkillLevelSelector.js';
import LeaderBoard from 'Components/Leaderboard/LeaderBoard.js';
import SmileyBar from 'Components/SmileyBar/SmileyBar.js';
import { UserNameStoreProvider } from 'UserNameStore';
import { BoardStoreProvider } from 'BoardStore';
import { TimerStoreProvider } from 'TimerStore';
import UserNameEntry from 'Components/UserNameEntry/UserNameEntry.js';
import { useGlobalContext } from 'GlobalStore';
import './minesweeper.scss';

export default ({ ssrTopTimes }) => {
  const [{ dimensions: { skillLevel } }] = useGlobalContext();

  return (
    <div className='space-containers'>
      <UserNameStoreProvider>
        <UserNameEntry />
      </UserNameStoreProvider>

      < div className='space-containers' id='main-space-container' >
        <div id='total-board' className={skillLevel}>
          <BoardStoreProvider>
            <SmileyBar />
            <Board />
          </BoardStoreProvider>
        </div>
        <LeaderBoard ssrTopTimes={ssrTopTimes} />

      </div >
      <div className='space-containers'>

        <TimerStoreProvider>
          <MilliSecondTimer />
        </TimerStoreProvider>

        <SkillLevelSelector />
      </div>
    </div >
  );
};



