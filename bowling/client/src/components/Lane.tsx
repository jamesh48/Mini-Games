import React, { useRef } from "react";
import Pins from "./Pins";
import BowlingBall from "./BowlingBall";
import { GUTTER_EDGE, PIN_SPACING_PX, isGutter } from "./rollPhysics";

// Where the top of the ball starts above the bottom of the lane, and how far it
// reaches into the pin deck by the time it arrives at the head pin
const BALL_START_PX = 74;
const PIN_OVERLAP_PX = 68;
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
  const pins = pinsClientHeight.current;
  // Distance the ball travels from the foul line to the front of the pin deck
  const rollTravel =
    (laneRef.current?.clientHeight ?? 0) -
    BALL_START_PX -
    ((pins?.offsetTop ?? 0) + (pins?.clientHeight ?? 0)) +
    PIN_OVERLAP_PX;
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
