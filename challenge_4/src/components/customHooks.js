// https://overreacted.io/making-setinterval-declarative-with-react-hooks/
import React from 'react';

const useInterval = (callback, delay) => {
  const savedCallback = React.useRef();
  // Remember the latest callback.
  React.useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  // Set up the interval.
  React.useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    // If victory is declared stop the timer...
    if (delay === -1) {
      return;
    };

    // Otherwise...
    if (delay !== null) {
      let id = setInterval(tick, delay);
      return () => clearInterval(id);
    }
  }, [delay]);;
}


export { useInterval };