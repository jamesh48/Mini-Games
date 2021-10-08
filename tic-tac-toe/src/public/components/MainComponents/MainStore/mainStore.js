// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
import React, { useReducer } from 'react';
import CombinedReducers from './mainReducers.js';
const MainStoreContext = React.createContext();

const initialState = {
  hasAlreadyWon: null,
  xPlayerName: null,
  oPlayerName: null
};

const MainStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <MainStoreContext.Provider value={store}>{children}</MainStoreContext.Provider>
  );
};

const useMainContext = () => {
  const context = React.useContext(MainStoreContext);
  if (context === undefined) {
    throw new Error('useMainStoreContext must be used within a MainStoreProvider')
  }
  return context;
};


export { useMainContext, MainStoreProvider };