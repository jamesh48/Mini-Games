import React from 'react';

export default function (tile, indicator) {
  event.preventDefault();
  const [{ dimensions, numbers, mines, surprised }, dispatch] = this;

  if (indicator === 'dead') {
    // Reveal all Flippers
    dispatch({ type: 'REVEAL DEAD FLIPPERS' });
  } else if (event.type === 'contextmenu') {
    dispatch({ type: 'SET FLAG FLIPPED', payload: { flagFlipped: tile } });
  }

  if (event.type === 'click' && indicator !== 'dead') {
    // Dark Tiles
    if (!numbers[tile] && !mines.includes(tile)) {

      const tileRecurse = (tile, resultArr) => {
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
          tileRecurse(evalU(tile), resultArr)
        }

        // ***********
        //  Going Right
        // ***********

        if (
          testTile(tile, evalR)
          && (evalR(tile) % dimensions.horizontalDimension !== 0
            || (evalR(tile) % dimensions.horizontalDimension === 0 && tile % dimensions.horizontalDimension === 0))
        ) {
          tileRecurse(evalR(tile), resultArr)
        }

        // ***********
        //  Going Down
        // ***********

        if (
          testTile(tile, evalD)
        ) {
          tileRecurse(evalD(tile), resultArr)
        }

        // ***********
        //  Going Left
        // ***********

        if (
          testTile(tile, evalL)
          && ((evalL(tile + 1)) % dimensions.horizontalDimension !== 0
            || (evalL(tile + 1) % dimensions.horizontalDimension === 0 && evalL(tile) % dimensions.horizontalDimension === 0))
        ) {
          tileRecurse(evalL(tile), resultArr);
        };
        return resultArr;
      };

      let recursedTiles = tileRecurse(tile, []);
      dispatch({ type: 'FLIP RECURSED TILES', payload: { recursedTiles: recursedTiles } });
    } else {
      dispatch({ type: 'FLIP NORMAL TILE', payload: { flippedTile: tile } });
    }
  }
}
