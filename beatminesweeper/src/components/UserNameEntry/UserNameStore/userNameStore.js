import React from 'react';
import CombinedReducers from './userNameReducers.js';

const UserNameContext = React.createContext();

const initialState = {
  userName: '',
  userPass: ''
};

const UserNameStoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);

  const store = React.useMemo(() => [state, dispatch], [state]);

  return (
    <UserNameContext.Provider value={store}>{children}</UserNameContext.Provider>
  );
};

function useUserNameContext() {
  const context = React.useContext(UserNameContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  };
  return context;
}




export { useUserNameContext, UserNameStoreProvider };