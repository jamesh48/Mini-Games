export const PIN_COUNT = 10;
export const MAX_FRAMES = 10;

// Splits a flat list of rolls into frames. The tenth frame can hold up to three rolls.
export const groupFrames = (rolls: number[]): number[][] => {
  const frames: number[][] = [];
  let i = 0;
  while (i < rolls.length) {
    if (frames.length === MAX_FRAMES - 1) {
      frames.push(rolls.slice(i));
      break;
    }
    if (rolls[i] === PIN_COUNT) {
      frames.push([PIN_COUNT]);
      i += 1;
    } else {
      frames.push(rolls.slice(i, i + 2));
      i += 2;
    }
  }
  return frames;
};

export const isFrameComplete = (frame: number[], index: number) => {
  if (index < MAX_FRAMES - 1) {
    return frame[0] === PIN_COUNT || frame.length === 2;
  }
  if (frame.length === 3) return true;
  return frame.length === 2 && frame[0] + frame[1] < PIN_COUNT;
};

export const isGameOver = (rolls: number[]) => {
  const frames = groupFrames(rolls);
  return frames.length === MAX_FRAMES && isFrameComplete(frames[MAX_FRAMES - 1], MAX_FRAMES - 1);
};

export const currentFrameIndex = (rolls: number[]) => {
  const frames = groupFrames(rolls);
  const last = frames.length - 1;
  if (last < 0) return 0;
  return isFrameComplete(frames[last], last) ? Math.min(frames.length, MAX_FRAMES - 1) : last;
};

// Pins left standing for the next roll. The rack resets whenever every pin is down,
// which also covers the extra rolls in the tenth frame.
export const pinsStanding = (rolls: number[]) => {
  const frames = groupFrames(rolls);
  const last = frames.length - 1;
  if (last < 0 || isFrameComplete(frames[last], last)) return PIN_COUNT;
  return frames[last].reduce((standing, pins) => {
    const remaining = standing - pins;
    return remaining === 0 ? PIN_COUNT : remaining;
  }, PIN_COUNT);
};

// Running total after each frame, stopping at the first frame still waiting on bonus rolls.
export const scoreFrames = (rolls: number[]): number[] => {
  const scores: number[] = [];
  let total = 0;
  let i = 0;
  for (let frame = 0; frame < MAX_FRAMES && i < rolls.length; frame++) {
    const [first, second, third] = rolls.slice(i, i + 3);
    if (first === PIN_COUNT) {
      if (third === undefined) break;
      total += PIN_COUNT + second + third;
      i += 1;
    } else if (second === undefined) {
      break;
    } else if (first + second === PIN_COUNT) {
      if (third === undefined) break;
      total += PIN_COUNT + third;
      i += 2;
    } else {
      total += first + second;
      i += 2;
    }
    scores.push(total);
  }
  return scores;
};

// Scorecard symbols for each roll in a frame: X strike, / spare, - gutter.
export const frameMarks = (frame: number[]) => {
  let standing = PIN_COUNT;
  let freshRack = true;
  return frame.map((pins) => {
    standing -= pins;
    const mark = pins === 0 ? "-" : standing === 0 ? (freshRack ? "X" : "/") : String(pins);
    freshRack = standing === 0;
    if (freshRack) standing = PIN_COUNT;
    return mark;
  });
};
