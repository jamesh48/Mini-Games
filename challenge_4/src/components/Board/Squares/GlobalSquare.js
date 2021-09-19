import React, { useEffect, useContext } from 'react';
import { generateLoginMessage } from './squareUtils.js';
import { genNumberClassNames, genEmptyClassNames, genMineClassNames, handleClick } from './squareUtils.js';
import useStoreContext from 'Store/useStoreContext.js';
import './sweepsquarestyles.scss';


export default React.memo(({ currCanidate }) => {
  const [globalState, dispatch] = useStoreContext();

  return (
    <div

      data-testid={`test-${currCanidate}`}

      onClick={
        () => {
          // If tile is a bomb...
          if (globalState.mines.includes(currCanidate)) {
            dispatch({ type: 'SWITCH TIMER BOMBED' });
            return handleClick({ ...globalState, currCanidate, indicator: 'dead', dispatch });
          };
          // Is a Number or a Empty Square
          // If an empty space is revealed under a flag, increment remaining flags
          if (globalState.flippers[currCanidate] === 'flag') dispatch({ type: 'INCREMENT FLAGS REMAINING' });
          // Start the timer and reveal the tile
          if (globalState.timerOn === false) {
            dispatch({ type: 'SWITCH TIMER ON' });
            return handleClick({ ...globalState, currCanidate, indicator: null, dispatch });
          };
          // Normal Play
          return handleClick({ ...globalState, currCanidate, indicator: null, dispatch });
        }
      }

      onMouseDown={
        () => {
          if (!globalState.flippers[currCanidate]) dispatch({ type: 'SURPRISED SMILES' })
        }
      }

      onMouseUp={
        () => {
          // Mine- Death Sequence XD
          if (globalState.mines.includes(currCanidate) && event.button === 0 && !event.ctrlKey) {
            return dispatch({ type: 'DEAD SMILES' });
          };
          return dispatch({ type: 'RESET SMILES' });
        }
      }

      onContextMenu={
        () => {
          //If number is already revealed- prevent user from putting a flag on it
          if (globalState.flippers[currCanidate] !== true) {
            dispatch({ type: globalState.flippers[currCanidate] === false ? 'DECREMENT FLAGS REMAINING' : 'INCREMENT FLAGS REMAINING' });
            return handleClick({ ...globalState, currCanidate, indicator: null, dispatch });
          };
          // Prevent context menu if user accidentally presses context menu
          event.preventDefault();
        }
      }

      className={
        globalState.mines.includes(currCanidate) ? genMineClassNames({ ...globalState, currCanidate })
          : globalState.numbers[currCanidate] ? genNumberClassNames({ ...globalState, currCanidate })
            : genEmptyClassNames({ ...globalState, currCanidate })
      }
    >
      {
        !globalState.definedUserName ?
          generateLoginMessage({ currCanidate, skillLevel: globalState.dimensions.skillLevel })
          : globalState.flippers[currCanidate] && globalState.flippers[currCanidate] !== 'flag' && globalState.numbers[currCanidate] ? globalState.numbers[currCanidate]
            : globalState.mines.includes(currCanidate) && globalState.flippers[currCanidate] && globalState.flippers[currCanidate] !== 'flag' ? '*'
              : null
      }
    </div >
  );
});
