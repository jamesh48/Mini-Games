import React from 'react';
import CombinedReducers from './boardReducers';
import { Colors, FlagsRemaining, Surprised, Numbers, MineArr, Flippers, ColorDelay, ScrollBoard } from 'MinesweeperTypes';

interface IStateTypes {
  scrollBoard: ScrollBoard;
  colorDelay: ColorDelay;
  flippers: Flippers;
  mineArr: MineArr;
  numbers: Numbers;
  surprised: Surprised;
  flagsRemaining: FlagsRemaining;
  colors: Colors;
}

const initialState: IStateTypes = {
  scrollBoard: false,
  colorDelay: 1000,
  flippers: [],
  mineArr: [],
  numbers: {},
  surprised: false,
  flagsRemaining: 10,
  colors: ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num']
};

const BoardContext = React.createContext<[IStateTypes, React.Dispatch<any>]>([initialState, () => { }]);



type Props = {
  children: JSX.Element[]
}

const BoardStoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);

  const store = React.useMemo<any>(() => [state, dispatch], [state]);

  return (
    <BoardContext.Provider value={store}>{children}</BoardContext.Provider>
  );
};

function useBoardContext() {
  const context = React.useContext(BoardContext);
  if (context === undefined) {
    throw new Error('useCount must be used within a CountProvider');
  };
  return context;
}




export { useBoardContext, BoardStoreProvider };