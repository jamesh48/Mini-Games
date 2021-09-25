import React from 'react';
// https://www.robinwieruch.de/react-useeffect-only-on-update
const useEffectOnlyOnUpdate = (callback, dependencies, args) => {
  const didMount = React.useRef(false);

  React.useEffect(() => {
    if (didMount.current) {
      callback(args);
    } else {
      didMount.current = true;
    }
  }, [...dependencies]);
};

export { useEffectOnlyOnUpdate };