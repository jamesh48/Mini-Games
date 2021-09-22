import React from 'react';
import CombinedReducers from './squareReducers.js';

const SquareContext = React.createContext();

const initialState = {};

const SquareStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);

  const store = React.useMemo(() => [state, dispatch], [state]);

  return (
    <SquareContext.Provider value={store}>{children}</SquareContext.Provider>
  );
};

function useSquareContext() {
  const context = React.useContext(SquareContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  };
  return context;
}




export { useSquareContext, SquareStoreProvider };