const generateLoginMessage = ({ currTile: t, skillLevel }) => {
  const beginnerMessages = { '1': 'Please', '2': 'Login', '3': 'First' };
  const intermediateMessages = { '2': 'Please', '4': 'Login', '6': 'First' };
  const advancedMessages = { '2': 'Please', '3': 'Login', '4': 'First' };

  if (skillLevel === 'beginner' && t < 81) {
    return beginnerMessages[String(Math.floor(t / 10))]?.substring(t % 10, (t % 10) + 1) || '*';
  };

  if (skillLevel === 'intermediate' && t < 144) {
    return intermediateMessages[String(Math.floor(t / 17))]?.substring(t % 17, (t % 17) + 1) || '*';
  };

  if (skillLevel === 'advanced' && t < 240) {
    return advancedMessages[String(Math.floor(t / 31))]?.substring(t % 33.15, (t % 33.15) + 1) || '*';
  };
};


const generateColors = ({ currTile: t, colors, skillLevel }) => {
  if (skillLevel === 'beginner') {
    if ((t <= 9) || (t >= 16 && t <= 19) || (t >= 25 && t <= 29) || (t >= 35)) {
      return colors[(t + (Math.floor(t / 8))) % 9]
    }
  }

  if (skillLevel === 'intermediate') {
    if ((t <= 33) || (t >= 40 && t <= 66) || (t >= 73 && t <= 99) || (t >= 107 && t <= 144)) {
      return colors[(t + (Math.floor(t / 16))) % 8]
    }
  }

  if (skillLevel === 'advanced') {
    if ((t <= 66) || (t >= 73 && t <= 99) || (t >= 105 && t <= 132) || (t >= 138 && t <= 241)) {
      return colors[(t + (Math.floor(t / 30))) % 8]
    }
  }
};

const genNumberClassNames = ({
  // Global
  timerOn,
  definedUserName,
  skillLevel,
  // Passed in
  currTile,
  // Board
  numbers,
  flippers,
  colors }) => {
  let classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  const numberTileOnVictoryDeadOrNotLoggedIn = (timerOn === 'VICTORY' || timerOn === 'FREEZE' || !definedUserName);

  const flagOnNumberTileGamePlay = flippers[currTile] === 'flag';

  classNameArr.push(
    numberTileOnVictoryDeadOrNotLoggedIn ? 'disabled'
      : flagOnNumberTileGamePlay ? 'flag'
        : 'number'
  );

  // Color Determination
  const currNum = numbers[currTile];

  classNameArr.push(
    currNum === 1 ? 'blue-num'
      : currNum === 2 ? 'green-num'
        : currNum === 3 ? 'red-num'
          : currNum === 4 ? 'purple-num'
            : currNum === 5 ? 'maroon-num'
              : currNum === 6 ? 'turquoise-num'
                : currNum === 7 ? 'black-num'
                  : currNum === 8 ? 'grey-num'
                    : null
  );

  return classNameArr.join(' ');
};

const genEmptyClassNames = ({
  // Global
  skillLevel,
  definedUserName,
  timerOn,
  // Passed in
  currTile,
  // Board
  colors,
  flippers,
}) => {
  let classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  const emptyTileOnVictoryOrDead = (timerOn === 'VICTORY' || timerOn === 'FREEZE');
  const emptyTileOnNotLoggedIn = !definedUserName;
  const flagOnEmptyTileGameplay = flippers[currTile] === 'flag';
  const emptyTileRevealedGameplay = flippers[currTile] === true;

  classNameArr.push(
    emptyTileOnVictoryOrDead ? 'disabled dark-square'
      : emptyTileOnNotLoggedIn ? 'disabled'
        : flagOnEmptyTileGameplay ? 'flag'
          : emptyTileRevealedGameplay ? 'dark-square'
            : null
  );
  return classNameArr.join(' ');
};

const genMineClassNames = ({
  //Global
  timerOn,
  definedUserName,
  skillLevel,
  // Passed in
  currTile,
  // Board (Local)
  colors,
  flippers
}) => {
  let classNameArr = ['sweep-square']

  if (colors !== null) {
    classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  const flagOnMineTileAfterVictory = timerOn === 'VICTORY' && flippers[currTile] === 'flag';

  const mineTileAfterDead = timerOn === 'FREEZE';
  const tileIsFlaggedGamePlay = flippers[currTile] === 'flag';
  const mineTileOnDead = flippers[currTile] === true;

  classNameArr.push(
    flagOnMineTileAfterVictory ? 'flag disabled'
      // : (surprised === 'victory' && !definedUserName) ? 'disabled'
        : mineTileAfterDead ? 'disabled mine'
          : tileIsFlaggedGamePlay ? 'flag'
            : mineTileOnDead ? 'mine'
              : null
  );

  return classNameArr.join(' ');
};


const tileRecurse = ({
  currTile: tile,
  dimensions,
  numbers,
  mines,
  resultArr
}) => {
  resultArr.push(tile)
  const evalU = tile => (tile - dimensions.horizontalDimension);
  const evalR = tile => (tile + 1);
  const evalD = tile => (tile + dimensions.horizontalDimension);
  const evalL = tile => (tile - 1);

  const testTile = (tile, testFunc) => {
    return (
      !numbers[testFunc(tile)]
      && !mines.includes(testFunc(tile))
      // && prevFlippers[testFunc(tile)] === false
      && !resultArr.includes(testFunc(tile))
      && testFunc(tile) >= 0
      && testFunc(tile) <= (dimensions.verticalDimension * dimensions.horizontalDimension)
    )
  }
  // ***********
  //  Going Up
  // ***********

  if (
    testTile(tile, evalU)
  ) {
    tileRecurse({ currTile: evalU(tile), dimensions, numbers, mines, resultArr });
  }

  // ***********
  //  Going Right
  // ***********

  if (
    testTile(tile, evalR)
    && (evalR(tile) % dimensions.horizontalDimension !== 0
      || (evalR(tile) % dimensions.horizontalDimension === 0 && tile % dimensions.horizontalDimension === 0))
  ) {
    tileRecurse({ currTile: evalR(tile), dimensions, numbers, mines, resultArr });
  }

  // ***********
  //  Going Down
  // ***********

  if (
    testTile(tile, evalD)
  ) {
    tileRecurse({ currTile: evalD(tile), dimensions, numbers, mines, resultArr })
  }

  // ***********
  //  Going Left
  // ***********

  if (
    testTile(tile, evalL)
    && ((evalL(tile + 1)) % dimensions.horizontalDimension !== 0
      || (evalL(tile + 1) % dimensions.horizontalDimension === 0 && evalL(tile) % dimensions.horizontalDimension === 0))
  ) {
    tileRecurse({ currTile: evalL(tile), dimensions, numbers, mines, resultArr });
  };

  return resultArr;
};


const handleClick = ({
  currTile: tile,
  indicator,
  dimensions,
  mines,
  numbers,
  surprised,
  boardDispatch
}) => {
  event.preventDefault();
  return (indicator === 'dead') ? boardDispatch({ type: 'REVEAL DEAD FLIPPERS' })
    : (event.type === 'contextmenu') ? boardDispatch({ type: 'SET FLAG FLIPPED', payload: { flagFlipped: tile } })
      : (event.type === 'click' && indicator !== 'dead') && (!numbers[tile] && !mines.includes(tile)) ?
        boardDispatch({
          type: 'FLIP RECURSED TILES',
          payload: tileRecurse({ currTile: tile, dimensions, numbers, mines, resultArr: [] })
        })
        : (event.type === 'click' && indicator !== 'dead') ?
          boardDispatch({ type: 'FLIP NORMAL TILE', payload: { flippedTile: tile } })
          : null;
};

export {
  genEmptyClassNames,
  genNumberClassNames,
  genMineClassNames,
  generateLoginMessage,
  handleClick
};
