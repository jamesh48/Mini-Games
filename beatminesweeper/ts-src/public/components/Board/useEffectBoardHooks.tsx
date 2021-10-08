import React from "react";

import {
  ResetGameEffectOnSmileyOrSkillFunc,
  FreezeColorDelayEffectFunc,
  StopColorIterationEffectFunc,
  GenerateMinesEffectFunc,
  FreezeScrollBoardEffectFunc,
  RevealFlipperEffectFunc,
  GenerateNumberEffectFunc,
  ResetOnSkillLevelChangeEffectFunc,
  ResetFlagsRemainingOnSkillChangeOrTimerOnFunc,
} from "../../../minesweeper-types";

const generateMinesEffect: GenerateMinesEffectFunc = (
  dimensions,
  boardDispatch
) => {
  React.useEffect(() => {
    boardDispatch({ type: "GENERATE MINES", payload: dimensions });
  }, []);
};

const stopColorIterationEffect: StopColorIterationEffectFunc = (
  colorDelay,
  boardDispatch
) => {
  React.useEffect(() => {
    if (colorDelay === null) {
      boardDispatch({ type: "STOP COLOR ITERATION" });
    } else {
      boardDispatch({type: "START COLOR ITERATION"});
    }
  }, [colorDelay]);
};

const freezeColorDelayEffect: FreezeColorDelayEffectFunc = (
  definedUserName,
  boardDispatch
) => {
  React.useEffect(() => {
    if (definedUserName) {
      boardDispatch({ type: "UNSET COLOR DELAY" });
    } else {
      boardDispatch({type: "SET COLOR DELAY"});
    }
  }, [definedUserName]);
};

// This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.
const resetGameEffectOnSmileyOrSkill: ResetGameEffectOnSmileyOrSkillFunc = (
  timerOn,
  dimensions,
  boardDispatch
) => {
  React.useEffect(() => {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      boardDispatch({
        type: "RESET FLIPPERS",
        payload: Array.from(
          {
            length:
              dimensions.horizontalDimension * dimensions.verticalDimension,
          },
          () => false
        ),
      });
      // Generate Mines
      boardDispatch({ type: "GENERATE MINES", payload: dimensions });
    }
  }, [timerOn, dimensions]);
};

const freezeScrollBoardEffect: FreezeScrollBoardEffectFunc = (scrollBoard) => {
  type PreventDefaultFunc = (this: Document, ev: WheelEvent) => boolean;

  const preventDefault: PreventDefaultFunc = (ev) => {
    ev = ev || window.event;
    if (ev.preventDefault) ev.preventDefault();
    // e.returnValue = false
    return false;
  };

  React.useEffect(() => {
    if (scrollBoard)
      document.addEventListener("wheel", preventDefault, { passive: false });
    return () => document.removeEventListener("wheel", preventDefault, false);
  }, [scrollBoard]);
};

const revealFlipperEffect: RevealFlipperEffectFunc = (args) => {
  const { mineArr, flippers, numbers, globalDispatch, boardDispatch } = args;

  React.useEffect(() => {
    if (mineArr.length && flippers.length && flippers[0] !== "dead") {
      // Only store score when all flippers have been flipped (ends recursive loop)
      if (
        flippers.every((flipper) => {
          if (typeof flipper === "number") {
            return mineArr[flipper];
          } else {
            return flipper === true || flipper === "flag";
          }
        })
      ) {
        // Stop the clock and indicate a win
        globalDispatch({ type: "FREEZE TIMER STATE VICTORY" });

        // If a victory is detected by all numbers being revealed, flip all the empty squares
      } else if (
        Object.keys(numbers).length &&
        Object.keys(numbers).every((num) => flippers[num] === true)
      ) {
        boardDispatch({ type: "REVEAL FLIPPERS", payload: { mineArr } });
      }
    }
  }, [flippers]);
};

const generateNumberEffect: GenerateNumberEffectFunc = (
  mineArr,
  { verticalDimension, horizontalDimension },
  boardDispatch
) => {
  //When Mines are reset, generate numbers around those mines
  React.useEffect(() => {
    boardDispatch({
      type: "GENERATE NUMBERS",
      payload: { mineArr, verticalDimension, horizontalDimension },
    });
  }, [mineArr]);
};

const resetOnSkillLevelChangeEffect: ResetOnSkillLevelChangeEffectFunc = (
  skillLevel,
  globalDispatch
) => {
  // If Skill Level is changed, reset the board.
  React.useEffect(() => {
    globalDispatch({ type: "SWITCH TIMER OFF" });
  }, [skillLevel]);
};

const resetFlagsRemainingOnSkillChangeOrTimerOn: ResetFlagsRemainingOnSkillChangeOrTimerOnFunc =
  (timerOn, skillLevel, boardDispatch) => {
    // This resets the flags whenever the skillLevel is changed or game is reset

    React.useEffect(() => {
      if (timerOn === false) {
        boardDispatch({
          type: "SET FLAGS REMAINING",
          payload:
            skillLevel === "beginner"
              ? 10
              : skillLevel === "intermediate"
              ? 40
              : 99,
        });
      }
    }, [skillLevel, timerOn]);
  };

export default {
  generateMinesEffect,
  stopColorIterationEffect,
  freezeColorDelayEffect,
  resetGameEffectOnSmileyOrSkill,
  freezeScrollBoardEffect,
  revealFlipperEffect,
  generateNumberEffect,
  resetOnSkillLevelChangeEffect,
  resetFlagsRemainingOnSkillChangeOrTimerOn,
};
