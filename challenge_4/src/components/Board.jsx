import React, { useState, useEffect } from 'react';

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

  mines.forEach((mine) => {
    // Number is Top Left Diagonal
    let tLD = horizontalDimension + 1;
    if (board.includes(mine - tLD) && (((mine - tLD) + 1) % horizontalDimension !== 0)) {
      if (numBoard[mine - tLD]) {
        numBoard[mine - tLD] = numBoard[mine - tLD] + 1;
      } else {
        numBoard[mine - tLD] = 1;
      }
    }

    // Number is Above
    const tD = horizontalDimension;
    if (board.includes(mine - tD)) {
      if (numBoard[mine - tD]) {
        numBoard[mine - tD] = numBoard[mine - tD] + 1;
      } else {
        numBoard[mine - tD] = 1;
      }
    }

    //Number is Top Right Diagonal
    const tRD = horizontalDimension - 1;
    if (board.includes(mine - tRD) && ((mine - tRD) % horizontalDimension !== 0)) {
      if (numBoard[mine - tRD]) {
        numBoard[mine - tRD] = numBoard[mine - tRD] + 1;
      } else {
        numBoard[mine - tRD] = 1;
      }
    }

    // Number to the right
    if (board.includes(mine + 1) && ((mine + 1) % horizontalDimension !== 0)) {
      if (numBoard[mine + 1]) {
        numBoard[mine + 1] = numBoard[mine + 1] + 1;
      } else {
        numBoard[mine + 1] = 1;
      }
    }

    // Number is Bottom Right Diagonal
    const bRD = horizontalDimension + 1;
    if (board.includes(mine + bRD) && ((mine + bRD) % horizontalDimension !== 0)) {
      if (numBoard[mine + bRD]) {
        numBoard[mine + bRD] = numBoard[mine + bRD] + 1;
      } else {
        numBoard[mine + bRD] = 1;
      }
    }

    // Number is Below
    const bD = horizontalDimension;
    if (board.includes(mine + bD)) {
      if (numBoard[mine + bD]) {
        numBoard[mine + bD] = numBoard[mine + bD] + 1;
      } else {
        numBoard[mine + bD] = 1;
      }
    }

    //Number is Bottom Left Diagonal
    const bLD = horizontalDimension - 1;
    if (board.includes(mine + bLD) && (((mine + bLD) + 1) % horizontalDimension !== 0)) {
      if (numBoard[mine + bLD]) {
        numBoard[mine + bLD] = numBoard[mine + bLD] + 1;
      } else {
        numBoard[mine + bLD] = 1;
      }
    }

    // Number to the left
    if (board.includes(mine - 1) && (mine % horizontalDimension !== 0)) {
      if (numBoard[mine - 1]) {
        numBoard[mine - 1] = numBoard[mine - 1] + 1;
      } else {
        numBoard[mine - 1] = 1;
      }
    }

  })
  return numBoard;
}



export default ({ skillLevel, timerOn, timerOnCallback }) => {

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

  useEffect(() => {
    console.log(horizontalDimension * verticalDimension, numberOfMines)
    setFlippers(Array.from({ length: horizontalDimension * verticalDimension }, () => false));
    setMines(generateMines(numberOfMines, verticalDimension, horizontalDimension));
  }, [skillLevel])

  useEffect(() => {
    console.log(mines)
    setNumbers(generateNumbers(mines, verticalDimension, horizontalDimension));
  }, [mines])

  const handleClick = (tile, indicator) => {
    event.preventDefault();
    // If there is a victory reveal all the Empty Squares
    if (indicator === 'victory') {
      setFlippers((prevFlippers) => {
        prevFlippers = prevFlippers.map((flipper, index) => {
          if (flipper === 'flag' || mines.includes(index)) {
            return 'flag'
          } else  {
            return true
          }
        });
    //     console.log(prevFlippers)
        return [...prevFlippers];
      })
    }

    else if (indicator === 'dead') {
      console.log('dying')
      setFlippers((prevFlippers) => {
        prevFlippers = prevFlippers.map((flipper, index) => {
          if (mines.includes(index)) {
            return true;
          } else {
            return flipper;
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

    if (event.type === 'click') {
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
            // Mine
            // *****
            if (mines.includes(currCanidate)) {
              return <div

                data-testid={`test-${currCanidate}`}

                onClick={
                  () => {
                    timerOnCallback('bomb'); handleClick(currCanidate, 'dead');
                  }
                }
                onContextMenu={
                  () => {
                    handleClick(currCanidate)
                    // Winning test
                    // All Flippers are Flipped or a flipper has a flag on it->
                    if (flippers.every((flipper) => flipper === true || flipper === 'flag')) {
                      // And the flags are in the correct position->
                      if (mines.every((mine) => flippers[mine] === 'flag')) {
                        timerOnCallback('victory')
                      }
                    }
                  }
                }

                key={sqrIndex} className={flippers[currCanidate] === 'flag' ? 'flag sweep-square' : flippers[currCanidate] === true ? 'mine sweep-square' : 'sweep-square'}>{flippers[currCanidate] === true ? '*' : null}</div>
            }
            // *****
            // Number
            // *****

            if (numbers[currCanidate]) {
              return <div

                data-testid={`test-${currCanidate}`}

                onClick={
                  () => {
                    // Gameplay As Usual
                    if (timerOn === true) {
                      handleClick(currCanidate)
                    } else {
                      // Start the Timer
                      timerOnCallback();
                      handleClick(currCanidate)
                    }
                    // Trigger Victory only if all numbers have been clicked on->
                    if (Object.keys(numbers).every(num => flippers[num] === true)) {
                      timerOnCallback('victory');
                      handleClick(currCanidate, 'victory')
                    }
                  }
                }

                onContextMenu={
                  handleClick.bind(event, currCanidate)
                }

                key={sqrIndex} className={flippers[currCanidate] === 'flag' ? 'flag sweep-square' : 'number sweep-square'}>
                {flippers[currCanidate] === true ? numbers[currCanidate] : null}
              </div>
            }

            // *****
            // Empty Square
            // *****
            return <div

              data-testid={`test-${currCanidate}`}

              onClick=
              {
                () => {
                  if (timerOn === true) {
                    handleClick(currCanidate);
                  } else {
                    timerOnCallback();
                    handleClick(currCanidate);
                  }
                }
              }
              onContextMenu={
                handleClick.bind(event, currCanidate)
              }
              key={sqrIndex} className={flippers[currCanidate] === 'flag' ? 'flag sweep-square' : flippers[currCanidate] === true ? 'sweep-square dark-square' : 'sweep-square'} ></div>
          })}
        </div >
      )
    })
  )
}