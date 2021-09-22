const iterateColors = (existingColors) => {
  const lastColor = existingColors.pop();
  existingColors.unshift(lastColor);
  return [...existingColors];
};

const modulateColorDelay = (existing, newColorDelay) => {
  if ((existing + newColorDelay) > 25) {
    // If Increasing the Color Delay- do so at a rate of 1, otherwise when decreasing do so at 2.5 rate- full rate is less enjoyable
    newColorDelay = newColorDelay < 0 && existing < 200 ? newColorDelay / 5
      : newColorDelay < 0 ? newColorDelay / 2.5
        : 1

    return existing + newColorDelay;
  }
  return existing;
};


const revealFlippers = (existingFlippers, mines) => {
  existingFlippers = existingFlippers.map((flipper, index) => {
    if (flipper === 'flag' || mines.includes(index)) {
      return 'flag'
    } else {
      return true
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
  existingFlippers = existingFlippers.map((flipper, index) => {
    if (index === 0) {
      return 'dead'
    } else {
      return true;
    }
  })
  return [...existingFlippers]
};

const setFlagFlipped = (existingFlippers, flagFlipped) => {
  if (existingFlippers[flagFlipped] === 'flag') {
    existingFlippers.splice(flagFlipped, 1, false);
  } else {
    existingFlippers.splice(flagFlipped, 1, 'flag');
  }
  return [...existingFlippers];
};


const generateMines = ({ numberOfMines, verticalDimension, horizontalDimension }) => {
  let mineArr = [];
  while (mineArr.length < numberOfMines) {
    const mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));
    if (!mineArr.includes(mineCanidate)) {
      mineArr.push(mineCanidate);
    }
  };
  return mineArr;
};


const generateNumbers = ({ mines, verticalDimension, horizontalDimension }) => {
  let board = [...Array(verticalDimension * horizontalDimension).keys()];
  let numBoard = {};

  mines.forEach((mine, index, mineArr) => {
    // Number is Top Left Diagonal
    let tLD = horizontalDimension + 1;
    if (board.includes(mine - tLD) && (((mine - tLD) + 1) % horizontalDimension !== 0) && !mineArr.includes(mine - tLD)) {
      if (numBoard[mine - tLD]) {
        numBoard[mine - tLD] = numBoard[mine - tLD] + 1;
      } else {
        numBoard[mine - tLD] = 1;
      }
    }

    // Number is Above
    const tD = horizontalDimension;
    if (board.includes(mine - tD) && !mineArr.includes(mine - tD)) {
      if (numBoard[mine - tD]) {
        numBoard[mine - tD] = numBoard[mine - tD] + 1;
      } else {
        numBoard[mine - tD] = 1;
      }
    }

    //Number is Top Right Diagonal
    const tRD = horizontalDimension - 1;
    if (board.includes(mine - tRD) && ((mine - tRD) % horizontalDimension !== 0) && !mineArr.includes(mine - tRD)) {
      if (numBoard[mine - tRD]) {
        numBoard[mine - tRD] = numBoard[mine - tRD] + 1;
      } else {
        numBoard[mine - tRD] = 1;
      }
    }

    // Number to the right
    if (board.includes(mine + 1) && ((mine + 1) % horizontalDimension !== 0) && !mineArr.includes(mine + 1)) {
      if (numBoard[mine + 1]) {
        numBoard[mine + 1] = numBoard[mine + 1] + 1;
      } else {
        numBoard[mine + 1] = 1;
      }
    }

    // Number is Bottom Right Diagonal
    const bRD = horizontalDimension + 1;
    if (board.includes(mine + bRD) && ((mine + bRD) % horizontalDimension !== 0) && !mineArr.includes(mine + bRD)) {
      if (numBoard[mine + bRD]) {
        numBoard[mine + bRD] = numBoard[mine + bRD] + 1;
      } else {
        numBoard[mine + bRD] = 1;
      }
    }

    // Number is Below
    const bD = horizontalDimension;
    if (board.includes(mine + bD) && !mineArr.includes(mine + bD)) {
      if (numBoard[mine + bD]) {
        numBoard[mine + bD] = numBoard[mine + bD] + 1;
      } else {
        numBoard[mine + bD] = 1;
      }
    }

    //Number is Bottom Left Diagonal
    const bLD = horizontalDimension - 1;
    if (board.includes(mine + bLD) && (((mine + bLD) + 1) % horizontalDimension !== 0) && !mineArr.includes(mine + bLD)) {
      if (numBoard[mine + bLD]) {
        numBoard[mine + bLD] = numBoard[mine + bLD] + 1;
      } else {
        numBoard[mine + bLD] = 1;
      }
    }

    // Number to the left
    if (board.includes(mine - 1) && (mine % horizontalDimension !== 0) && !mineArr.includes(mine - 1)) {
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