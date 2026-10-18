import React, { useRef } from "react";
import Pins from "./Pins";
import BowlingBall from "./BowlingBall";
import { GUTTER_EDGE, PIN_SPACING_PX, isGutter } from "./rollPhysics";

// Gap between the bottom of the ball and the bottom of the lane (#ball-track's bottom)
const BALL_START_PX = 14;
const GUTTER_CENTER = GUTTER_EDGE + 0.2;

const Lane: React.FC<{
  pinMap: boolean[][];
  pinsClientHeight: React.RefObject<HTMLDivElement>;
  sweeping: boolean;
  sweepBarPosition: number;
  ballX: number;
  rolling: boolean;
  rollDuration: number;
  onPress: () => void;
}> = ({ pinMap, pinsClientHeight, sweeping, sweepBarPosition, ballX, rolling, rollDuration, onPress }) => {
  const laneRef = useRef<HTMLDivElement>(null);
  // The ball rolls the whole length of the lane, through the pin deck and off the far end
  const rollTravel = (laneRef.current?.clientHeight ?? 0) - BALL_START_PX;
  // A gutter ball drops into the middle of the gutter
  const ballOffset = (isGutter(ballX) ? Math.sign(ballX) * GUTTER_CENTER : ballX) * PIN_SPACING_PX;

  return (
    <div id="lane" ref={laneRef} onPointerDown={onPress}>
      <Pins
        pinsClientHeight={pinsClientHeight}
        pinMap={pinMap}
        sweeping={sweeping}
        sweepBarPosition={sweepBarPosition}
      />
      {!sweeping ? (
        <>
          {!rolling ? (
            <div id="aim-guide" style={{ transform: `translateX(${ballOffset}px)` }}></div>
          ) : null}
          <div
            id="ball-track"
            style={{
              transform: `translateX(${ballOffset}px) translateY(${rolling ? -rollTravel : 0}px)`,
              transition: rolling ? `transform ${rollDuration}ms ease-in` : "none"
            }}
          >
            <BowlingBall rolling={rolling} />
          </div>
        </>
      ) : null}
      <div id="foul-line"></div>
    </div>
  );
};

export default Lane;
