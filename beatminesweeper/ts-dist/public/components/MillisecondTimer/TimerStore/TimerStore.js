import React from "react";
import CombinedReducers from "./timerReducers";
const initialState = {
    timerTime: 0,
};
const TimerContext = React.createContext([initialState, () => { }]);
const TimerStoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
    const store = React.useMemo(() => [state, dispatch], [state]);
    return (React.createElement(TimerContext.Provider, { value: store }, children));
};
function useTimerContext() {
    const context = React.useContext(TimerContext);
    if (context === undefined) {
        throw new Error("useTimerContext must be used within a TimerStoreProvider");
    }
    return context;
}
export { useTimerContext, TimerStoreProvider };
//# sourceMappingURL=TimerStore.js.map