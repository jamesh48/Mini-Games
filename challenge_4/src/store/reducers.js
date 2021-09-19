import generateMines from './actions/mineActions.js';
import generateNumbers from './actions/numberActions.js';
import { flipNormalTile, setFlagFlipped, revealFlippers, revealDeadFlippers, flipRecursedTiles } from './actions/flipperActions.js';
import colorDelayActions from './actions/colorDelayActions.js';
import modulateColorDelay from './actions/colorDelayActions';
import iterateColors from './actions/colorActions.js';


const numbers = (state = [4, 5, 6], { type, payload }) => {
  switch (type) {
    case "GENERATE NUMBERS":
      return generateNumbers(payload)
    default:
      return state;
  }
};

const timerOn = (state = false, { type, payload }) => {
  switch (type) {
    case "SWITCH TIMER ON":
      return true;
    case "SWITCH TIMER BOMBED":
      return 'bombed';
    case "SWITCH TIMER OFF":
      return false;
    case "SAVE TIMER VICTORY":
      return payload;
    default:
      return state;
  }
};

const definedUserName = (state = null, { type, payload: { userName } = {} }) => {
  switch (type) {
    case "SET DEFINED USERNAME":
      return userName;
    default:
      return state;
  }
}

// preloaded default state prevents an automatic win by default
const mines = (state, { type, payload }) => {
  switch (type) {
    case "GENERATE MINES":
      return generateMines(payload);
    default:
      return state;
  }
};

const flippers = (state, { type, payload, payload: { flagFlipped, flippedTile, mines } = {} }) => {
  switch (type) {
    case "RESET FLIPPERS":
      return payload;
    case "SET FLAG FLIPPED":
      return setFlagFlipped(state.slice(), flagFlipped);
    case "FLIP NORMAL TILE":
      return flipNormalTile(state.slice(), flippedTile);
    case "FLIP RECURSED TILES":
      return flipRecursedTiles(state.slice(), payload);
    case "REVEAL DEAD FLIPPERS":
      return revealDeadFlippers(state.slice());
    case "REVEAL FLIPPERS":
      return revealFlippers(state.slice(), mines);
    default:
      return state;
  }
};

const colorDelay = (state = 1000, { type, payload: { newColorDelay } = {} }) => {
  switch (type) {
    case "UNSET COLOR DELAY":
      return null;
    case "MODULATE COLOR DELAY":
      return modulateColorDelay(state, newColorDelay)
    default:
      return state
  }
};

const colors = (state = ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'], action) => {
  switch (action.type) {
    case "ITERATE":
      return iterateColors(state.slice());
    case "STOP ITERATION":
      return null;
    default:
      return state;
  }
};

const scrollBoard = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE SCROLLBOARD':
      return !state;
    default:
      return state;
  }
};


// const x = (state, action) => {
//   console.log(state)
//   return state;
// };
const surprised = (state, action) => {

  switch (action.type) {
    case 'SURPRISED SMILES':
      return true;
    case 'RESET SMILES':
      return false;
    case 'DEAD SMILES':
      return 'dead';
    case 'VICTORY SMILES':
      return 'victory';
    default:
      return state;
  }
}

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

const userName = (state = '', { type, payload }) => {
  switch (type) {
    case "UPDATE USERNAME":
      return payload;
    default:
      return state;
  }
};

const userPass = (state = '', { type, payload }) => {
  switch (type) {
    case "UPDATE USERPASS":
      return payload;
    default:
      return state;
  }
};

const flagsRemaining = (state = 10, { type, payload }) => {
  switch (type) {
    case "DECREMENT FLAGS REMAINING":
      return state - 1;
    case "INCREMENT FLAGS REMAINING":
      return state + 1;
    case "SET FLAGS REMAINING":
      return payload;
    default:
      return state;
  }
};

const timerDelay = (state = null, { type, payload }) => {
  switch (type) {
    case "FREEZE TIMER DELAY":
      return -1;
    case "INIT TIMER DELAY":
      return 10;
    case "UNSET TIMER DELAY":
      return null;
    default:
      return state;
  }
};

const timerTime = (state = 0, { type, payload }) => {
  switch (type) {
    case "ITERATE TIMER TIME":
      return state += payload;
    case "CLEAR TIMER TIME":
      return 0;
    default:
      return state;
  }
}

const reduceReducers = (...reducers) => {
  return (state, action) => reducers.reduce((acc, nextReducer) => nextReducer(acc, action), state)
};

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
  timerDelay,
  timerTime,
  colors,
  dimensions,
  colorDelay,
  surprised,
  scrollBoard,
  numbers,
  mines,
  flippers,
  definedUserName,
  timerOn,
  flagsRemaining,
  userName,
  userPass,
});

