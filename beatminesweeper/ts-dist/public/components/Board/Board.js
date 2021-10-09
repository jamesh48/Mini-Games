import React from 'react';
import { useGlobalContext } from 'GlobalStore';
import { useBoardContext } from 'BoardStore';
import BoardHooks from './useEffectBoardHooks';
import { useInterval } from 'CustomHooks';
import Square from 'TSComponents/Board/Squares/Square';
import './boardstyles.scss';
const Board = () => {
    const [{ dimensions, definedUserName, timerOn, dimensions: { skillLevel } }, globalDispatch] = useGlobalContext();
    const [{ flippers, mineArr, numbers, scrollBoard, colorDelay }, boardDispatch] = useBoardContext();
    BoardHooks.freezeColorDelayEffect(definedUserName, boardDispatch);
    BoardHooks.stopColorIterationEffect(colorDelay, boardDispatch);
    BoardHooks.freezeScrollBoardEffect(scrollBoard);
    BoardHooks.generateMinesEffect(dimensions, boardDispatch);
    BoardHooks.generateNumberEffect(mineArr, dimensions, boardDispatch);
    BoardHooks.resetGameEffectOnSmileyOrSkill(timerOn, dimensions, boardDispatch);
    BoardHooks.resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, boardDispatch);
    useInterval(() => boardDispatch({ type: 'ITERATE COLORS' }), colorDelay);
    BoardHooks.revealFlipperEffect({ mineArr, flippers, numbers, globalDispatch, boardDispatch });
    BoardHooks.resetOnSkillLevelChangeEffect(skillLevel, globalDispatch);
    const setScrollBoardCallback = React.useCallback(() => boardDispatch({ type: "TOGGLE SCROLLBOARD" }), []);
    const handleScroll = (e) => boardDispatch({
        type: "MODULATE COLOR DELAY",
        payload: { newColorDelay: e.deltaY },
    });
    return (React.createElement("div", { id: "play-board", onWheel: (e) => colorDelay ? handleScroll(e) : null, onMouseEnter: () => colorDelay ? setScrollBoardCallback() : null, onMouseLeave: () => colorDelay ? setScrollBoardCallback() : null }, [...new Array(dimensions.verticalDimension)].map((_, rowIndex) => {
        return (React.createElement("div", { key: rowIndex, className: 'sweep-row' }, [...new Array(dimensions.horizontalDimension)].map((_, sqrIndex) => {
            const currTile = ((rowIndex * dimensions.horizontalDimension) + sqrIndex);
            return (React.createElement(Square, { key: sqrIndex, currTile: currTile }));
        })));
    })));
};
export default Board;
//# sourceMappingURL=Board.js.map