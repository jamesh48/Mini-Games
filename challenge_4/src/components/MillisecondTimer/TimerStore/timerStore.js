// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
import React, { useReducer } from 'react';
import CombinedReducers from './timerReducers.js';

const TimerStoreContext = React.createContext();

const initialState = { timerTime: 0 };

const TimerStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <TimerStoreContext.Provider value={store}>{children}</TimerStoreContext.Provider>
  );
};

const useTimerContext = () => {
  const context = React.useContext(TimerStoreContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context;
};


export { useTimerContext, TimerStoreProvider };