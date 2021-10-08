// import { } from './timerActions.js';

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);


const timerTime = (state = 0, { type, payload }) => {
  switch (type) {
    case "ITERATE TIMER TIME":
      return state += payload;
    case "CLEAR TIMER TIME":
      return 0;
    default:
      return state;
  };
};


export default combineReducers({ timerTime });
