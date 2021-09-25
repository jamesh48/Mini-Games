const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
};

const hasAlreadyWon = (state = null, action) => {
  switch (action.type) {
    case 'TOGGLE HAS ALREADY WON TRUE':
      return action.payload;
    default:
      return state;
  };
};


const xPlayerName = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT X PLAYER NAME':
      return action.payload;
    default:
      return state;
  };
};

const oPlayerName = (state = null, action) => {
  switch (action.type) {
    case 'SUBMIT O PLAYER NAME':
      return action.payload;
    default:
      return state;
  }
}

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

export default combineReducers({ hasAlreadyWon, xPlayerName, oPlayerName });

