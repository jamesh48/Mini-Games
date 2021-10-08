import React, { useState, useEffect } from 'react';

const generateMinesEffect = (dimensions, boardDispatch) => {
  useEffect(() => {
    boardDispatch({ type: 'GENERATE MINES', payload: dimensions });
  }, []);
};

const stopColorIterationEffect = (colorDelay, boardDispatch) => {
  useEffect(() => {
    if (colorDelay === null) {
      boardDispatch({ type: 'STOP COLOR ITERATION' })
    };
  }, [colorDelay]);
};

const freezeColorDelayEffect = (definedUserName, boardDispatch) => {
  useEffect(() => {
    if (definedUserName) boardDispatch({ type: 'UNSET COLOR DELAY' });
  }, [definedUserName]);
};

// This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.
const resetGameEffectOnSmileyOrSkill = (timerOn, skillLevel, dimensions, boardDispatch) => {
  useEffect(() => {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      boardDispatch({ type: 'RESET FLIPPERS', payload: Array.from({ length: dimensions.horizontalDimension * dimensions.verticalDimension }, () => false) })
      // Generate Mines
      boardDispatch({ type: 'GENERATE MINES', payload: dimensions });
    };
  }, [timerOn, dimensions])
};


const freezeScrollBoardEffect = (scrollBoard) => {

  const preventDefault = (e) => {
    e = e || window.event
    if (e.preventDefault) e.preventDefault();
    e.returnValue = false
  };


  useEffect(_ => {
    if (scrollBoard) document.addEventListener('wheel', preventDefault, { passive: false });
    return () => document.removeEventListener('wheel', preventDefault, false);
  }, [scrollBoard]);
};


const revealFlipperEffect = ({ mines, flippers, numbers, globalDispatch, boardDispatch }) => {
  useEffect(() => {
    if (mines.length && flippers.length && flippers[0] !== 'dead') {
      // Only store score when all flippers have been flipped (ends recursive loop)
      if (flippers.every((flipper) => (flipper === true || flipper === 'flag' || mines[flipper]))) {
        // Stop the clock and indicate a win
        globalDispatch({ type: 'FREEZE TIMER STATE VICTORY' });

        // If a victory is detected by all numbers being revealed, flip all the empty squares
      } else if (Object.keys(numbers).every(num => flippers[num] === true)) {
        boardDispatch({ type: 'REVEAL FLIPPERS', payload: { mines } });
      }
    }
  }, [flippers])
};


const generateNumberEffect = (mines, { verticalDimension, horizontalDimension }, boardDispatch) => {
  //When Mines are reset, generate numbers around those mines
  useEffect(() => {
    boardDispatch({ type: 'GENERATE NUMBERS', payload: { mines, verticalDimension, horizontalDimension } });
  }, [mines]);
};


const resetOnSkillLevelChangeEffect = (skillLevel, globalDispatch) => {
  // If Skill Level is changed, reset the board.
  useEffect(() => {
    globalDispatch({ type: 'SWITCH TIMER OFF' });
  }, [skillLevel]);
};


const resetFlagsRemainingOnSkillChangeOrTimerOn = (timerOn, skillLevel, boardDispatch) => {
  // This resets the flags whenever the skillLevel is changed or game is reset

  useEffect(() => {
    if (timerOn === false) {
      boardDispatch({ type: 'SET FLAGS REMAINING', payload: skillLevel === 'beginner' ? 10 : skillLevel === 'intermediate' ? 40 : 99 });
    };
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
  resetOnSkillLevelChangeEffect, resetFlagsRemainingOnSkillChangeOrTimerOn
};


