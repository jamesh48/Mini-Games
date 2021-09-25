import React, { useEffect } from 'react';
import { useBoardContext } from 'BoardStore';
import { useMainContext } from 'MainStore';
import { useEffectOnlyOnUpdate } from 'GlobalUtils';
import { checkHorizontal, checkVertical, checkRightDiagonal, checkLeftDiagonal } from './winDetectionUtils.js';
import './board.scss';

export default () => {
  const [{ currentPlayerMove, confirmedBoxes }, boardDispatch] = useBoardContext();
  const [{ xPlayerName, oPlayerName, hasAlreadyWon }, mainDispatch] = useMainContext();

  useEffectOnlyOnUpdate(() => {
    boardDispatch({ type: 'TOGGLE CURRENT PLAYER MOVE' });
  }, [confirmedBoxes]);

  useEffectOnlyOnUpdate(() => {
    // currentPlayerMove === 'X' ? alert(`${(nameEntry?.xPlayer || 'X')} wins the Game!`) : alert(`${(nameEntry?.oPlayer || 'O')} wins the Game!`);
    // gamePlayMethods.updateScoreBoard(player);
    alert(hasAlreadyWon + ' wins the game!');
  }, [hasAlreadyWon]);

  detect_win: useEffectOnlyOnUpdate(() => {
    confirmedBoxes.forEach((box, boxIndex) => {
      if (box.mark === currentPlayerMove) {
        let horizontalWin, verticalWin, rightDiagonalWin, leftDiagonalWin = false;

        if (boxIndex === 0 || boxIndex === 3 || boxIndex === 6) {
          horizontalWin = checkHorizontal(boxIndex, confirmedBoxes, currentPlayerMove);
        }

        if (boxIndex === 0 || boxIndex === 1 || boxIndex === 2) {
          verticalWin = checkVertical(boxIndex, confirmedBoxes, currentPlayerMove);
        };

        if (boxIndex === 0) {
          rightDiagonalWin = checkRightDiagonal(boxIndex, confirmedBoxes, currentPlayerMove);
        };

        if (boxIndex === 2) {
          leftDiagonalWin = checkLeftDiagonal(boxIndex, confirmedBoxes, currentPlayerMove);
        };

        if (horizontalWin || verticalWin || rightDiagonalWin || leftDiagonalWin) {
          mainDispatch({ type: 'TOGGLE HAS ALREADY WON TRUE', payload: currentPlayerMove === 'X' ? (xPlayerName || 'X') : (oPlayerName || 'O') })
          // gamePlayMethods.annouceWinner(player);
        }

      }
    })
  }, [confirmedBoxes])

  const handleClick = () => {
    event.preventDefault();
    let { target: { id } } = event;
    let testId = id.split('-')[1];


    if (hasAlreadyWon || confirmedBoxes[testId].confirmed) return;
    boardDispatch({ type: 'CONFIRM NEW BOX', payload: { id: testId, mark: currentPlayerMove } })
    // var player = gamePlayMethods.countMoves(e);
    // setTimeout(() => { gamePlayMethods.detectWin(player) }, 1);
  };

  return (
    <div id='board'>
      {
        ['a', 'b', 'c'].map((row, rowIndex) => (
          <div key={rowIndex} className='board-row'>
            {
              ['d', 'e', 'f'].map((column, columnIndex) => {
                const currBox = ((rowIndex * 2) + (columnIndex + rowIndex));
                return <span onClick={handleClick} key={columnIndex} className='boxes' id={`box-${currBox}`}>
                  {confirmedBoxes[currBox].confirmed ? confirmedBoxes[currBox].mark : null}
                </span>
              })
            }
          </div>
        )
        )
      }

    </div>
  )
}
