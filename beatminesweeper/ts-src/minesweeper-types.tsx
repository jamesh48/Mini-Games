import React from "react";
// Custom Hooks
type UseIntervalFunc = (callback: () => void, delay: (number | null)) => void;

// For Reducers...
type CombineReducersFunc = (
  slices: any
) => (state: any, action: any) => React.ReducerStateWithoutAction<any>;

// Variable Types:
type FlagsRemaining = number;
type ColorDelay = number;
type TimerOn = string | boolean;
type DefinedUserName = null | string;
type SkillLevel = string;
type Dimensions = {
  skillLevel: SkillLevel;
  verticalDimension: number;
  horizontalDimension: number;
  numberOfMines: number;
};
type ScrollBoard = boolean;
type Colors = string[];
type Surprised = boolean | string;

// Local Variable types
type CurrTile = number;
type ClassNameArr = (string | null)[];
type Indicator = string | null;
// Arrays
type MineArr = number[];
type Flippers = (string | boolean | number)[];
type Numbers = {};

// Dispatch Functions
type BoardDispatch = React.Dispatch<any>;
type GlobalDispatch = React.Dispatch<any>;

// Board Store Type-Funcs
type ColorDelayFunc = (
  state: number,
  action: { type: string; payload: { newColorDelay: ColorDelay } }
) => null | number;

// Board useEFfect Type-Funcs:
type GenerateMinesEffectFunc = (
  dimensions: Dimensions,
  boardDispatch: BoardDispatch
) => void;
type StopColorIterationEffectFunc = (
  colorDelay: ColorDelay,
  boardDispatch: BoardDispatch
) => void;
type ResetGameEffectOnSmileyOrSkillFunc = (
  timerOn: TimerOn,
  dimensions: Dimensions,
  boardDispatch: BoardDispatch
) => void;
type FreezeColorDelayEffectFunc = (
  definedUserName: DefinedUserName,
  boardDispatch: BoardDispatch
) => void;
type FreezeScrollBoardEffectFunc = (scrollBoard: ScrollBoard) => void;
type RevealFlipperEffectFunc = (args: {
  mineArr: MineArr;
  flippers: Flippers;
  numbers: Numbers;
  globalDispatch: GlobalDispatch;
  boardDispatch: BoardDispatch;
}) => void;
type GenerateNumberEffectFunc = (
  mineArr: MineArr,
  dimensions: Dimensions,
  boardDispatch: BoardDispatch
) => void;
type ResetOnSkillLevelChangeEffectFunc = (
  skillLevel: SkillLevel,
  globalDispatch: GlobalDispatch
) => void;
type ResetFlagsRemainingOnSkillChangeOrTimerOnFunc = (
  timerOn: TimerOn,
  skillLevel: SkillLevel,
  boardDispatch: BoardDispatch
) => void;

// Board className generator function types
type GenNumberClassNamesFunc = (args: {
  timerOn: TimerOn;
  definedUserName: DefinedUserName;
  skillLevel: SkillLevel;
  currTile: CurrTile;
  numbers: Numbers;
  flippers: Flippers;
  colors: Colors;
}) => string;

type GenEmptyClassNamesFunc = (args: {
  // Global
  skillLevel: SkillLevel;
  definedUserName: DefinedUserName;
  timerOn: TimerOn;
  // Board & passed in
  flippers: Flippers;
  colors: Colors;
  currTile: CurrTile;
}) => string;

type GenMineClassNamesFunc = (args: {
  timerOn: TimerOn;
  skillLevel: SkillLevel;
  currTile: CurrTile;
  colors: Colors;
  flippers: Flippers;
}) => string;

type HandleClickFunc = (
  event: React.MouseEvent,
  args: {
    currTile: CurrTile;
    indicator?: Indicator;
    dimensions: { horizontalDimension: number; verticalDimension: number };
    mineArr: MineArr;
    numbers: Numbers;
    boardDispatch: BoardDispatch;
  }
) => void;

// Generate Login Message Function
type GenerateLoginMessageFunc = (args: {
  currTile: CurrTile;
  skillLevel: SkillLevel;
}) => string | null;
type GenerateColorsFunc = (args: {
  currTile: number;
  colors: string[];
  skillLevel: string;
}) => string | null;

export { CombineReducersFunc };
export { UseIntervalFunc };
export {
  CurrTile,
  Colors,
  MineArr,
  FlagsRemaining,
  Surprised,
  Numbers,
  Flippers,
  ColorDelay,
  ScrollBoard,
};
export { ColorDelayFunc };
export { ClassNameArr };
export {
  GenMineClassNamesFunc,
  GenNumberClassNamesFunc,
  GenEmptyClassNamesFunc,
  GenerateLoginMessageFunc,
  HandleClickFunc,
  GenerateColorsFunc,
};

export {
  GenerateMinesEffectFunc,
  StopColorIterationEffectFunc,
  ResetGameEffectOnSmileyOrSkillFunc,
  FreezeColorDelayEffectFunc,
  FreezeScrollBoardEffectFunc,
  RevealFlipperEffectFunc,
  GenerateNumberEffectFunc,
  ResetOnSkillLevelChangeEffectFunc,
  ResetFlagsRemainingOnSkillChangeOrTimerOnFunc,
};

export { Dimensions, TimerOn, DefinedUserName, SkillLevel };
