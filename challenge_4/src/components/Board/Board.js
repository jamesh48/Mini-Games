import React, { useState, useEffect, useContext, useCallback } from 'react';
import Square from './Squares/BoardSquare.js';
import { useInterval } from 'Components/customHooks.js';
import BoardHooks from './useEffectBoardHooks.js';
import { useGlobalContext } from 'GlobalStore';
import { useBoardContext } from 'BoardStore';
import './boardstyles.scss';


export default () => {
  const [globalState, globalDispatch] = useGlobalContext();
  const [{ flippers, mines, numbers, scrollBoard, colorDelay }, boardDispatch] = useBoardContext();

  const { dimensions, dimensions: { skillLevel }, timerOn, definedUserName } = globalState;

  // Board Specific useEffects && actions.
  BoardHooks.freezeColorDelayEffect(definedUserName, boardDispatch);
  BoardHooks.stopColorIterationEffect(colorDelay, boardDispatch);
  BoardHooks.freezeScrollBoardEffect(scrollBoard);
  BoardHooks.generateMinesEffect(dimensions, boardDispatch);
  BoardHooks.generateNumberEffect(mines, dimensions, boardDispatch);
  BoardHooks.resetGameEffectOnSmileyOrSkill(timerOn, skillLevel, dimensions, boardDispatch);
  BoardHooks.resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, boardDispatch);

  const setScrollBoardCallback = useCallback(() => boardDispatch({ type: 'TOGGLE SCROLLBOARD' }), []);

  // Mixed!
  BoardHooks.revealFlipperEffect({ mines, flippers, numbers, globalDispatch, boardDispatch });

  // Global Board useEffects
  BoardHooks.resetOnSkillLevelChangeEffect(skillLevel, globalDispatch);

  const handleScroll = _ => boardDispatch({ type: 'MODULATE COLOR DELAY', payload: { newColorDelay: event.deltaY } });

  useInterval(() => boardDispatch({ type: 'ITERATE COLORS' }), colorDelay);


  return (
    <div
      onWheel={colorDelay ? handleScroll : null}
      onMouseEnter={colorDelay ? setScrollBoardCallback : null}
      onMouseLeave={colorDelay ? setScrollBoardCallback : null}
    >
      {[...new Array(dimensions.verticalDimension)].map((row, rowIndex) => {
        return (
          <div key={rowIndex} className='sweep-row'>
            {[...new Array(dimensions.horizontalDimension)].map((sqr, sqrIndex) => {
              const currTile = ((rowIndex * dimensions.horizontalDimension) + sqrIndex);
              return (
                <Square
                  key={sqrIndex}
                  currTile={currTile}
                />
              )
            })
            }
          </div >
        )
      })}
    </div>
  );
}