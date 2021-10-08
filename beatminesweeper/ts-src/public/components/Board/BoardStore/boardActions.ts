import {GenerateNumbersFunc, IterateColorsFunc} from '../board-types';

const iterateColors: IterateColorsFunc = (existingColors) => {
  const lastColor = existingColors.pop();
  existingColors.unshift(lastColor);
  return [...existingColors];
};


type ModulateColorDelayFunc = (existing: number, newColorDelay: number) => number;

const modulateColorDelay: ModulateColorDelayFunc = (existing, newColorDelay) => {
  if ((existing + newColorDelay) > 25) {
    // If Increasing the Color Delay- do so at a rate of 1, otherwise when decreasing do so at 2.5 rate- full rate is less enjoyable
    newColorDelay = newColorDelay < 0 && existing < 200 ? newColorDelay / 5
      : newColorDelay < 0 ? newColorDelay / 2.5
        : 1
    return existing + newColorDelay;
  }
  return existing;
};


type RevealFlippersFunc = (existingFlippers: (string | boolean)[], mines: number[]) => (string | boolean)[];

const revealFlippers: RevealFlippersFunc = (existingFlippers, mines) => {
  existingFlippers = existingFlippers.map((flipper, index) => {
    if (flipper === 'flag' || mines?.includes(index)) {
      return 'flag'
    } else {
      return true
    }
  });
  return [...existingFlippers];
};

type FlipNormalTileFunc = (existingFlippers: (string | boolean)[], flippedTile: number) => (string |boolean)[];

const flipNormalTile: FlipNormalTileFunc = (existingFlippers, flippedTile) => {
  existingFlippers.splice(flippedTile, 1, true);
  return [...existingFlippers];
};

type FlipRecursedTilesFunc = (existingFlippers: (string | boolean)[], recursedTiles: number[]) => (string | boolean)[];

const flipRecursedTiles: FlipRecursedTilesFunc = (existingFlippers, recursedTiles) => {
  for (let i = 0; i < recursedTiles.length; i++) {
    existingFlippers.splice(recursedTiles[i], 1, true);
  }
  return [...existingFlippers];
};

type RevealDeadFlippersFunc = (existingFlippers: (string | boolean)[]) => (string | boolean)[];

const revealDeadFlippers: RevealDeadFlippersFunc = (existingFlippers) => {
  existingFlippers = existingFlippers.map((_, index) => {
    if (index === 0) {
      return 'dead'
    } else {
      return true;
    }
  })
  return [...existingFlippers]
};

type SetFlagFlippedFunc = (existingFlippers: (string | boolean)[], flagFlipped: number) => (string | boolean)[];

const setFlagFlipped: SetFlagFlippedFunc = (existingFlippers, flagFlipped) => {
  if (existingFlippers[flagFlipped] === 'flag') {
    existingFlippers.splice(flagFlipped, 1, false);
  } else {
    existingFlippers.splice(flagFlipped, 1, 'flag');
  }
  return [...existingFlippers];
};

type GenerateMinesFunc = (dimensions: { numberOfMines: number, verticalDimension: number, horizontalDimension: number }) => number[];

const generateMines: GenerateMinesFunc = ({ numberOfMines, verticalDimension, horizontalDimension }) => {
  let generatedMines: number[] = [];
  while (generatedMines.length < numberOfMines) {
    const mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));
    if (!generatedMines.includes(mineCanidate)) {
      generatedMines.push(mineCanidate);
    }
  };
  return generatedMines;
};



const generateNumbers: GenerateNumbersFunc = ({ mineArr, verticalDimension, horizontalDimension }) => {
  let board = [...Array(verticalDimension * horizontalDimension).keys()];
  let numBoard = {};

  mineArr?.forEach((mine, _, mines) => {
    // Number is Top Left Diagonal
    let tLD = horizontalDimension + 1;
    if (board.includes(mine - tLD) && (((mine - tLD) + 1) % horizontalDimension !== 0) && !mines.includes(mine - tLD)) {
      if (numBoard[mine - tLD]) {
        numBoard[mine - tLD] = numBoard[mine - tLD] + 1;
      } else {
        numBoard[mine - tLD] = 1;
      }
    }

    // Number is Above
    const tD = horizontalDimension;
    if (board.includes(mine - tD) && !mines.includes(mine - tD)) {
      if (numBoard[mine - tD]) {
        numBoard[mine - tD] = numBoard[mine - tD] + 1;
      } else {
        numBoard[mine - tD] = 1;
      }
    }

    //Number is Top Right Diagonal
    const tRD = horizontalDimension - 1;
    if (board.includes(mine - tRD) && ((mine - tRD) % horizontalDimension !== 0) && !mines.includes(mine - tRD)) {
      if (numBoard[mine - tRD]) {
        numBoard[mine - tRD] = numBoard[mine - tRD] + 1;
      } else {
        numBoard[mine - tRD] = 1;
      }
    }

    // Number to the right
    if (board.includes(mine + 1) && ((mine + 1) % horizontalDimension !== 0) && !mines.includes(mine + 1)) {
      if (numBoard[mine + 1]) {
        numBoard[mine + 1] = numBoard[mine + 1] + 1;
      } else {
        numBoard[mine + 1] = 1;
      }
    }

    // Number is Bottom Right Diagonal
    const bRD = horizontalDimension + 1;
    if (board.includes(mine + bRD) && ((mine + bRD) % horizontalDimension !== 0) && !mines.includes(mine + bRD)) {
      if (numBoard[mine + bRD]) {
        numBoard[mine + bRD] = numBoard[mine + bRD] + 1;
      } else {
        numBoard[mine + bRD] = 1;
      }
    }

    // Number is Below
    const bD = horizontalDimension;
    if (board.includes(mine + bD) && !mines.includes(mine + bD)) {
      if (numBoard[mine + bD]) {
        numBoard[mine + bD] = numBoard[mine + bD] + 1;
      } else {
        numBoard[mine + bD] = 1;
      }
    }

    //Number is Bottom Left Diagonal
    const bLD = horizontalDimension - 1;
    if (board.includes(mine + bLD) && (((mine + bLD) + 1) % horizontalDimension !== 0) && !mines.includes(mine + bLD)) {
      if (numBoard[mine + bLD]) {
        numBoard[mine + bLD] = numBoard[mine + bLD] + 1;
      } else {
        numBoard[mine + bLD] = 1;
      }
    }

    // Number to the left
    if (board.includes(mine - 1) && (mine % horizontalDimension !== 0) && !mines.includes(mine - 1)) {
      if (numBoard[mine - 1]) {
        numBoard[mine - 1] = numBoard[mine - 1] + 1;
      } else {
        numBoard[mine - 1] = 1;
      }
    }

  })
  return numBoard;
};


export {
  // Colors
  iterateColors,
  modulateColorDelay,
  // Flippers
  revealFlippers,
  flipNormalTile,
  flipRecursedTiles,
  revealDeadFlippers,
  setFlagFlipped,
  // Mines
  generateMines,
  // Numbers
  generateNumbers,
};