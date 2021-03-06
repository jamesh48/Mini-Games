// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import React from 'react';
import { UseIntervalFunc } from 'TSSrc/minesweeper-types';



const useInterval: UseIntervalFunc = (callback, delay) => {
  const savedCallback: React.MutableRefObject<any> = React.useRef();
  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    // If victory is declared or bomb stop the timer...
    if (delay === -1) {
      return;
    };

    // Otherwise...
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
    return;
  }, [delay])
}


export { useInterval };