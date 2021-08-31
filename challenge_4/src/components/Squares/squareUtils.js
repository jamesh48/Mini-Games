module.exports = {
  genNumberClassNames: (num, numbers, flippers, colors, generateColors, surprised, definedUserName) => {
    let classNameArr = ['sweep-square'];

    // if (timerTime === 0) {
    if (colors !== null) {
      classNameArr.push(generateColors(num), 'disabled');
      return classNameArr.join(' ');
    };

    classNameArr.push(
      (surprised === 'victory' || surprised === 'dead' || !definedUserName) ? 'disabled'
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

    if (!definedUserName) {
      classNameArr.pop();
    };

    return classNameArr.join(' ');
  },

  genEmptyClassNames: (tile, colors, generateColors, surprised, flippers, definedUserName) => {
    let classNameArr = ['sweep-square'];

    // if (timerTime === 0) {
    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    };

    classNameArr.push(
      (surprised === 'victory' || surprised === 'dead') ? 'disabled dark-square'
        : !definedUserName ? 'disabled'
          : flippers[tile] === 'flag' ? 'flag'
            : flippers[tile] === true ? 'dark-square'
              : null
    );
    return classNameArr.join(' ');
  },

  genMineClassNames: (tile, colors, generateColors, surprised, flippers, definedUserName) => {
    let classNameArr = ['sweep-square']

    // if (timerTime === 0) {
    if (colors !== null) {
      classNameArr.push(generateColors(tile), 'disabled');
      return classNameArr.join(' ');
    };

    classNameArr.push(
      (surprised === 'victory' && flippers[tile] === 'flag') ? 'flag disabled'
        : (surprised === 'victory' && !definedUserName) ? 'disabled'
          : surprised === 'dead' ? 'disabled mine'
            : flippers[tile] === 'flag' ? 'flag'
              : flippers[tile] === true ? 'mine'
                : null
    );

    return classNameArr.join(' ')
  },
}
