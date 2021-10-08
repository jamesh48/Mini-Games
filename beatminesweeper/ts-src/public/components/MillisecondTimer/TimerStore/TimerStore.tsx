import React from "react";
import CombinedReducers from "./timerReducers";
import { TimerIStateTypes } from "../TimerTypes";

const initialState: TimerIStateTypes = {
  timerTime: 0,
};

const TimerContext = React.createContext<
  [TimerIStateTypes, React.Dispatch<any>]
>([initialState, () => {}]);

type Props = {
  children: JSX.Element;
};

const TimerStoreProvider: React.FC<Props> = ({ children }) => {
  const [state, dispatch] = React.useReducer(CombinedReducers, initialState);

  const store = React.useMemo<any>(() => [state, dispatch], [state]);

  return (
    <TimerContext.Provider value={store}>{children}</TimerContext.Provider>
  );
};

function useTimerContext() {
  const context = React.useContext(TimerContext);
  if (context === undefined) {
    throw new Error("useTimerContext must be used within a TimerStoreProvider");
  }
  return context;
}

export { useTimerContext, TimerStoreProvider };
