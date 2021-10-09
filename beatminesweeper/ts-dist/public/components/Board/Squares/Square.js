import React from 'react';
import { genNumberClassNames, genEmptyClassNames, genMineClassNames, handleClick, generateLoginMessage } from './squareUtils';
import { useGlobalContext } from 'GlobalStore';
import { useBoardContext } from 'BoardStore';
import './sweepsquarestyles.scss';
const Square = React.memo((props) => {
    const { currTile } = props;
    const [{ dimensions: { skillLevel }, definedUserName, dimensions, timerOn }, globalDispatch] = useGlobalContext();
    const [{ colors, mineArr, flippers, numbers }, boardDispatch] = useBoardContext();
    const tileIsAMine = mineArr.includes(currTile) && flippers[currTile] && flippers[currTile] !== 'flag';
    const tileIsANumber = flippers[currTile] && flippers[currTile] !== 'flag' && numbers[currTile];
    const userNotLoggedIn = !definedUserName;
    return (React.createElement("div", { "data-testid": `test-${currTile}`, onClick: (e) => {
            if (mineArr.includes(currTile)) {
                globalDispatch({ type: 'FREEZE TIMER STATE DEAD' });
                return handleClick(e, {
                    dimensions,
                    mineArr,
                    numbers,
                    currTile,
                    indicator: 'dead',
                    boardDispatch
                });
            }
            ;
            if (flippers[currTile] === 'flag')
                boardDispatch({ type: 'INCREMENT FLAGS REMAINING' });
            if (!timerOn) {
                globalDispatch({ type: 'SWITCH TIMER ON' });
                return handleClick(e, {
                    dimensions,
                    mineArr,
                    numbers,
                    currTile,
                    boardDispatch
                });
            }
            ;
            return handleClick(e, {
                dimensions,
                mineArr,
                numbers,
                currTile,
                indicator: null,
                boardDispatch
            });
        }, onMouseDown: () => {
            if (!flippers[currTile])
                boardDispatch({ type: 'SURPRISED SMILES' });
        }, onMouseUp: (e) => {
            if (mineArr.includes(currTile) && e.button === 0 && !e.ctrlKey) {
                return boardDispatch({ type: 'DEAD SMILES' });
            }
            ;
            return boardDispatch({ type: 'RESET SMILES' });
        }, onContextMenu: (e) => {
            if (flippers[currTile] !== true) {
                boardDispatch({ type: flippers[currTile] === false ? 'DECREMENT FLAGS REMAINING' : 'INCREMENT FLAGS REMAINING' });
                return handleClick(e, {
                    dimensions,
                    mineArr,
                    numbers,
                    currTile,
                    boardDispatch
                });
            }
            ;
            e.preventDefault();
        }, className: mineArr.includes(currTile) ? genMineClassNames({
            timerOn,
            skillLevel,
            flippers,
            colors,
            currTile
        })
            : numbers[currTile] ? genNumberClassNames({
                skillLevel,
                definedUserName,
                timerOn,
                flippers,
                numbers,
                colors,
                currTile
            })
                : genEmptyClassNames({
                    skillLevel,
                    definedUserName,
                    timerOn,
                    flippers,
                    colors,
                    currTile
                }) }, userNotLoggedIn ?
        generateLoginMessage({
            currTile,
            skillLevel
        })
        : tileIsANumber ? numbers[currTile]
            : tileIsAMine ? '*'
                : null));
});
export default Square;
//# sourceMappingURL=Square.js.map