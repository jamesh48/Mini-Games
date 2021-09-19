const generateLoginMessage = ({ currCanidate: t, skillLevel }) => {
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


const generateColors = ({ currCanidate: t, colors, skillLevel }) => {
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

const genNumberClassNames = ({ currCanidate, numbers, flippers, colors, surprised, definedUserName, dimensions: { skillLevel } }) => {
  let classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({ currCanidate, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  classNameArr.push(
    (surprised === 'victory' || surprised === 'dead' || !definedUserName) ? 'disabled'
      : flippers[currCanidate] === 'flag' ? 'flag'
        : 'number'
  );

  // Color Determination
  const currNum = numbers[currCanidate];

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

const genEmptyClassNames = ({ currCanidate, colors, surprised, flippers, definedUserName, dimensions: { skillLevel } }) => {
  let classNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({ currCanidate, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  classNameArr.push(
    (surprised === 'victory' || surprised === 'dead') ? 'disabled dark-square'
      : !definedUserName ? 'disabled'
        : flippers[currCanidate] === 'flag' ? 'flag'
          : flippers[currCanidate] === true ? 'dark-square'
            : null
  );
  return classNameArr.join(' ');
};

const genMineClassNames = ({ currCanidate, colors, surprised, flippers, definedUserName, skillLevel }) => {
  let classNameArr = ['sweep-square']

  if (colors !== null) {
    classNameArr.push(generateColors({ currCanidate, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  classNameArr.push(
    (surprised === 'victory' && flippers[currCanidate] === 'flag') ? 'flag disabled'
      : (surprised === 'victory' && !definedUserName) ? 'disabled'
        : surprised === 'dead' ? 'disabled mine'
          : flippers[currCanidate] === 'flag' ? 'flag'
            : flippers[currCanidate] === true ? 'mine'
              : null
  );

  return classNameArr.join(' ');
};


const tileRecurse = ({ currCanidate: tile, dimensions, numbers, mines, resultArr }) => {
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
    tileRecurse({ currCanidate: evalU(tile), dimensions, numbers, mines, resultArr });
  }

  // ***********
  //  Going Right
  // ***********

  if (
    testTile(tile, evalR)
    && (evalR(tile) % dimensions.horizontalDimension !== 0
      || (evalR(tile) % dimensions.horizontalDimension === 0 && tile % dimensions.horizontalDimension === 0))
  ) {
    tileRecurse({ currCanidate: evalR(tile), dimensions, numbers, mines, resultArr });
  }

  // ***********
  //  Going Down
  // ***********

  if (
    testTile(tile, evalD)
  ) {
    tileRecurse({ currCanidate: evalD(tile), dimensions, numbers, mines, resultArr })
  }

  // ***********
  //  Going Left
  // ***********

  if (
    testTile(tile, evalL)
    && ((evalL(tile + 1)) % dimensions.horizontalDimension !== 0
      || (evalL(tile + 1) % dimensions.horizontalDimension === 0 && evalL(tile) % dimensions.horizontalDimension === 0))
  ) {
    tileRecurse({ currCanidate: evalL(tile), dimensions, numbers, mines, resultArr });
  };

  return resultArr;
};


const handleClick = ({ currCanidate: tile, indicator, dimensions, mines, numbers, surprised, dispatch }) => {
  event.preventDefault();

  return (indicator === 'dead') ? dispatch({ type: 'REVEAL DEAD FLIPPERS' })
    : (event.type === 'contextmenu') ? dispatch({ type: 'SET FLAG FLIPPED', payload: { flagFlipped: tile } })
      : (event.type === 'click' && indicator !== 'dead') && (!numbers[tile] && !mines.includes(tile)) ?
        dispatch({ type: 'FLIP RECURSED TILES', payload: tileRecurse({ currCanidate: tile, dimensions, numbers, mines, resultArr: [] }) })
        : (event.type === 'click' && indicator !== 'dead') ? dispatch({ type: 'FLIP NORMAL TILE', payload: { flippedTile: tile } })
          : null;
};

export {
  genEmptyClassNames,
  genNumberClassNames,
  genMineClassNames,
  generateLoginMessage,
  handleClick
};
