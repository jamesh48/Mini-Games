import React from 'react';
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
} from './boardActions';
import {FlippersFunc, ScrollBoardFunc, ColorsFunc} from '../board-types';
import {
  ColorDelayFunc
} from '../../../../minesweeper-types';



const scrollBoard: ScrollBoardFunc = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE SCROLLBOARD':
      return !state;
    default:
      return state;
  }
};


const colorDelay: ColorDelayFunc = (state = 1000, action) => {
  switch (action.type) {
    case "UNSET COLOR DELAY":
      return null;
    case "SET COLOR DELAY":
      return 1000;
    case "MODULATE COLOR DELAY":
      return modulateColorDelay(state, action.payload.newColorDelay)
    default:
      return state
  };
};

const colors: ColorsFunc = (state = ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'], action) => {
  switch (action.type) {
    case "ITERATE COLORS":
      return iterateColors(state.slice());
    case "START COLOR ITERATION":
        return ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'];
    case "STOP COLOR ITERATION":
      return null;
    default:
      return state;
  }
};

const flippers: FlippersFunc = (state, action) => {
  switch (action.type) {
    case "RESET FLIPPERS":
      return action.payload;
    case "SET FLAG FLIPPED":
      return setFlagFlipped(state.slice(), action.payload.flagFlipped);
    case "FLIP NORMAL TILE":
      return flipNormalTile(state.slice(), action.payload.flippedTile);
    case "FLIP RECURSED TILES":
      return flipRecursedTiles(state.slice(), action.payload);
    case "REVEAL DEAD FLIPPERS":
      return revealDeadFlippers(state.slice());
    case "REVEAL FLIPPERS":
      return revealFlippers(state.slice(), action.payload.mineArr);
    default:
      return state;
  };
};

type MinesFunc = (state: [] | number[], action: { type: string, payload: { numberOfMines: number, mines: number[], verticalDimension: number, horizontalDimension: number } }) => number[];

// preloaded default state prevents an automatic win by default
const mineArr: MinesFunc = (state = [], action) => {
  switch (action.type) {
    case "GENERATE MINES":
      return generateMines(action.payload);
    default:
      return state;
  }
};


type NumbersFunc = (state: {}, action: { type: string, payload: { mineArr: number[], verticalDimension: number, horizontalDimension: number } }) => {};
const numbers: NumbersFunc = (state = {}, action) => {
  switch (action.type) {
    case "GENERATE NUMBERS":
      return generateNumbers(action.payload)
    default:
      return state;
  };
};



type SurprisedFunc = (state: boolean | string, action: { type: string }) => boolean | string;

const surprised: SurprisedFunc = (state, action) => {
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


type FlagsRemainingFunc = (state: number, action: { type: string, payload: number }) => number;

const flagsRemaining: FlagsRemainingFunc = (state = 10, action) => {
  switch (action.type) {
    case "DECREMENT FLAGS REMAINING":
      return state - 1;
    case "INCREMENT FLAGS REMAINING":
      return state + 1;
    case "SET FLAGS REMAINING":
      return action.payload;
    default:
      return state;
  }
};

type CombineReducersFunc = (slices: any) => (state: any, action: any) => React.ReducerStateWithoutAction<any>

const combineReducers: CombineReducersFunc = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => ({
  ...acc,
  [prop]: slices[prop](acc[prop], action),
}),
  state
);

export default combineReducers({
  flippers,
  mineArr,
  numbers,
  scrollBoard,
  colors,
  colorDelay,
  surprised,
  flagsRemaining
});
