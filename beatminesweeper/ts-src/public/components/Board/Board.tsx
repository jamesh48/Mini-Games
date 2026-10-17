import React from 'react';
import { useGlobalContext } from 'GlobalStore';
import { useBoardContext } from 'BoardStore';
import BoardHooks from './useEffectBoardHooks';
import { useInterval } from 'CustomHooks';
import Square from 'TSComponents/Board/Squares/Square';
import Box from '@mui/material/Box';


const Board: React.FC = () => {
  const [{ isProxied, dimensions, definedUserName, timerOn, dimensions: { skillLevel } }, globalDispatch] = useGlobalContext()
  const [{ flippers, mineArr, numbers, scrollBoard, colorDelay }, boardDispatch] = useBoardContext();

  // Board Specific useEffects && actions.
  BoardHooks.freezeColorDelayEffect(definedUserName, boardDispatch);
  BoardHooks.stopColorIterationEffect(colorDelay, boardDispatch);
  BoardHooks.freezeScrollBoardEffect(scrollBoard);
  BoardHooks.generateMinesEffect(dimensions, boardDispatch);
  BoardHooks.generateNumberEffect(mineArr, dimensions, boardDispatch);
  BoardHooks.resetGameEffectOnSmileyOrSkill(timerOn, dimensions, boardDispatch);
  BoardHooks.resetFlagsRemainingOnSkillChangeOrTimerOn(timerOn, skillLevel, boardDispatch);

  // const setScrollBoardCallback = React.useCallback(() => boardDispatch({ type: 'TOGGLE SCROLLBOARD' }), []);

  if (!isProxied) {
    useInterval(() => boardDispatch({ type: 'ITERATE COLORS' }), colorDelay);
  }

  // Mixed!
  BoardHooks.revealFlipperEffect({ mineArr, flippers, numbers, globalDispatch, boardDispatch });

  // Global Board useEffects
  BoardHooks.resetOnSkillLevelChangeEffect(skillLevel, globalDispatch);


  const setScrollBoardCallback = React.useCallback(
    () => boardDispatch({ type: "TOGGLE SCROLLBOARD" }),
    []
  );

  const handleScroll = (e: React.WheelEvent) =>
  boardDispatch({
    type: "MODULATE COLOR DELAY",
    payload: { newColorDelay: e.deltaY },
  });



  return (
    <Box
      id="play-board"
      onWheel={(e) => colorDelay ? handleScroll(e) : null}
      onMouseEnter={() => colorDelay ? setScrollBoardCallback() : null}
      onMouseLeave={() => colorDelay ? setScrollBoardCallback() : null}
      sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
    >
      {[...new Array(dimensions.verticalDimension)].map((_, rowIndex) => {
        return (
          <Box
            key={rowIndex}
            sx={{
              display: 'flex',
              flex: 1,
              borderLeft: '2px solid rgba(255,215,0,0.2)',
              borderRight: '2px solid rgba(255,215,0,0.2)',
            }}
          >
            {[...new Array(dimensions.horizontalDimension)].map((_, sqrIndex) => {
              const currTile: number = ((rowIndex * dimensions.horizontalDimension) + sqrIndex);
              return (
                <Square key={sqrIndex} currTile={currTile} />
              )
            })
            }
          </Box>
        )
      })}
    </Box>
  )
};

export default Board;