import React from 'react';

export default ({
  // Variables...
  sqrIndex,
  colors,
  surprised,
  currCanidate,
  solidUserName,
  // Boards
  flippers,
  mines,
  numbers,
  // Functions
  generateColors,
  genLoginMessage,
  handleClick,
  surprisedCallback,
  flagsRemainingCallback,
  // Timer
  timerOnCallback,
  timerOn
}) => {

  const genNumberClassNames = (num) => {
    let classNameArr = ['sweep-square'];

    if (colors !== null) {
      classNameArr.push(generateColors(num), 'disabled');
      return classNameArr.join(' ');
    };

    classNameArr.push(
      (surprised === 'victory' || surprised === 'dead' || !solidUserName) ? 'disabled'
        : flippers[num] === 'flag' ? 'flag'
          : 'number'
    );

    // Color Determination
    const currNum = numbers[num];

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

    if (!solidUserName) {
      classNameArr.pop();
    };

    return classNameArr.join(' ');
  };

  const genEmptyClassNames = (tile) => {
    let classNameArr = ['sweep-square'];

    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    };

    classNameArr.push(
      (surprised === 'victory' || surprised === 'dead') ? 'disabled dark-square'
        : !solidUserName ? 'disabled'
          : flippers[tile] === 'flag' ? 'flag'
            : flippers[tile] === true ? 'dark-square'
              : null
    );

    return classNameArr.join(' ');
  };


  const genMineClassNames = (tile) => {
    let classNameArr = ['sweep-square']

    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    };

    classNameArr.push(
      (surprised === 'victory' && flippers[tile] === 'flag') ? 'flag disabled'
        : (surprised === 'victory' && !solidUserName) ? 'disabled'
          : surprised === 'dead' ? 'disabled mine'
            : flippers[tile] === 'flag' ? 'flag'
              : flippers[tile] === true ? 'mine'
                : null
    );

    return classNameArr.join(' ')
  };

  return (
    <div
      key={sqrIndex}
      data-testid={`test-${currCanidate}`}

      onClick={
        () => {
          // If tile is a bomb...
          if (mines.includes(currCanidate)) {
            timerOnCallback('bomb');
            handleClick(currCanidate, 'dead');
          } else {
            // Is a Number or a Empty Square
            // If an empty space is revealed under a flag, increment remaining flags
            if (flippers[currCanidate] === 'flag') {
              flagsRemainingCallback(false)
            };
            if (timerOn === true) {
              handleClick(currCanidate);
            } else {
              timerOnCallback();
              handleClick(currCanidate);
            }
          };
        }
      }
      onMouseDown={
        () => {
          if (!flippers[currCanidate]) surprisedCallback();
        }
      }

      onMouseUp={
        () => {
          // Mine- Death Sequence XD
          if (mines.includes(currCanidate) && event.button === 0 && !event.ctrlKey) {
            return surprisedCallback('dead');
          };
          surprisedCallback('reset');
        }
      }

      onContextMenu={
        () => {
          //If number is already revealed- prevent user from putting a flag on it
          if (flippers[currCanidate] !== true) {
            // Set Flags Remaining -1 or +1
            if (flippers[currCanidate] === false) {
              flagsRemainingCallback(true);
            };

            if (flippers[currCanidate] === 'flag') {
              flagsRemainingCallback(false);
            };

            handleClick(currCanidate)

          } else {
            // and prevent the context menu in case they accidentally do right click the number
            event.preventDefault();
          };
        }
      }

      className={
        mines.includes(currCanidate) ? genMineClassNames(currCanidate)
          : numbers[currCanidate] ? genNumberClassNames(currCanidate)
            : genEmptyClassNames(currCanidate)
      }
    >
      {
        !solidUserName ?
          genLoginMessage(currCanidate)
          : flippers[currCanidate] && flippers[currCanidate] !== 'flag' && numbers[currCanidate] ? numbers[currCanidate]
            : mines.includes(currCanidate) && flippers[currCanidate] && flippers[currCanidate] !== 'flag' ? '*'
              : null
      }
    </div >
  )
};