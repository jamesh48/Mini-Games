import React from 'react';
import CombinedReducers from './globalReducers';
import { Dimensions, DefinedUserName, TimerOn } from 'MinesweeperTypes';


interface IStateTypes {
  dimensions: Dimensions
  topTimes: [];
  definedUserName: DefinedUserName;
  timerOn: TimerOn
};

const initialState: IStateTypes = {
  dimensions: { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 },
  topTimes: [],
  definedUserName: null,
  timerOn: false
};


const GlobalStoreContext = React.createContext<[IStateTypes, React.Dispatch<any>]>([initialState, () => { }]);

type Props = {
  children: JSX.Element
}

const GlobalStoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);
  const store = React.useMemo<any>(() => [state, dispatch], [state]);
  return (
    // value was previously store
    <GlobalStoreContext.Provider value={store}>{children}</GlobalStoreContext.Provider>
  );
}

const useGlobalContext = () => {
  const context = React.useContext(GlobalStoreContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider')
  }
  return context;
};


export { useGlobalContext, GlobalStoreProvider };