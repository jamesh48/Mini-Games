import React, { useEffect, useContext } from 'react';
import { generateLoginMessage } from './squareUtils.js';
import { genNumberClassNames, genEmptyClassNames, genMineClassNames, handleClick } from './squareUtils.js';
import { useGlobalContext } from 'GlobalStore';
import { useBoardContext } from 'BoardStore';
import './sweepsquarestyles.scss';

export default React.memo(({ currTile }) => {

  const [{ dimensions: { skillLevel }, definedUserName, dimensions, timerOn }, globalDispatch] = useGlobalContext();

  const [{ surprised, flagsRemaining, colors, mines, flippers, numbers }, boardDispatch] = useBoardContext();


  const tileIsAMine = mines.includes(currTile) && flippers[currTile] && flippers[currTile] !== 'flag';

  const tileIsANumber = flippers[currTile] && flippers[currTile] !== 'flag' && numbers[currTile];

  const userNotLoggedIn = !definedUserName;

  return (
    <div
      data-testid={`test-${currTile}`}

      onClick={
        () => {
          // If tile is a bomb...
          if (mines.includes(currTile)) {
            globalDispatch({ type: 'FREEZE TIMER STATE' });
            return handleClick({
              skillLevel,
              dimensions,
              mines,
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

            return handleClick({
              skillLevel,
              dimensions,
              mines,
              numbers,
              currTile,
              boardDispatch
            });
          };
          // Normal Play
          return handleClick({
            skillLevel,
            dimensions,
            numbers,
            mines,
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
        () => {
          // Mine- Death Sequence XD
          if (mines.includes(currTile) && event.button === 0 && !event.ctrlKey) {
            return boardDispatch({ type: 'DEAD SMILES' });
          };
          return boardDispatch({ type: 'RESET SMILES' });
        }
      }

      onContextMenu={
        () => {
          //If number is already revealed- prevent user from putting a flag on it
          if (flippers[currTile] !== true) {
            boardDispatch({ type: flippers[currTile] === false ? 'DECREMENT FLAGS REMAINING' : 'INCREMENT FLAGS REMAINING' });
            return handleClick({
              skillLevel,
              dimensions,
              mines,
              numbers,
              currTile,
              boardDispatch
            });
          };
          // Prevent context menu if user accidentally presses context menu
          event.preventDefault();
        }
      }

      className={
        mines.includes(currTile) ? genMineClassNames({
          timerOn,
          skillLevel,
          definedUserName,
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
              // Global
              skillLevel,
              definedUserName,
              timerOn,
              // Board & passed in
              flippers,
              colors,
              currTile
            })
      }
    >
      {
        userNotLoggedIn ?
          generateLoginMessage({
            currTile,
            skillLevel,
            flippers
          })
          : tileIsANumber ? numbers[currTile]
            : tileIsAMine ? '*'
              : null
      }
    </div >
  );
});
