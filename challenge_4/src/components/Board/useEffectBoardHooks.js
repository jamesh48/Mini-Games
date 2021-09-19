import React, { useState, useEffect } from 'react';
import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

const generateMinesEffect = (dimensions, dispatch) => {
  useEffect(() => {
    dispatch({ type: 'GENERATE MINES', payload: dimensions });
  }, []);
};


// const changeSkillLevelEffect = (skillLevel, dispatch) => {
//   useEffect(() => {
//     if (skillLevel === 'beginner') {
//       return dispatch({ type: 'SET BEGINNER DIMENSIONS' })
//     };

//     if (skillLevel === 'intermediate') {
//       return dispatch({ type: 'SET INTERMEDIATE DIMENSIONS' });
//     };

//     if (skillLevel === 'advanced') {
//       return dispatch({ type: 'SET ADVANCED DIMENSIONS' });
//     };
//   }, [skillLevel]);
// };

const stopColorIterationEffect = (colorDelay, dispatch) => {
  useEffect(() => {
    if (colorDelay === null) {
      dispatch({ type: 'STOP ITERATION' })
    }
  }, [colorDelay]);
};

const freezeColorDelayEffect = (definedUserName, dispatch) => {
  useEffect(() => {
    if (definedUserName) {
      dispatch({ type: 'UNSET COLOR DELAY' })
    }
  }, [definedUserName]);
};

// This condition resets the board when the smiley face is punched or the skillLevel is changed because timerOn is set to false. It also resets the board if the user changes the skillLevel before playing, which is most likely.
const resetGameEffectOnSmileyOrSkill = (timerOn, skillLevel, dimensions, dispatch) => {
  useEffect(() => {
    if (timerOn === false) {
      // Set all Tiles to False (hidden)
      dispatch({ type: 'RESET FLIPPERS', payload: Array.from({ length: dimensions.horizontalDimension * dimensions.verticalDimension }, () => false) })
      // Generate Mines
      dispatch({ type: 'GENERATE MINES', payload: dimensions });
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


const revealFlipperEffect = (mines, flippers, numbers, timerTime, skillLevel, definedUserName, dispatch) => {

  const postResult = async () => {
    const { data: results } = await axios.post('/minesweeper-topTimes', null, { params: { skillLevel, definedUserName, timerTime: resultTime } });
  };

  useEffect(async () => {
    if (mines.length && flippers.length && flippers[0] !== 'dead') {
      // Only store score when all flippers have been flipped (ends recursive loop)
      if (flippers.every((flipper) => (flipper === true || flipper === 'flag' || mines[flipper]))) {
        // Stop The Timer Immediately
        dispatch({ type: 'FREEZE TIMER DELAY' });
        // Post Result
        await postResult()
        // This Gets the posted result
        dispatch({ type: 'VICTORY SMILES' });
        // If a victory is detected by all numbers being revealed, flip all the empty squares
      } else if (Object.keys(numbers).every(num => flippers[num] === true)) {
        dispatch({ type: 'REVEAL FLIPPERS', payload: { mines } });
      }
    }
  }, [flippers])
};


const generateNumberEffect = (mines, { verticalDimension, horizontalDimension }, dispatch) => {
  //When Mines are reset, generate numbers around those mines
  useEffect(() => {
    dispatch({ type: 'GENERATE NUMBERS', payload: { mines, verticalDimension, horizontalDimension } });
  }, [mines]);
};


const resetOnSkillLevelChangeEffect = (skillLevel, dispatch) => {
  // If Skill Level is changed, reset the board.
  useEffect(() => {
    dispatch({ type: 'SWITCH TIMER OFF' });
  }, [skillLevel]);
};


const resetFlagsRemainingOnSkillChangeOrTimerOn = (timerOn, skillLevel, dispatch) => {
  // This resets the flags whenever the skillLevel is changed or game is reset
  useEffect(() => {
    if (timerOn === false) {
      dispatch({ type: 'SET FLAGS REMAINING', payload: skillLevel === 'beginner' ? 10 : skillLevel === 'intermediate' ? 40 : 99 });
    };
  }, [skillLevel, timerOn]);
};


export { generateMinesEffect, stopColorIterationEffect, freezeColorDelayEffect, resetGameEffectOnSmileyOrSkill, freezeScrollBoardEffect, revealFlipperEffect, generateNumberEffect, resetOnSkillLevelChangeEffect, resetFlagsRemainingOnSkillChangeOrTimerOn };