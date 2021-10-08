// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
import React, { useReducer } from 'react';
import CombinedReducers from './globalReducers.js';

const GlobalStoreContext = React.createContext();

const initialState = {
  dimensions: { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 },
  topTimes: [],
  definedUserName: null,
  timerOn: false
};

const GlobalStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <GlobalStoreContext.Provider value={store}>{children}</GlobalStoreContext.Provider>
  );
};

const useGlobalContext = () => {
  const context = React.useContext(GlobalStoreContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context;
};


export { useGlobalContext, GlobalStoreProvider };