// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
import React, { useReducer } from 'react';
import CombinedReducers from './playerHeaderReducers.js';

const PlayerHeaderContext = React.createContext();

const initialState = {
  oPlayerWinCount: 0,
  xPlayerWinCount: 0
};

const PlayerHeaderStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <PlayerHeaderContext.Provider value={store}>{children}</PlayerHeaderContext.Provider>
  );
};

const usePlayerHeaderContext = () => {
  const context = React.useContext(PlayerHeaderContext);
  if (context === undefined) {
    throw new Error('usePlayerHeaderContext must be used within a PlayerHeaderStoreProvider');
  }
  return context;
};


export { usePlayerHeaderContext, PlayerHeaderStoreProvider };