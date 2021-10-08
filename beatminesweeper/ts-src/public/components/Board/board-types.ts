type FlippersFunc = (
  state: (string | boolean)[],
  action: {
    type: string,
    payload: { flagFlipped: number, flippedTile: number, mineArr: number[] } & number[]
  }
) => (string | boolean | number)[];

type ScrollBoardFunc = (state: boolean, action: { type: string }) => void;

type ColorsFunc = (state: (string | undefined)[], action: { type: string }) => (string | undefined)[] | null;


// Actions
type GenerateNumbersFunc = (dimensions: { mineArr: number[], verticalDimension: number, horizontalDimension: number }) => {};
type IterateColorsFunc = (existingColors: (string | undefined)[]) => (string | undefined)[];


export {FlippersFunc, ScrollBoardFunc, ColorsFunc, GenerateNumbersFunc, IterateColorsFunc};