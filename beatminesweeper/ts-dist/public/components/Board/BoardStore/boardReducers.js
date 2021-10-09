import { iterateColors, modulateColorDelay, revealFlippers, flipNormalTile, flipRecursedTiles, revealDeadFlippers, setFlagFlipped, generateMines, generateNumbers } from './boardActions';
const scrollBoard = (state = false, action) => {
    switch (action.type) {
        case 'TOGGLE SCROLLBOARD':
            return !state;
        default:
            return state;
    }
};
const colorDelay = (state = 1000, action) => {
    switch (action.type) {
        case "UNSET COLOR DELAY":
            return null;
        case "SET COLOR DELAY":
            return 1000;
        case "MODULATE COLOR DELAY":
            return modulateColorDelay(state, action.payload.newColorDelay);
        default:
            return state;
    }
    ;
};
const colors = (state = ['blue-num', 'green-num', 'red-num', 'gold-num', 'purple-num', 'maroon-num', 'turquoise-num', 'grey-num'], action) => {
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
const flippers = (state, action) => {
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
    }
    ;
};
const mineArr = (state = [], action) => {
    switch (action.type) {
        case "GENERATE MINES":
            return generateMines(action.payload);
        default:
            return state;
    }
};
const numbers = (state = {}, action) => {
    switch (action.type) {
        case "GENERATE NUMBERS":
            return generateNumbers(action.payload);
        default:
            return state;
    }
    ;
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
    }
    ;
};
const flagsRemaining = (state = 10, action) => {
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
const combineReducers = (slices) => (state, action) => Object.keys(slices).reduce((acc, prop) => (Object.assign(Object.assign({}, acc), { [prop]: slices[prop](acc[prop], action) })), state);
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
//# sourceMappingURL=boardReducers.js.map