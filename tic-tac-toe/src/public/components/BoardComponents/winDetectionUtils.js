const checkHorizontal = (id, confirmedBoxes, player) => {
  const secondBox = confirmedBoxes[id + 1].mark;
  const thirdBox = confirmedBoxes[id + 2].mark;

  if (secondBox === player && thirdBox === player) {
    return true;
  }
};

const checkVertical = (id, confirmedBoxes, player) => {
  const secondBox = confirmedBoxes[id + 3].mark;
  const thirdBox = confirmedBoxes[id + 6].mark;
  if (secondBox === player && thirdBox === player) {
    return true;
  }
};

const checkRightDiagonal = (id, confirmedBoxes, player) => {
  const secondBox = confirmedBoxes[id + 4].mark;
  const thirdBox = confirmedBoxes[id + 8].mark;

  if (secondBox === player && thirdBox === player) {
    return true;
  };
};

const checkLeftDiagonal = (id, confirmedBoxes, player) => {
  const secondBox = confirmedBoxes[id + 2].mark;
  const thirdBox = confirmedBoxes[id + 4].mark;

  if (secondBox === player && thirdBox === player) {
    return true;
  };
};

export { checkHorizontal, checkVertical, checkLeftDiagonal, checkRightDiagonal };