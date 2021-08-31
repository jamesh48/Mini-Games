import React from 'react';

export default ({ numbers, generateColors, colors, solidUserName, surprised, currCanidate, flippers, surprisedCallback, genLoginMessage, handleClick, timerOn, timerOnCallback, flagsRemainingCallback, sqrIndex }) => {

  return (
    <div

      data-testid={`test-${currCanidate}`}

      onMouseDown={
        () => {
          if (!flippers[currCanidate] || flippers[currCanidate] === 'flag') {
            surprisedCallback()
          }
        }
      }

      onMouseUp={
        () => {
          if (!flippers[currCanidate] || flippers[currCanidate] === 'flag') {
            surprisedCallback('reset');
          }
        }
      }
      onClick={
        () => {
          // If an empty space is revealed under a flag, increment remaining flags
          if (flippers[currCanidate] === 'flag') {
            flagsRemainingCallback(false)
          }
          // Gameplay As Usual
          if (timerOn === true) {
            handleClick(currCanidate)
          } else {
            // Start the Timer
            timerOnCallback();
            handleClick(currCanidate)
          }
        }
      }

      onContextMenu={
        () => {
          //If number is already revealed- prevent user from putting a flag on it
          if (flippers[currCanidate] !== true) {
            // Set Flags Remaining -1 or +1
            if (flippers[currCanidate] === false) {
              flagsRemainingCallback(true);
            }

            if (flippers[currCanidate] === 'flag') {
              flagsRemainingCallback(false);
            }

            handleClick(currCanidate)

          } else {
            // and prevent the context menu in case they accidentally do right click the number
            event.preventDefault();
          }
        }
      }

      key={sqrIndex}

      className={genNumberClassNames(currCanidate)}
    >
      {
        !solidUserName ?
          genLoginMessage(currCanidate) :
          flippers[currCanidate] && flippers[currCanidate] !== 'flag' ? numbers[currCanidate]
            : null}
    </div>
  )
}