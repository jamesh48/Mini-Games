import React, { useState, useEffect } from 'react';
import smiley from '../images/smileys/smiley-face.png';


const generateMines = (numberOfMines, verticalDimension, horizontalDimension) => {
  let mineArr = [];
  while (mineArr.length < numberOfMines) {
    const mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));
    if (!mineArr.includes(mineCanidate)) {
      mineArr.push(mineCanidate);
    }
  }
  return mineArr;
}

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



export default ({ surprised, surprisedCallback, skillLevel, timerOn, timerOnCallback, resetCallback, flagsRemainingCallback, solidUserName }) => {

  const [colors, setColors] = useState(null);

  useEffect(() => {
    window.test = setInterval(() => {
      setColors((existingColors) => {
        if (existingColors === null) {
          return ['blue-num', 'green-num', 'red-num', 'black-num', 'purple-num', 'maroon-num', 'turquoise-num', 'golden', 'grey-num']
        } else {
          let lastColor = existingColors.pop();
          existingColors.unshift(lastColor);
          return [...existingColors];
        }
      })
    }, 50)
  }, [])

  useEffect(() => {
    if (solidUserName) {
      clearInterval(window.test);
      setColors(null);
    }
  }, [solidUserName])

  const generateColors = (tile) => {
    // Letters Only
    // if (tile !== 6 && tile !== 7 && tile !== 8 && tile !== 9 && tile !== 15 && tile !== 16 && tile !== 17 && tile !== 18 && tile !== 19 && tile < 26) {

    // Stars only
    if (tile === 6 || tile === 7 || tile === 8 || tile === 9 || tile === 15 || tile === 16 || tile === 17 || tile === 18 || tile === 19 || tile > 25) {

      if (tile === 0 || tile === 10 || tile === 20 || tile === 30) {
        return colors[0]
      } else if (tile === 1 || tile === 11 || tile === 21 || tile === 31) {
        return colors[1];
      } else if (tile === 2 || tile === 12 || tile === 22 || tile === 32) {
        return colors[2];
      } else if (tile === 3 || tile === 13 || tile === 23 || tile === 33) {
        return colors[3];
      } else if (tile === 4 || tile === 14 || tile === 24 || tile === 34) {
        return colors[4];
      } else if (tile === 5 || tile === 15 || tile === 25 || tile === 35) {
        return colors[5];
      } else if (tile === 6 || tile === 16 || tile === 26 || tile === 27) {
        return colors[6];
      } else if (tile === 7 || tile === 17 || tile === 18 || tile === 28) {
        return colors[7];
      } else if (tile === 8 || tile === 9 || tile === 19 || tile === 29) {
        return colors[8];
      }
    }

    // return classNameArr;
  }
  const genLoginMessage = (t) => {
    if (skillLevel === 'beginner') {
      return t === 0 ? 'P' : t === 1 ? 'l' : t === 2 ? 'e' : t === 3 ? 'a' : t === 4 ? 's' : t === 5 ? 'e' : t === 10 ? 'L' : t === 11 ? 'o' : t === 12 ? 'g' : t === 13 ? 'i' : t === 14 ? 'n' : t === 20 ? 'F' : t === 21 ? 'i' : t === 22 ? 'r' : t === 23 ? 's' : t === 24 ? 't' : t === 25 ? '!' : t < 36 ? '*' : null;
    }
  }

  const genMineClassNames = (tile) => {

    let classNameArr = ['sweep-square']

    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    } else if (surprised === 'victory' && flippers[tile] === 'flag') {
      classNameArr.push('flag', 'disabled');
    } else if (surprised === 'victory' || !solidUserName) {
      classNameArr.push('disabled');
    } else if (surprised === 'dead') {
      classNameArr.push('disabled', 'mine')
    } else if (flippers[tile] === 'flag') {
      classNameArr.push('flag')
    } else if (flippers[tile] === true) {
      classNameArr.push('mine')
    }

    return classNameArr.join(' ')

  }

  const genNumberClassNames = (num) => {
    let classNameArr = ['sweep-square'];

    if (colors !== null) {
      classNameArr.push(generateColors(num), 'disabled');
      return classNameArr.join(' ')
    } else if (surprised === 'victory' || surprised === 'dead' || !solidUserName) {
      classNameArr.push('disabled')
    } else if (flippers[num] === 'flag') {
      classNameArr.push('flag');
    } else {
      classNameArr.push('number')
    }

    // Color Determination
    if (numbers[num] === 1) {
      classNameArr.push('blue-num');
    } else if (numbers[num] === 2) {
      classNameArr.push('green-num');
    } else if (numbers[num] === 3) {
      classNameArr.push('red-num');
    } else if (numbers[num] === 4) {
      classNameArr.push('purple-num');
    } else if (numbers[num] === 5) {
      classNameArr.push('maroon-num');
    } else if (numbers[num] === 6) {
      classNameArr.push('turquoise-num');
    } else if (numbers[num] === 7) {
       classNameArr.push('black-num');
     } else if (numbers[num] === 8) {
       classNameArr.push('grey-num');
     }

    if (!solidUserName) {
      classNameArr.pop();
    }
    return classNameArr.join(' ');
  }

  const genEmptyClassNames = (tile) => {
    let classNameArr = ['sweep-square'];
    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    } else if (surprised === 'victory' || surprised === 'dead') {
      classNameArr.push('disabled', 'dark-square')
    } else if (!solidUserName) {
      classNameArr.push('disabled')
    } else if (flippers[tile] === 'flag') {
      classNameArr.push('flag')
    } else if (flippers[tile] === true) {
      classNameArr.push('dark-square')
    }

    return classNameArr.join(' ')
  }

  let horizontalDimension; let verticalDimension; let numberOfMines;
  if (skillLevel === 'beginner') {
    verticalDimension = 9;
    horizontalDimension = 9;
    numberOfMines = 10;
  }
  if (skillLevel === 'intermediate') {
    verticalDimension = 16;
    horizontalDimension = 16;
    numberOfMines = 40;
  }

  if (skillLevel === 'advanced') {
    verticalDimension = 16;
    horizontalDimension = 30;
    numberOfMines = 99;
  }


  const [flippers, setFlippers] = useState(Array.from({ length: horizontalDimension * verticalDimension }, () => false));
  const [mines, setMines] = useState(generateMines(numberOfMines, verticalDimension, horizontalDimension));
  const [numbers, setNumbers] = useState(generateNumbers(mines, verticalDimension, horizontalDimension));

  // This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.
  useEffect(() => {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      setFlippers(Array.from({ length: horizontalDimension * verticalDimension }, () => false));
      // Generate Mines
      setMines(generateMines(numberOfMines, verticalDimension, horizontalDimension));
    }
  }, [timerOn, skillLevel])

  // If Skill Level is changed, reset the board.
  useEffect(() => {
    resetCallback();
  }, [skillLevel])

  //When Mines are reset, generate numbers around those mines
  useEffect(() => {
    setNumbers(generateNumbers(mines, verticalDimension, horizontalDimension));
  }, [mines])

  useEffect(() => {
    if (flippers[0] !== 'dead') {
      // Only store score when all flippers have been flipped (ends recursive loop)
      if (flippers.every((flipper) => (flipper === true || flipper === 'flag' || mines[flipper]))) {
        // Post Result
        timerOnCallback('victory');
        // This Gets the posted result
        surprisedCallback('victory');

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

  const handleClick = (tile, indicator) => {
    event.preventDefault();

    if (indicator === 'dead') {
      // Reveal all Flippers
      setFlippers((prevFlippers) => {
        prevFlippers = prevFlippers.map((flipper, index) => {
          // if (mines.includes(index)) {
          // return true;
          // } else {
          // return flipper;
          // }
          if (index === 0) {
            return 'dead'
          } else {
            return true;
          }
        })
        return [...prevFlippers]
      })

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
      if (!numbers[tile] && !mines.includes(tile)) {

        const tileRecurse = (tile) => {
          setFlippers((prevFlippers) => {
            prevFlippers.splice(tile, 1, true);

            const evalU = tile => (tile - horizontalDimension);
            const evalR = tile => (tile + 1);
            const evalD = tile => (tile + horizontalDimension);
            const evalL = tile => (tile - 1);

            const testTile = (tile, test) => {
              return (
                !numbers[test(tile)]
                && !mines.includes(test(tile))
                && prevFlippers[test(tile)] === false
                && test(tile) >= 0
                && test(tile) <= (verticalDimension * horizontalDimension)
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
              && (evalR(tile) % horizontalDimension !== 0
                || (evalR(tile) % horizontalDimension === 0 && tile % horizontalDimension === 0))
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
              && ((evalL(tile + 1)) % horizontalDimension !== 0
                || (evalL(tile + 1) % horizontalDimension === 0 && evalL(tile) % horizontalDimension === 0))
            ) {
              tileRecurse(evalL(tile));
            }

            return [...prevFlippers];
          });
        }

        tileRecurse(tile)
      } else {
        setFlippers((prevFlippers) => {
          prevFlippers.splice(tile, 1, true);
          return [...prevFlippers];
        });
      }
    }
  }

  return (
    [...new Array(verticalDimension)].map((row, rowIndex) => {
      return (
        <div key={rowIndex} className={'sweep-row'}>
          {[...new Array(horizontalDimension)].map((sqr, sqrIndex) => {
            const currCanidate = ((rowIndex * horizontalDimension) + sqrIndex);

            // *****
            // Mine Square
            // *****
            if (mines.includes(currCanidate)) {
              return <div

                data-testid={`test-${currCanidate}`}

                onClick={
                  () => {
                    timerOnCallback('bomb');
                    handleClick(currCanidate, 'dead');
                  }
                }

                onMouseDown={
                  () => {
                    surprisedCallback();
                  }
                }

                onMouseUp={
                  (event) => {
                    if (event.button === 0 && !event.ctrlKey) {
                      console.log(event)
                      surprisedCallback('dead');
                    }

                    if (event.button === 2 || event.ctrlKey) {
                      surprisedCallback('reset')
                    }
                  }
                }

                onContextMenu={
                  () => {
                  console.log('xxx')

                    // Set Flags Remaining -1 or +1
                    if (flippers[currCanidate] === false) {
                      flagsRemainingCallback(true);
                    }

                    if (flippers[currCanidate] === 'flag') {
                      flagsRemainingCallback(false);
                    }

                    handleClick(currCanidate);
                  }
                }

                key={sqrIndex}

                className={genMineClassNames(currCanidate)}>{
                  !solidUserName ? genLoginMessage(currCanidate) : flippers[currCanidate] && flippers[currCanidate] !== 'flag' ? '*' : null}</div>
            }
            // *****
            // Number
            // *****

            if (numbers[currCanidate]) {
              return <div

                data-testid={`test-${currCanidate}`}

                onMouseDown={
                  () => {
                    if (!flippers[currCanidate] || flippers[currCanidate] === 'flag') {
                      surprisedCallback()
                    }
                  }
                }

                onMouseUp={
                  () => {
                    if (!flippers[currCanidate] || flippers[currCanidate] === 'flag') {
                      surprisedCallback('reset');
                    }
                  }
                }
                onClick={
                  () => {
                    // If an empty space is revealed under a flag, increment remaining flags
                    if (flippers[currCanidate] === 'flag') {
                      flagsRemainingCallback(false)
                    }
                    // Gameplay As Usual
                    if (timerOn === true) {
                      handleClick(currCanidate)
                    } else {
                      // Start the Timer
                      timerOnCallback();
                      handleClick(currCanidate)
                    }
                  }
                }

                onContextMenu={
                  () => {
                    //If number is already revealed- prevent user from putting a flag on it
                    if (flippers[currCanidate] !== true) {
                      // Set Flags Remaining -1 or +1
                      if (flippers[currCanidate] === false) {
                        flagsRemainingCallback(true);
                      }

                      if (flippers[currCanidate] === 'flag') {
                        flagsRemainingCallback(false);
                      }

                      handleClick(currCanidate)

                    } else {
                      // and prevent the context menu in case they accidentally do right click the number
                      event.preventDefault();
                    }
                  }
                }

                key={sqrIndex}

                className={genNumberClassNames(currCanidate)}
              >
                {!solidUserName ? genLoginMessage(currCanidate) : flippers[currCanidate] && flippers[currCanidate] !== 'flag' ? numbers[currCanidate] : null}
              </div>
            }

            // *****
            // Empty Square
            // *****
            return <div

              data-testid={`test-${currCanidate}`}
              onMouseDown={
                () => {
                  // No Surprise Face if empty tile is already flipped
                  if (!flippers[currCanidate]) {
                    surprisedCallback();
                  }
                }
              }

              onMouseUp={
                () => {
                  //No Need to reset if empty tile is already flipped, but do reset if a flag was placed.
                  if (!flippers[currCanidate] || flippers[currCanidate] === 'flag') {
                    surprisedCallback('reset');
                  }
                }
              }

              onClick=
              {
                () => {
                  // If an empty space is revealed under a flag, increment remaining flags
                  if (flippers[currCanidate] === 'flag') {
                    flagsRemainingCallback(false)
                  }

                  if (timerOn === true) {
                    handleClick(currCanidate);
                  } else {
                    timerOnCallback();
                    handleClick(currCanidate);
                  }
                }
              }
              onContextMenu={
                (event) => {
                  // Prevent flags on revealed empty squares
                  if (flippers[currCanidate] !== true) {
                    // Set Flags Remaining -1 or +1
                    if (flippers[currCanidate] === false) {
                      flagsRemainingCallback(true);
                    }

                    if (flippers[currCanidate] === 'flag') {
                      flagsRemainingCallback(false);
                    }

                    handleClick(currCanidate)
                  } else {
                    // No Context Menu if user accidentally right clicks on empty square
                    event.preventDefault();
                  }
                }
              }
              key={sqrIndex} className={genEmptyClassNames(currCanidate)} >{!solidUserName ? genLoginMessage(currCanidate) : null}</div>
          })}
        </div >
      )
    })
  )
}