import React from 'react';
import CombinedReducers from './globalReducers';
;
const initialState = {
    dimensions: { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 },
    topTimes: [],
    definedUserName: null,
    timerOn: false
};
const GlobalStoreContext = React.createContext([initialState, () => { }]);
const GlobalStoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
    const store = React.useMemo(() => [state, dispatch], [state]);
    return (React.createElement(GlobalStoreContext.Provider, { value: store }, children));
};
const useGlobalContext = () => {
    const context = React.useContext(GlobalStoreContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    return context;
};
export { useGlobalContext, GlobalStoreProvider };
//# sourceMappingURL=GlobalStore.js.map