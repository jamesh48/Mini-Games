
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

export {
  revealFlippers,
  flipNormalTile,
  flipRecursedTiles,
  revealDeadFlippers,
  setFlagFlipped
}