// import { } from './timerActions.js';

import { CombineReducersFunc } from "MinesweeperTypes";
import { TimerTimeFunc } from "../TimerTypes";

const timerTime: TimerTimeFunc = (state = 0, action) => {
  switch (action.type) {
    case "ITERATE TIMER TIME":
      return (state += action.payload);
    case "CLEAR TIMER TIME":
      return 0;
    default:
      return state;
  }
};

const combineReducers: CombineReducersFunc = (slices) => (state, action) =>
  Object.keys(slices).reduce(
    (acc, prop) => ({
      ...acc,
      [prop]: slices[prop](acc[prop], action),
    }),
    state
  );

export default combineReducers({ timerTime });
