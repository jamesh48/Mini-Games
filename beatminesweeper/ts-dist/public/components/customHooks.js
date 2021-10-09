import React from 'react';
const useInterval = (callback, delay) => {
    const savedCallback = React.useRef();
    React.useEffect(() => {
        savedCallback.current = callback;
    }, [callback]);
    React.useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay === -1) {
            return;
        }
        ;
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
        return;
    }, [delay]);
};
export { useInterval };
//# sourceMappingURL=customHooks.js.map