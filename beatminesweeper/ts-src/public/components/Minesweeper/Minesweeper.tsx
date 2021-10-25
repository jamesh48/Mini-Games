import React from "react";

import { useGlobalContext } from "GlobalStore";
import { TimerStoreProvider } from "TimerStore";
import { BoardStoreProvider } from "BoardStore";

import Board from "TSComponents/Board/Board";
import MillisecondTimer from "TSComponents/MillisecondTimer/MillisecondTimer";
import SkillLevelSelector from "TSComponents/SkillLevelSelector/SkillLevelSelector";

import SmileyBar from "TSComponents/SmileyBar/SmileyBar";

import "./minesweeper.scss";


const Minesweeper: React.FC<{}> = () => {
  const [
    {
      dimensions: { skillLevel },
    },
  ] = useGlobalContext();

  return (
    <div className="space-containers" id="main-space-container">
      <div id="total-board" className={skillLevel}>
        <BoardStoreProvider>
          <SmileyBar />
          <Board />
        </BoardStoreProvider>
      </div>

        <TimerStoreProvider>
          <MillisecondTimer />
        </TimerStoreProvider>

      <SkillLevelSelector />
    </div>
  );
};

export default Minesweeper;
