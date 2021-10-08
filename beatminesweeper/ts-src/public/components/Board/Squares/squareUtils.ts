import { GenNumberClassNamesFunc, GenerateColorsFunc, GenEmptyClassNamesFunc, GenMineClassNamesFunc, GenerateLoginMessageFunc, ClassNameArr, HandleClickFunc } from 'MinesweeperTypes';


const generateLoginMessage: GenerateLoginMessageFunc = (args) => {
  const { currTile, skillLevel } = args;

  const t = currTile;
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

  return null;
};



const generateColors: GenerateColorsFunc = (args) => {
  const { currTile, colors, skillLevel } = args;
  const t = currTile;
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
  return null;
};

const genNumberClassNames: GenNumberClassNamesFunc = (args) => {
  const { timerOn, definedUserName, skillLevel, currTile, numbers, flippers, colors } = args;
  let classNameArr: ClassNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  const numberTileOnVictoryDeadOrNotLoggedIn = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' || timerOn === 'FREEZE DEAD' || !definedUserName);

  const flagOnNumberTileGamePlay = flippers[currTile] === 'flag';

  classNameArr.push(
    numberTileOnVictoryDeadOrNotLoggedIn ? 'disabled'
      : flagOnNumberTileGamePlay ? 'flag'
        : 'number'
  );

  // Color Determination
  const currNum: number = numbers[currTile];

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

const genEmptyClassNames: GenEmptyClassNamesFunc = (args) => {
  const { skillLevel, definedUserName, timerOn, currTile, colors, flippers } = args
  let classNameArr: ClassNameArr = ['sweep-square'];

  if (colors !== null) {
    classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  const emptyTileOnVictoryOrDead = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN' || timerOn === 'FREEZE DEAD');
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

const genMineClassNames: GenMineClassNamesFunc = (args) => {
  const { timerOn, skillLevel, currTile, colors, flippers } = args;
  let classNameArr: ClassNameArr = ['sweep-square']

  if (colors !== null) {
    classNameArr.push(generateColors({ currTile, colors, skillLevel }), 'disabled');
    return classNameArr.join(' ');
  };

  const flagOnMineTileAfterVictory = (timerOn === 'VICTORY' || timerOn === 'FREEZE WIN') && flippers[currTile] === 'flag';
  const mineTileAfterDead = timerOn === 'FREEZE DEAD';
  const tileIsFlaggedGamePlay = flippers[currTile] === 'flag';
  const mineTileOnDead = flippers[currTile] === true;

  classNameArr.push(
    flagOnMineTileAfterVictory ? 'flag disabled'
      : mineTileAfterDead ? 'disabled mine'
        : tileIsFlaggedGamePlay ? 'flag'
          : mineTileOnDead ? 'mine'
            : null
  );

  return classNameArr.join(' ');
};


type TileRecurseFunc = (args: { currTile: number, dimensions: { horizontalDimension: number, verticalDimension: number }, numbers: {}, mineArr: number[], resultArr: (string | boolean | number)[] }) => (string | boolean | number)[];

const tileRecurse: TileRecurseFunc = (args) => {
  const { currTile, dimensions, numbers, mineArr, resultArr } = args
  resultArr.push(currTile)
  type EvalTestFunc = (currTile: number) => number;

  const evalU: EvalTestFunc = currTile => (currTile - dimensions.horizontalDimension);
  const evalR: EvalTestFunc = currTile => (currTile + 1);
  const evalD: EvalTestFunc = currTile => (currTile + dimensions.horizontalDimension);
  const evalL: EvalTestFunc = currTile => (currTile - 1);

  type TestCurrTileFunc = (currTile: number, testFunc: Function) => boolean;

  const testCurrTile: TestCurrTileFunc = (currTile, testFunc) => {
    return (
      !numbers[testFunc(currTile)]
      && !mineArr.includes(testFunc(currTile))
      // && prevFlippers[testFunc(tile)] === false
      && !resultArr.includes(testFunc(currTile))
      && testFunc(currTile) >= 0
      && testFunc(currTile) <= (dimensions.verticalDimension * dimensions.horizontalDimension)
    )
  }
  // ***********
  //  Going Up
  // ***********

  if (
    testCurrTile(currTile, evalU)
  ) {
    tileRecurse({ currTile: evalU(currTile), dimensions, numbers, mineArr, resultArr });
  }

  // ***********
  //  Going Right
  // ***********

  if (
    testCurrTile(currTile, evalR)
    && (evalR(currTile) % dimensions.horizontalDimension !== 0
      || (evalR(currTile) % dimensions.horizontalDimension === 0 && currTile % dimensions.horizontalDimension === 0))
  ) {
    tileRecurse({ currTile: evalR(currTile), dimensions, numbers, mineArr, resultArr });
  }

  // ***********
  //  Going Down
  // ***********

  if (
    testCurrTile(currTile, evalD)
  ) {
    tileRecurse({ currTile: evalD(currTile), dimensions, numbers, mineArr, resultArr })
  }

  // ***********
  //  Going Left
  // ***********

  if (
    testCurrTile(currTile, evalL)
    && ((evalL(currTile + 1)) % dimensions.horizontalDimension !== 0
      || (evalL(currTile + 1) % dimensions.horizontalDimension === 0 && evalL(currTile) % dimensions.horizontalDimension === 0))
  ) {
    tileRecurse({ currTile: evalL(currTile), dimensions, numbers, mineArr, resultArr });
  };

  return resultArr;
};





const handleClick: HandleClickFunc = (event, args) => {

  const { currTile, indicator, dimensions, mineArr, numbers, boardDispatch } = args;

  event.preventDefault();
  return (indicator === 'dead') ? boardDispatch({ type: 'REVEAL DEAD FLIPPERS' })
    : (event.type === 'contextmenu') ? boardDispatch({ type: 'SET FLAG FLIPPED', payload: { flagFlipped: currTile } })
      : (event.type === 'click' && indicator !== 'dead') && (!numbers[currTile] && !mineArr.includes(currTile)) ?
        boardDispatch({
          type: 'FLIP RECURSED TILES',
          payload: tileRecurse({ currTile: currTile, dimensions, numbers, mineArr, resultArr: [] })
        })
        : (event.type === 'click' && indicator !== 'dead') ?
          boardDispatch({ type: 'FLIP NORMAL TILE', payload: { flippedTile: currTile } })
          : null;
};

export {
  genEmptyClassNames,
  genNumberClassNames,
  genMineClassNames,
  generateLoginMessage,
  handleClick
};
