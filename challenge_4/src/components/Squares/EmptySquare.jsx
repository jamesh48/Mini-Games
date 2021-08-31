import React from 'react';

export default ({ timerOn, timerOnCallback, colors, solidUserName, flippers, currCanidate, flagsRemainingCallback, surprised, generateColors, genLoginMessage, surprisedCallback, handleClick, sqrIndex }) => {

  // const genEmptyClassNames = (tile) => {
  //   let classNameArr = ['sweep-square'];
  //   if (colors !== null) {
  //     classNameArr.push(generateColors(tile), 'disabled');
  //     return classNameArr.join(' ');
  //   } else if (surprised === 'victory' || surprised === 'dead') {
  //     classNameArr.push('disabled', 'dark-square')
  //   } else if (!solidUserName) {
  //     classNameArr.push('disabled')
  //   } else if (flippers[tile] === 'flag') {
  //     classNameArr.push('flag')
  //   } else if (flippers[tile] === true) {
  //     classNameArr.push('dark-square')
  //   }

  //   return classNameArr.join(' ');
  // };

  return (
    <div
      key={sqrIndex}
      data-testid={`test-${currCanidate}`}
      onMouseDown={
        () => {
          // No Surprise Face if empty tile is already flipped
          if (!flippers[currCanidate]) {
            surprisedCallback();
          }
        }
      }

      onMouseUp={
        () => {
          //No Need to reset if empty tile is already flipped, but do reset if a flag was placed.
          if (!flippers[currCanidate] || flippers[currCanidate] === 'flag') {
            surprisedCallback('reset');
          }
        }
      }

      onClick=
      {
        () => {
          // If an empty space is revealed under a flag, increment remaining flags
          if (flippers[currCanidate] === 'flag') {
            flagsRemainingCallback(false)
          }

          if (timerOn === true) {
            handleClick(currCanidate);
          } else {
            timerOnCallback();
            handleClick(currCanidate);
          }
        }
      }

      onContextMenu={
        (event) => {

          if (mines.includes(currCanidate)) {
            // Set Flags Remaining -1 or +1
            if (flippers[currCanidate] === false) {
              flagsRemainingCallback(true);
            }

            if (flippers[currCanidate] === 'flag') {
              flagsRemainingCallback(false);
            }

            handleClick(currCanidate);
          }
          return;
        }

  //         // Prevent flags on revealed empty squares
  //         if (flippers[currCanidate] !== true) {
  //   // Set Flags Remaining -1 or +1
  //   if (flippers[currCanidate] === false) {
  //     flagsRemainingCallback(true);
  //   }

  //   if (flippers[currCanidate] === 'flag') {
  //     flagsRemainingCallback(false);
  //   }

  //   handleClick(currCanidate)
  // } else {
  //   // No Context Menu if user accidentally right clicks on empty square
  //   event.preventDefault();
  // }
}
      // }
className = { genEmptyClassNames(currCanidate) } >
  {!solidUserName ? genLoginMessage(currCanidate) : null}
    </div >
  )
}