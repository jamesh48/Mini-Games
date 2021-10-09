import React from "react";
import { useGlobalContext } from "GlobalStore";
import { TimerStoreProvider } from "TimerStore";
import { BoardStoreProvider } from "BoardStore";
import Board from "TSComponents/Board/Board";
import MillisecondTimer from "TSComponents/MillisecondTimer/MillisecondTimer";
import SkillLevelSelector from "TSComponents/SkillLevelSelector/SkillLevelSelector";
import SmileyBar from "TSComponents/SmileyBar/SmileyBar";
import "./minesweeper.scss";
const Minesweeper = () => {
    const [{ dimensions: { skillLevel }, },] = useGlobalContext();
    return (React.createElement("div", { className: "space-containers", id: "main-space-container" },
        React.createElement("div", { id: "total-board", className: skillLevel },
            React.createElement(BoardStoreProvider, null,
                React.createElement(SmileyBar, null),
                React.createElement(Board, null))),
        React.createElement(TimerStoreProvider, null,
            React.createElement(MillisecondTimer, null)),
        React.createElement(SkillLevelSelector, null)));
};
export default Minesweeper;
//# sourceMappingURL=Minesweeper.js.map