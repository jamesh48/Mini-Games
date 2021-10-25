import React from 'react';
import {CurrTile} from 'MinesweeperTypes';
import { genNumberClassNames, genEmptyClassNames, genMineClassNames, handleClick, generateLoginMessage } from './squareUtils';
import { useGlobalContext } from 'GlobalStore';
import { useBoardContext } from 'BoardStore';
import './sweepsquarestyles.scss';

type Props = {
  currTile: CurrTile
};

const Square: React.FC<Props> = React.memo((props) => {
  const { currTile } = props;
  const [{ isProxied, dimensions: { skillLevel }, definedUserName, dimensions, timerOn }, globalDispatch] = useGlobalContext();

  const [{ colors, mineArr, flippers, numbers }, boardDispatch] = useBoardContext();


  const tileIsAMine = mineArr.includes(currTile) && flippers[currTile] && flippers[currTile] !== 'flag';

  const tileIsANumber = flippers[currTile] && flippers[currTile] !== 'flag' && numbers[currTile];

  const userNotLoggedIn = !definedUserName;

  return (
    <div
      data-testid={`test-${currTile}`}

      onClick={
        (e) => {
          // If tile is a bomb...
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
          };
          // Is a Number or a Empty Square
          // If an empty space is revealed under a flag, increment remaining flags
          if (flippers[currTile] === 'flag') boardDispatch({ type: 'INCREMENT FLAGS REMAINING' });
          // Start the timer and reveal the tile
          if (!timerOn) {
            globalDispatch({ type: 'SWITCH TIMER ON' });

            return handleClick(e, {
              dimensions,
              mineArr,
              numbers,
              currTile,
              boardDispatch
            });
          };
          // Normal Play
          return handleClick(e, {
            dimensions,
            mineArr,
            numbers,
            currTile,
            indicator: null,
            boardDispatch
          });
        }
      }

      onMouseDown={
        () => {
          if (!flippers[currTile]) boardDispatch({ type: 'SURPRISED SMILES' })
        }
      }

      onMouseUp={
        (e: React.MouseEvent) => {
          // Mine- Death Sequence XD
          if (mineArr.includes(currTile) && e.button === 0 && !e.ctrlKey) {
            return boardDispatch({ type: 'DEAD SMILES' });
          };
          return boardDispatch({ type: 'RESET SMILES' });
        }
      }

      onContextMenu={
        (e: React.MouseEvent) => {
          //If number is already revealed- prevent user from putting a flag on it
          if (flippers[currTile] !== true) {
            boardDispatch({ type: flippers[currTile] === false ? 'DECREMENT FLAGS REMAINING' : 'INCREMENT FLAGS REMAINING' });
            return handleClick(e, {
              dimensions,
              mineArr,
              numbers,
              currTile,
              boardDispatch
            });
          };
          // Prevent context menu if user accidentally presses context menu
          e.preventDefault();
        }
      }

      className={
        mineArr.includes(currTile) ? genMineClassNames({
          timerOn,
          skillLevel,
          flippers,
          colors,
          isProxied,
          currTile
        })
          : numbers[currTile] ? genNumberClassNames({
            skillLevel,
            definedUserName,
            timerOn,
            flippers,
            numbers,
            colors,
            isProxied,
            currTile
          })
            : genEmptyClassNames({
              // Global
              skillLevel,
              definedUserName,
              timerOn,
              isProxied,
              // Board & passed in
              flippers,
              colors,
              currTile
            })
      }
    >
      {
        userNotLoggedIn && !isProxied ?
          generateLoginMessage({
            currTile,
            skillLevel
          })
          : tileIsANumber ? numbers[currTile]
            : tileIsAMine ? '*'
              : null
      }
    </div >
  );
});

export default Square;
