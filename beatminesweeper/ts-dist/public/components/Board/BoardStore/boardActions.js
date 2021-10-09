const iterateColors = (existingColors) => {
    const lastColor = existingColors.pop();
    existingColors.unshift(lastColor);
    return [...existingColors];
};
const modulateColorDelay = (existing, newColorDelay) => {
    if ((existing + newColorDelay) > 25) {
        newColorDelay = newColorDelay < 0 && existing < 200 ? newColorDelay / 5
            : newColorDelay < 0 ? newColorDelay / 2.5
                : 1;
        return existing + newColorDelay;
    }
    return existing;
};
const revealFlippers = (existingFlippers, mines) => {
    existingFlippers = existingFlippers.map((flipper, index) => {
        if (flipper === 'flag' || (mines === null || mines === void 0 ? void 0 : mines.includes(index))) {
            return 'flag';
        }
        else {
            return true;
        }
    });
    return [...existingFlippers];
};
const flipNormalTile = (existingFlippers, flippedTile) => {
    existingFlippers.splice(flippedTile, 1, true);
    return [...existingFlippers];
};
const flipRecursedTiles = (existingFlippers, recursedTiles) => {
    for (let i = 0; i < recursedTiles.length; i++) {
        existingFlippers.splice(recursedTiles[i], 1, true);
    }
    return [...existingFlippers];
};
const revealDeadFlippers = (existingFlippers) => {
    existingFlippers = existingFlippers.map((_, index) => {
        if (index === 0) {
            return 'dead';
        }
        else {
            return true;
        }
    });
    return [...existingFlippers];
};
const setFlagFlipped = (existingFlippers, flagFlipped) => {
    if (existingFlippers[flagFlipped] === 'flag') {
        existingFlippers.splice(flagFlipped, 1, false);
    }
    else {
        existingFlippers.splice(flagFlipped, 1, 'flag');
    }
    return [...existingFlippers];
};
const generateMines = ({ numberOfMines, verticalDimension, horizontalDimension }) => {
    let generatedMines = [];
    while (generatedMines.length < numberOfMines) {
        const mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));
        if (!generatedMines.includes(mineCanidate)) {
            generatedMines.push(mineCanidate);
        }
    }
    ;
    return generatedMines;
};
const generateNumbers = ({ mineArr, verticalDimension, horizontalDimension }) => {
    let board = [...Array(verticalDimension * horizontalDimension).keys()];
    let numBoard = {};
    mineArr === null || mineArr === void 0 ? void 0 : mineArr.forEach((mine, _, mines) => {
        let tLD = horizontalDimension + 1;
        if (board.includes(mine - tLD) && (((mine - tLD) + 1) % horizontalDimension !== 0) && !mines.includes(mine - tLD)) {
            if (numBoard[mine - tLD]) {
                numBoard[mine - tLD] = numBoard[mine - tLD] + 1;
            }
            else {
                numBoard[mine - tLD] = 1;
            }
        }
        const tD = horizontalDimension;
        if (board.includes(mine - tD) && !mines.includes(mine - tD)) {
            if (numBoard[mine - tD]) {
                numBoard[mine - tD] = numBoard[mine - tD] + 1;
            }
            else {
                numBoard[mine - tD] = 1;
            }
        }
        const tRD = horizontalDimension - 1;
        if (board.includes(mine - tRD) && ((mine - tRD) % horizontalDimension !== 0) && !mines.includes(mine - tRD)) {
            if (numBoard[mine - tRD]) {
                numBoard[mine - tRD] = numBoard[mine - tRD] + 1;
            }
            else {
                numBoard[mine - tRD] = 1;
            }
        }
        if (board.includes(mine + 1) && ((mine + 1) % horizontalDimension !== 0) && !mines.includes(mine + 1)) {
            if (numBoard[mine + 1]) {
                numBoard[mine + 1] = numBoard[mine + 1] + 1;
            }
            else {
                numBoard[mine + 1] = 1;
            }
        }
        const bRD = horizontalDimension + 1;
        if (board.includes(mine + bRD) && ((mine + bRD) % horizontalDimension !== 0) && !mines.includes(mine + bRD)) {
            if (numBoard[mine + bRD]) {
                numBoard[mine + bRD] = numBoard[mine + bRD] + 1;
            }
            else {
                numBoard[mine + bRD] = 1;
            }
        }
        const bD = horizontalDimension;
        if (board.includes(mine + bD) && !mines.includes(mine + bD)) {
            if (numBoard[mine + bD]) {
                numBoard[mine + bD] = numBoard[mine + bD] + 1;
            }
            else {
                numBoard[mine + bD] = 1;
            }
        }
        const bLD = horizontalDimension - 1;
        if (board.includes(mine + bLD) && (((mine + bLD) + 1) % horizontalDimension !== 0) && !mines.includes(mine + bLD)) {
            if (numBoard[mine + bLD]) {
                numBoard[mine + bLD] = numBoard[mine + bLD] + 1;
            }
            else {
                numBoard[mine + bLD] = 1;
            }
        }
        if (board.includes(mine - 1) && (mine % horizontalDimension !== 0) && !mines.includes(mine - 1)) {
            if (numBoard[mine - 1]) {
                numBoard[mine - 1] = numBoard[mine - 1] + 1;
            }
            else {
                numBoard[mine - 1] = 1;
            }
        }
    });
    return numBoard;
};
export { iterateColors, modulateColorDelay, revealFlippers, flipNormalTile, flipRecursedTiles, revealDeadFlippers, setFlagFlipped, generateMines, generateNumbers, };
//# sourceMappingURL=boardActions.js.map