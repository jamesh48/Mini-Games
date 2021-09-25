import React from 'react';
import CombinedReducers from './boardReducers.js';

const BoardContext = React.createContext();

const initialState = {
  scrollBoard: false,
  colorDelay: 1000,
  flippers: [],
  mines: [1,2,3],
  numbers: [4,5,6],
  surprised: false,
  flagsRemaining: 10,
  colors: ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num']
};

const BoardStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);

  const store = React.useMemo(() => [state, dispatch], [state]);

  return (
    <BoardContext.Provider value={store}>{children}</BoardContext.Provider>
  );
};

function useBoardContext() {
  const context = React.useContext(BoardContext);
  if (context === undefined) {
    throw new Error('useBoardContext must be used within a CountProvider');
  };
  return context;
}




export { useBoardContext, BoardStoreProvider };