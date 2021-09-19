import React, { useState, useEffect, useContext, useCallback } from 'react';
import Square from './Squares/GlobalSquare.js';
import { useInterval } from 'Components/customHooks.js';
import { generateMinesEffect, freezeColorDelayEffect, stopColorIterationEffect, resetGameEffectOnSmileyOrSkill, freezeScrollBoardEffect, revealFlipperEffect, generateNumberEffect, resetOnSkillLevelChangeEffect, resetFlagsRemainingOnSkillChangeOrTimerOn } from './useEffectBoardHooks.js';
import useStoreContext from 'Store/useStoreContext.js';
import handleClick from './boardHandlers.js';
import './boardstyles.scss';


export default () => {
  const [globalState, dispatch] = useStoreContext();
  const { surprised, colorDelay, colors, dimensions, mines, numbers, flippers, scrollBoard, timerOn, definedUserName, timerTime } = globalState;

  // useEffects
  generateMinesEffect(dimensions, dispatch);
  // changeSkillLevelEffect(dimensions.skillLevel, dispatch);
  freezeColorDelayEffect(definedUserName, dispatch);
  stopColorIterationEffect(colorDelay, dispatch);
  freezeScrollBoardEffect(scrollBoard);
  resetOnSkillLevelChangeEffect(dimensions.skillLevel, dispatch);
  resetGameEffectOnSmileyOrSkill(timerOn, dimensions.skillLevel, dimensions, dispatch);
  generateNumberEffect(mines, dimensions, dispatch);
  resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, dimensions.skillLevel, dispatch);
  revealFlipperEffect(mines, flippers, numbers, timerTime, dimensions.skillLevel, definedUserName, dispatch);

  // Callbacks and Utils
  const onHandleClick = useCallback((...args) => handleClick.call([globalState, dispatch], ...args), [surprised]);
  const setScrollBoardCallback = useCallback(() => dispatch({ type: 'TOGGLE SCROLLBOARD' }), []);
  const handleScroll = _ => dispatch({ type: 'MODULATE COLOR DELAY', payload: { newColorDelay: event.deltaY } });
  useInterval(() => dispatch({ type: 'ITERATE' }), colorDelay);


  return (
    <div
      onWheel={colorDelay ? handleScroll : null}
      onMouseEnter={colorDelay ? setScrollBoardCallback : null}
      onMouseLeave={colorDelay ? setScrollBoardCallback : null}
    >
      {[...new Array(dimensions.verticalDimension)].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className={'sweep-row'}>
            {[...new Array(dimensions.horizontalDimension)].map((sqr, sqrIndex) => {
              const currCanidate = ((rowIndex * dimensions.horizontalDimension) + sqrIndex);
              return (
                <Square
                  key={sqrIndex}
                  currCanidate={currCanidate}
                />
              )
            })
            }
          </div >
        )
      })}
    </div>
  );
};