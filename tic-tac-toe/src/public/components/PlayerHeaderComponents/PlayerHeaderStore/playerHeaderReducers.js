const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
};

const xPlayerWinCount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT X PLAYER WIN COUNT':
      return state + 1;
    default:
      return state;
  };
};

const oPlayerWinCount = (state = 0, action) => {
  switch (action.type) {
    case 'INCREMENT O PLAYER WIN COUNT':
      return state + 1;
    default:
      return state;
  };
};

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

export default combineReducers({ xPlayerWinCount, oPlayerWinCount });

