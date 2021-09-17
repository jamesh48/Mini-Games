import React, { useState, useEffect, useCallback } from 'react';
import Square from './Squares/GlobalSquare.js';
import useInterval from 'Components/useInterval.js';
import './boardstyles.scss';

const generateMines = (numberOfMines, verticalDimension, horizontalDimension) => {
  let mineArr = [];
  while (mineArr.length < numberOfMines) {
    const mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));
    if (!mineArr.includes(mineCanidate)) {
      mineArr.push(mineCanidate);
    }
  }
  return mineArr;
};

const generateNumbers = (mines, verticalDimension, horizontalDimension) => {
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
}

export default ({ surprised, surprisedCallback, skillLevel, timerOn, timerTime, timerOnCallback, resetCallback, flagsRemainingCallback, definedUserName }) => {
  const [dimensions, setDimensions] = useState({ verticalDimension: 9, horizontalDimension: 9, numberOfMines: 10 });
  const [colors, setColors] = useState(['blue-num', 'green-num', 'red-num', 'black-num', 'purple-num', 'maroon-num', 'turquoise-num', 'golden', 'grey-num']);
  const [colorDelay, setColorDelay] = useState(50);
  const [flippers, setFlippers] = useState(Array.from({ length: dimensions.horizontalDimension * dimensions.verticalDimension }, () => false));
  const [mines, setMines] = useState(generateMines(dimensions.numberOfMines, dimensions.verticalDimension, dimensions.horizontalDimension));
  const [numbers, setNumbers] = useState(generateNumbers(mines, dimensions.verticalDimension, dimensions.horizontalDimension));

  useEffect(() => {
    setDimensions(skillLevel === 'beginner' ?
      { verticalDimension: 4, horizontalDimension: 4, numberOfMines: 1 }
      : skillLevel === 'intermediate' ?
        { verticalDimension: 16, horizontalDimension: 16, numberOfMines: 40 }
        // Advanced
        : { verticalDimension: 16, horizontalDimension: 30, numberOfMines: 99 }
    )
  }, [skillLevel]);

  useInterval(() => {
    setColors((existingColors) => {
      const lastColor = existingColors.pop();
      existingColors.unshift(lastColor);
      return [...existingColors];
    })
  }, colorDelay);

  useEffect(() => {
    if (colorDelay === null) {
      setColors(null);
    }
  }, [colorDelay]);

  useEffect(() => {
    if (definedUserName) {
      setColorDelay(null);
    }
  }, [definedUserName]);

  const generateColors = useCallback((t) => {
    // Stars only *
    if ((t >= 6 && t <= 9) || (t >= 15 && t <= 19) || (t > 25)) {
      const [blu, grn, red, blk, prpl, mrn, turq, gldn, gry] = colors;
      return !(t % 10) ? blu
        : !((t - 1) % 10) ? grn
          : !((t - 2) % 10) ? red
            : !((t - 3) % 10) ? blk
              : !((t - 4) % 10) ? prpl
                : !((t - 5) % 10) ? mrn
                  : (!((t - 6) % 10) || t === 27) ? turq
                    : (!((t - 7) % 10) || t === 18 || t === 28) ? gldn
                      : (!((t - 9) % 10) || t === 8) ? gry
                        : null;
    };
  }, [colors]);

  const genLoginMessage = useCallback((t) => {
    if (skillLevel === 'beginner') {
      return t === 0 ? 'P' : t === 1 ? 'l' : t === 2 ? 'e' : t === 3 ? 'a' : t === 4 ? 's' : t === 5 ? 'e' : t === 10 ? 'L' : t === 11 ? 'o' : t === 12 ? 'g' : t === 13 ? 'i' : t === 14 ? 'n' : t === 20 ? 'F' : t === 21 ? 'i' : t === 22 ? 'r' : t === 23 ? 's' : t === 24 ? 't' : t === 25 ? '!' : t < 36 ? '*' : null;
    }
  }, []);


  //
  //
  //

  // This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.
  useEffect(() => {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      setFlippers(Array.from({ length: dimensions.horizontalDimension * dimensions.verticalDimension }, () => false));
      // Generate Mines
      setMines(generateMines(dimensions.numberOfMines, dimensions.verticalDimension, dimensions.horizontalDimension));
    };
  }, [timerOn, skillLevel])

  // If Skill Level is changed, reset the board.
  useEffect(() => {
    resetCallback();
  }, [skillLevel])

  //When Mines are reset, generate numbers around those mines
  useEffect(() => {
    setNumbers(generateNumbers(mines, dimensions.verticalDimension, dimensions.horizontalDimension));
  }, [mines])

  useEffect(() => {
    if (flippers[0] !== 'dead') {
      // Only store score when all flippers have been flipped (ends recursive loop)
      if (flippers.every((flipper) => (flipper === true || flipper === 'flag' || mines[flipper]))) {
        // Post Result
        timerOnCallback([timerTime]);
        setTimeout(() => {
          // This Gets the posted result
          surprisedCallback('victory');
        }, 500)

        // If a victory is detected, flip all the empty squares
      } else if (Object.keys(numbers).every(num => flippers[num] === true)) {
        setFlippers((prevFlippers) => {
          prevFlippers = prevFlippers.map((flipper, index) => {
            if (flipper === 'flag' || mines.includes(index)) {
              return 'flag'
            } else {
              return true
            }
          });
          return [...prevFlippers];
        })
      }
    }
  }, [flippers])

  const handleClick = useCallback((tile, indicator) => {
    event.preventDefault();
    if (indicator === 'dead') {
      // Reveal all Flippers
      setFlippers((prevFlippers) => {
        prevFlippers = prevFlippers.map((flipper, index) => {
          if (index === 0) {
            return 'dead'
          } else {
            return true;
          }
        })
        return [...prevFlippers]
      });

    } else if (event.type === 'contextmenu') {
      setFlippers((prevFlippers) => {
        if (prevFlippers[tile] === 'flag') {
          prevFlippers.splice(tile, 1, false);
        } else {
          prevFlippers.splice(tile, 1, 'flag');
        }
        return [...prevFlippers];
      })
    }

    if (event.type === 'click' && indicator !== 'dead') {
      // Dark Tiles
      if (!numbers[tile] && !mines.includes(tile)) {

        const tileRecurse = (tile) => {
          setFlippers((prevFlippers) => {
            prevFlippers.splice(tile, 1, true);

            const evalU = tile => (tile - dimensions.horizontalDimension);
            const evalR = tile => (tile + 1);
            const evalD = tile => (tile + dimensions.horizontalDimension);
            const evalL = tile => (tile - 1);

            const testTile = (tile, test) => {
              return (
                !numbers[test(tile)]
                && !mines.includes(test(tile))
                && prevFlippers[test(tile)] === false
                && test(tile) >= 0
                && test(tile) <= (dimensions.verticalDimension * dimensions.horizontalDimension)
              )
            }
            // ***********
            //  Going Up
            // ***********

            if (
              testTile(tile, evalU)
            ) {
              tileRecurse(evalU(tile))
            }

            // ***********
            //  Going Right
            // ***********

            if (
              testTile(tile, evalR)
              && (evalR(tile) % dimensions.horizontalDimension !== 0
                || (evalR(tile) % dimensions.horizontalDimension === 0 && tile % dimensions.horizontalDimension === 0))
            ) {
              tileRecurse(evalR(tile))
            }

            // ***********
            //  Going Down
            // ***********

            if (
              testTile(tile, evalD)
            ) {
              tileRecurse(evalD(tile))
            }

            // ***********
            //  Going Left
            // ***********

            if (
              testTile(tile, evalL)
              && ((evalL(tile + 1)) % dimensions.horizontalDimension !== 0
                || (evalL(tile + 1) % dimensions.horizontalDimension === 0 && evalL(tile) % dimensions.horizontalDimension === 0))
            ) {
              tileRecurse(evalL(tile));
            };
            return [...prevFlippers];
          });
        };

        tileRecurse(tile)
      } else {
        setFlippers((prevFlippers) => {
          prevFlippers.splice(tile, 1, true);
          return [...prevFlippers];
        });
      }
    }
  }, [surprised])

  return (
    <div>
      {[...new Array(dimensions.verticalDimension)].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={'sweep-row'}>
            {[...new Array(dimensions.horizontalDimension)].map((sqr, sqrIndex) => {
              const currCanidate = ((rowIndex * dimensions.horizontalDimension) + sqrIndex);
              return (
                <Square
                key={sqrIndex}
                  sqrIndex={sqrIndex}
                  flippers={flippers}
                  currCanidate={currCanidate}
                  definedUserName={definedUserName}

                  mines={mines}
                  numbers={numbers}
                  colors={colors}
                  surprised={surprised}
                  timerOn={timerOn}

                  flagsRemainingCallback={flagsRemainingCallback}
                  surprisedCallback={surprisedCallback}
                  timerOnCallback={timerOnCallback}
                  generateColors={generateColors}
                  genLoginMessage={genLoginMessage}
                  handleClick={handleClick}
                />
              )
            })
            }
          </div >
        )
      })}
    </div>
  );
};