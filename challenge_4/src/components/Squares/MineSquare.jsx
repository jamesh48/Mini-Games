import React from 'react';
import { pure } from 'recompose';

export default pure(({
  handleClick,
  generateColors,
  genLoginMessage,

  colors, solidUserName, flippers, currCanidate, timerOnCallback, surprised, surprisedCallback, flagsRemainingCallback, sqrIndex }) => {

  return (<div

    key={sqrIndex}

    data-testid={`test-${currCanidate}`}

    onClick={
      () => {
        timerOnCallback('bomb');
        handleClick(currCanidate, 'dead');
      }
    }

    onMouseDown={
      () => {
        surprisedCallback();
      }
    }

    onMouseUp={
      () => {
        if (event.button === 0 && !event.ctrlKey) {
          surprisedCallback('dead');
        };

        if (event.button === 2 || event.ctrlKey) {
          surprisedCallback('reset')
        }
      }
    }

    onContextMenu={
      () => {
        // Set Flags Remaining -1 or +1
        if (flippers[currCanidate] === false) {
          flagsRemainingCallback(true);
        }

        if (flippers[currCanidate] === 'flag') {
          flagsRemainingCallback(false);
        }

        handleClick(currCanidate);
      }
    }

    className={genMineClassNames(currCanidate)}>
    {
      !solidUserName ? genLoginMessage(currCanidate)
        : flippers[currCanidate] && flippers[currCanidate] !== 'flag' ? '*'
          : null
    }
  </div>
  )
});