import React from 'react';
import CombinedReducers from './boardReducers';
const initialState = {
    scrollBoard: false,
    colorDelay: 1000,
    flippers: [],
    mineArr: [],
    numbers: {},
    surprised: false,
    flagsRemaining: 10,
    colors: ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num']
};
const BoardContext = React.createContext([initialState, () => { }]);
const BoardStoreProvider = ({ children }) => {
    const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
    const store = React.useMemo(() => [state, dispatch], [state]);
    return (React.createElement(BoardContext.Provider, { value: store }, children));
};
function useBoardContext() {
    const context = React.useContext(BoardContext);
    if (context === undefined) {
        throw new Error('useCount must be used within a CountProvider');
    }
    ;
    return context;
}
export { useBoardContext, BoardStoreProvider };
//# sourceMappingURL=BoardStore.js.map