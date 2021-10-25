import {IsProxied} from 'MinesweeperTypes';

type IsProxiedAction = {
  type: string;
}

const isProxied = (state: IsProxied = false, action: IsProxiedAction) => {
  switch (action.type) {
    case 'SET PROXIED TRUE':
      return true;
    default:
      return state;
  }
};

type TimerOnType = {
    type: string;
};

const timerOn = (state = false, action: TimerOnType) => {
  switch (action.type) {
    case "SWITCH TIMER ON":
      return true;
    case "SWITCH TIMER OFF":
      return false;
    case "FREEZE TIMER STATE WIN":
      return "FREEZE WIN";
    case "FREEZE TIMER STATE DEAD":
      return 'FREEZE DEAD';
    case "FREEZE TIMER STATE VICTORY":
      return 'VICTORY';
    default:
      return state;
  }
};

type DimensionAction = {
  type: string;
};

const dimensions = (state = { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 }, action: DimensionAction) => {
  switch (action.type) {
    case "SET BEGINNER DIMENSIONS":
      return { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 };
    case "SET INTERMEDIATE DIMENSIONS":
      return { skillLevel: 'intermediate', verticalDimension: 16, horizontalDimension: 16, numberOfMines: 40 };
    case 'SET ADVANCED DIMENSIONS':
      return { skillLevel: 'advanced', verticalDimension: 16, horizontalDimension: 30, numberOfMines: 99 };
    default:
      return state;
  };
};

const topTimes = (state = [], action:
  { type: string, payload: { topTimes: string[]} }
  ) => {

  switch (action.type) {
    case "SET TOP TIMES":
      return action.payload.topTimes;
    default:
      return state;
  }
};

// const reduceReducers = (...reducers) => {
//   return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
// };


const definedUserName = (state = null, action:
  { type: string, payload: { userName: string } }
) => {
  switch (action.type) {
    case "SET DEFINED USERNAME":
      return action.payload.userName;
    case "UNSET DEFINED USERNAME":
        return null;
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   a: reduceReducers(plusOneReducer, plusOneReducer), // aNew = aOld + 1 + 1
//   b: reduceReducers(timesTwoReducer, plusOneReducer) // bNew = bOld * 2 + 1
// });


const combineReducers = (slices: any) => (state: any, action: any) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

export default combineReducers({
  dimensions,
  definedUserName,
  topTimes,
  timerOn,
  isProxied
});

