// https://stackoverflow.com/questions/59200785/react-usereducer-how-to-combine-multiple-reducers
import React, { useReducer } from 'react';
import CombinedReducers from './reducers.js';

const StoreContext = React.createContext();
const initialState = {
  colorDelay: 1000,
  colors: ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'],
  dimensions: {skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 },
  scrollBoard: false,
  mines: [1,2,3],
  numbers: [1,2,3],
  flippers: [],
  surprised: false,
  definedUserName: null,
  timerOn: false,
  flagsRemaining: 10,
  userName: '',
  userPass: '',
  timerDelay: null,
  timerTime: 0
};

const StoreProvider = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
  const store = React.useMemo(() => [state, dispatch], [state]);
  return (
    <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
  );
};


export { StoreContext, StoreProvider };