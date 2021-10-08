import {
  iterateColors,
  modulateColorDelay,
  revealFlippers,
  flipNormalTile,
  flipRecursedTiles,
  revealDeadFlippers,
  setFlagFlipped,
  generateMines,
  generateNumbers
} from './boardActions.js';

const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);


const scrollBoard = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE SCROLLBOARD':
      return !state;
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
  };
};

const colors = (state = ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'], action) => {
  switch (action.type) {
    case "ITERATE COLORS":
      return iterateColors(state.slice());
    case "STOP COLOR ITERATION":
      return null;
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
  };
};

// preloaded default state prevents an automatic win by default
const mines = (state = [], { type, payload }) => {
  switch (type) {
    case "GENERATE MINES":
      return generateMines(payload);
    default:
      return state;
  }
};

const numbers = (state = [4, 5, 6], { type, payload }) => {
  switch (type) {
    case "GENERATE NUMBERS":
      return generateNumbers(payload)
    default:
      return state;
  };
};

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
  };
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

export default combineReducers({
  flippers,
  mines,
  numbers,
  scrollBoard,
  colors,
  colorDelay,
  surprised,
  flagsRemaining
});
