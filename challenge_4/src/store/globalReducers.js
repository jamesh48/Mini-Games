const timerOn = (state = false, { type, payload }) => {
  switch (type) {
    case "SWITCH TIMER ON":
      return true;
    case "SWITCH TIMER OFF":
      return false;
    case "FREEZE TIMER STATE":
        return 'FREEZE';
    case "FREEZE TIMER STATE VICTORY":
        return 'VICTORY';
    default:
      return state;
  }
};

const dimensions = (state = { skillLevel: 'beginner', verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 }, { type }) => {
  switch (type) {
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

const topTimes = (state = [], {type, payload}) => {

  switch(type) {
    case "SET TOP TIMES":
      return payload.topTimes;
    default:
      return state;
  }
};

const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
};

const definedUserName = (state = null, { type, payload: { userName } = {} }) => {
  switch (type) {
    case "SET DEFINED USERNAME":
      return userName;
    default:
      return state;
  }
}

// const rootReducer = combineReducers({
//   a: reduceReducers(plusOneReducer, plusOneReducer), // aNew = aOld + 1 + 1
//   b: reduceReducers(timesTwoReducer, plusOneReducer) // bNew = bOld * 2 + 1
// });

// mines: reduceReducers(mines, dimensions)

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

export default combineReducers({
  dimensions,
  definedUserName,
  topTimes,
  timerOn
});

