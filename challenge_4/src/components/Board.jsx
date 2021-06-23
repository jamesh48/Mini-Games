import React, { useState, useEffect } from 'react';
const verticalDimension = 9;
const horizontalDimension = 9;
const numberOfMines = 10;

const generateMines = () => {
  let mineArr = [];
  while (mineArr.length < numberOfMines) {
    const mineCanidate = Math.floor(Math.random() * (verticalDimension * horizontalDimension));
    if (!mineArr.includes(mineCanidate)) {
      mineArr.push(mineCanidate);
    }
  }
  return mineArr;
}

const generateNumbers = (mines) => {
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



export default () => {
  const [flippers, setFlippers] = useState(Array.from({ length: horizontalDimension * verticalDimension }, () => false));
  const [mines, setMines] = useState(generateMines());
  const [numbers, setNumbers] = useState(generateNumbers(mines));

  const handleClick = (tile) => {
    event.preventDefault();

    if (event.type === 'contextmenu') {
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
        <div key={rowIndex} className='sweep-row'>
          {[...new Array(horizontalDimension)].map((sqr, sqrIndex) => {
            const currCanidate = ((rowIndex * horizontalDimension) + sqrIndex);

            if (mines.includes(currCanidate)) {
              return <div

                onClick={
                  handleClick.bind(event, currCanidate)
                }
                onContextMenu={
                  handleClick.bind(event, currCanidate)
                }

                key={sqrIndex} className={flippers[currCanidate] === 'flag' ? 'flag sweep-square' : flippers[currCanidate] === true ? 'mine sweep-square' : 'sweep-square'}>{flippers[currCanidate] === true ? '*' : null}</div>
            }

            if (numbers[currCanidate]) {
              return <div

                onClick={
                  handleClick.bind(event, currCanidate)
                }

                onContextMenu={
                  handleClick.bind(event, currCanidate)
                }

                key={sqrIndex} className={flippers[currCanidate] === 'flag' ? 'flag sweep-square' : 'number sweep-square'}>
                {flippers[currCanidate] === true ? numbers[currCanidate] : null}
              </div>
            }

            return <div
              onClick={
                handleClick.bind(event, currCanidate, 'empty')
              }

              onContextMenu={
                handleClick.bind(event, currCanidate)
              }
              key={sqrIndex} className={flippers[currCanidate] === 'flag' ? 'flag sweep-square' : flippers[currCanidate] === true ? 'sweep-square dark-square' : 'sweep-square'}></div>
          })}
        </div>
      )
    })
  )
}

// export default () => {



  // const flipperCallback = (tile) => {

  // }

  // useEffect(() => {
  //   setBoard(flippers, flipperCallback);
  // }, flippers)




  // const [board, setBoard] = useState(generateBoard());

  // useEffect(() => {
  //   console.log(flippers);
  // }, flippers);


  // return generateBoard();
  // return generateBoard(flippers, flipperCallback);
// }