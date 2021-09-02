import React, { useEffect } from 'react';
import squareUtils from './squareUtils.js';
import './sweepsquarestyles.scss';

const { genNumberClassNames, genEmptyClassNames, genMineClassNames } = squareUtils;

export default

  React.memo(({
    // Variables...
    sqrIndex,
    colors,
    surprised,
    currCanidate,
    definedUserName,
    // Boards
    flippers,
    mines,
    numbers,
    // Functions
    generateColors,
    genLoginMessage,
    handleClick,
    surprisedCallback,
    flagsRemainingCallback,
    // Timer
    timerOnCallback,
    timerOn,
  }) => {

    // useEffect(() => {
    //   console.log('updated!');
    // })

    return (
      <div
        key={sqrIndex}
        data-testid={`test-${currCanidate}`}

        onClick={
          () => {
            // If tile is a bomb...
            if (mines.includes(currCanidate)) {
              timerOnCallback('bomb');
              return handleClick(currCanidate, 'dead');
            };
            // Is a Number or a Empty Square
            // If an empty space is revealed under a flag, increment remaining flags
            if (flippers[currCanidate] === 'flag') flagsRemainingCallback(false);
            // Start the timer and reveal the tile
            if (timerOn === false) {
              timerOnCallback();
              handleClick(currCanidate);
            };
            // Normal Play
            return handleClick(currCanidate);
          }
        }

        onMouseDown={
          () => {
            if (!flippers[currCanidate]) surprisedCallback();
          }
        }

        onMouseUp={
          () => {
            // Mine- Death Sequence XD
            if (mines.includes(currCanidate) && event.button === 0 && !event.ctrlKey) {
              return surprisedCallback('dead');
            };
            surprisedCallback('reset');
          }
        }

        onContextMenu={
          () => {
            //If number is already revealed- prevent user from putting a flag on it
            if (flippers[currCanidate] !== true) {
              // if the flag is false (-1), pass true, otherwise pass false(+1)
              flagsRemainingCallback(flippers[currCanidate] === false || false)
              return handleClick(currCanidate)
            };
            // Prevent context menu if user accidentally presses context menu
            event.preventDefault();
          }
        }

        className={
          mines.includes(currCanidate) ? genMineClassNames(currCanidate, colors, generateColors, surprised, flippers, definedUserName)
            : numbers[currCanidate] ? genNumberClassNames(currCanidate, numbers, flippers, colors, generateColors, surprised, definedUserName)
              : genEmptyClassNames(currCanidate, colors, generateColors, surprised, flippers, definedUserName)
        }
      >
        {
          !definedUserName ?
            genLoginMessage(currCanidate)
            : flippers[currCanidate] && flippers[currCanidate] !== 'flag' && numbers[currCanidate] ? numbers[currCanidate]
              : mines.includes(currCanidate) && flippers[currCanidate] && flippers[currCanidate] !== 'flag' ? '*'
                : null
        }
      </div >
    )
  });
