const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
};

const currentPlayerMove = (state = 'X', action) => {
  switch (action.type) {
    case 'TOGGLE CURRENT PLAYER MOVE':
      return state === 'X' ? 'O' : 'X';
    default:
      return state;
  }
};

const confirmedBoxes = (state =
  [
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null },
    { confirmed: false, mark: null }
  ]
  , action) => {
  switch (action.type) {
    case 'CONFIRM NEW BOX':
      let existing = state.slice();
      existing[action.payload.id] = { confirmed: true, mark: action.payload.mark };
      return existing;
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

export default combineReducers({ currentPlayerMove, confirmedBoxes });

