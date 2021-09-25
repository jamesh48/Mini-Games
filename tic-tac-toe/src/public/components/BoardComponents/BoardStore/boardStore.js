// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
import React, { useReducer } from 'react';
import CombinedReducers from './boardReducers.js';
const BoardStoreContext = React.createContext();

const initialState = {
  currentPlayerMove: 'X',
  confirmedBoxes: [
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null }
  ]
};

const BoardStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <BoardStoreContext.Provider value={store}>{children}</BoardStoreContext.Provider>
  );
};

const useBoardContext = () => {
  const context = React.useContext(BoardStoreContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context;
};


export { useBoardContext, BoardStoreProvider };