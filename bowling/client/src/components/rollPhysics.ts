// Distances are measured in pin spacings (the gap between neighbouring pin centres).
export const PIN_SPACING_PX = 62;
export const AIM_RANGE = 2.45;
export const GUTTER_EDGE = 2.2;

const HIT_RADIUS = 0.45;
const MAX_WOBBLE = 0.6;

type Pin = { row: number; index: number; x: number; depth: number };

// pinMap rows run from the back row (4 pins) to the head pin (1 pin)
const standingPins = (pinMap: boolean[][]) =>
  pinMap.reduce<Pin[]>((total, row, rowIndex) => {
    const depth = pinMap.length - 1 - rowIndex;
    return [
      ...total,
      ...row.reduce<Pin[]>(
        (rowPins, down, index) =>
          down ? rowPins : [...rowPins, { row: rowIndex, index, x: index - depth / 2, depth }],
        []
      )
    ];
  }, []);

// Where the ball actually ends up: weaker throws drift further from where you aimed.
export const ballPath = (aim: number, power: number, random = Math.random) =>
  aim * AIM_RANGE + (random() * 2 - 1) * (1 - power) * MAX_WOBBLE;

export const isGutter = (ballX: number) => Math.abs(ballX) > GUTTER_EDGE;

// Chance a falling pin takes out a neighbour, based on where that neighbour sits.
// Pins fly away from the side the ball hit them on, so a head-on hit spreads its
// energy thin (splits) while a hit in the pocket drives through one side of the rack.
const scatterChance = (from: Pin, to: Pin, ballX: number) => {
  const dx = Math.abs(to.x - from.x);
  const ddepth = to.depth - from.depth;
  const base =
    ddepth === 1 && dx === 0.5 ? 0.95 : ddepth === 0 && dx === 1 ? 0.4 : ddepth === 2 && dx === 0 ? 0.3 : 0;
  if (dx === 0) return base;

  const offset = from.x - ballX;
  if (Math.abs(offset) < 0.1) return base * 0.6;
  return Math.sign(to.x - from.x) === Math.sign(offset) ? base : base * 0.45;
};

// Pins in the ball's path fall, then knock over their neighbours in a chain reaction.
// More power means more energy in that chain.
export const knockDownPins = (
  pinMap: boolean[][],
  ballX: number,
  power: number,
  random = Math.random
) => {
  const nextPinMap = pinMap.map((row) => [...row]);
  if (isGutter(ballX)) return nextPinMap;

  const energy = 0.3 + 0.6 * power;
  let standing = standingPins(pinMap);
  const falling = standing.filter((pin) => Math.abs(pin.x - ballX) < HIT_RADIUS);
  standing = standing.filter((pin) => !falling.includes(pin));

  for (let i = 0; i < falling.length; i++) {
    const pin = falling[i];
    nextPinMap[pin.row][pin.index] = true;
    standing = standing.filter((target) => {
      const knocked = random() < scatterChance(pin, target, ballX) * energy;
      if (knocked) falling.push(target);
      return !knocked;
    });
  }
  return nextPinMap;
};
