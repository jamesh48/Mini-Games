import React, { useEffect, useRef } from "react";
import Lane from "./Lane";
import BowlControls, { Phase } from "./BowlControls";
import Strike from "./validationMessageStrike";
import Spare from "./validationMessageSpare";
import Gutter from "./validationMessageGutter";
import Scorecard from "./Scorecard";
import GameOver from "./GameOver";
import { useOscillator } from "./useOscillator";
import { AIM_RANGE, ballPath, knockDownPins } from "./rollPhysics";
import {
  PIN_COUNT,
  currentFrameIndex,
  frameMarks,
  groupFrames,
  isGameOver,
  pinsStanding,
  scoreFrames
} from "./scoring";

type ValidationMessage = "strike" | "spare" | "gutter";

const ROLL_DURATION = 2000;
const AIM_PERIOD = 1800;
const POWER_PERIOD = 1100;
const SWEEP_STEP = 2;
const MESSAGE_DURATION = { strike: 3000, spare: 3000, gutter: 1500 };
const ROLL_MESSAGES: { [mark: string]: ValidationMessage } = { X: "strike", "/": "spare", "-": "gutter" };

const pinReset = () => [
  [false, false, false, false],
  [false, false, false],
  [false, false],
  [false]
];

const countPinsDown = (pinMap: boolean[][]) =>
  pinMap.reduce((total, row) => total + row.filter(Boolean).length, 0);

export default () => {
  const [rolls, setRolls] = React.useState<number[]>([]);
  const [pinMap, setPinMap] = React.useState(pinReset);
  const [phase, setPhase] = React.useState<Phase>("aim");
  const [sweepBarPosition, setSweepBarPosition] = React.useState(0);
  const [rollPath, setRollPath] = React.useState(0);

  // Aim starts in the middle of the lane; power starts empty
  const [aimValue, aimRef] = useOscillator(phase === "aim", AIM_PERIOD, 0.25);
  const [power, powerRef] = useOscillator(phase === "power", POWER_PERIOD);

  const [validationMessage, setValidationMessage] = React.useState<ValidationMessage | null>(null);
  // Bumped on every message so back-to-back strikes replay the toast animation
  const [messageId, setMessageId] = React.useState(0);
  const messageTimer = useRef<number>();
  const pendingMessage = useRef<ValidationMessage | null>(null);
  const pinsClientHeight = useRef<HTMLDivElement>(null);

  const gameOver = isGameOver(rolls);
  const scores = scoreFrames(rolls);
  const sweeping = phase === "sweeping";

  const showMessage = (message: ValidationMessage | null) => {
    pendingMessage.current = null;
    if (!message) return;
    window.clearTimeout(messageTimer.current);
    setValidationMessage(message);
    setMessageId((id) => id + 1);
    messageTimer.current = window.setTimeout(() => setValidationMessage(null), MESSAGE_DURATION[message]);
  };

  useEffect(() => {
    if (!sweeping) return;
    const interval = setInterval(() => {
      setSweepBarPosition((prevPosition) => prevPosition + SWEEP_STEP);
    }, 10);
    return () => clearInterval(interval);
  }, [sweeping]);

  useEffect(() => {
    const pins = pinsClientHeight.current;
    // The sweep bar sits just below the pins and carries them off the top of the lane
    const sweepDistance = (pins?.offsetTop ?? 0) + (pins?.clientHeight ?? 0) + 30;
    if (!sweeping || sweepBarPosition < sweepDistance) return;
    setPhase("aim");
    setSweepBarPosition(0);
    setPinMap(pinReset());
    showMessage(pendingMessage.current);
  }, [sweeping, sweepBarPosition]);

  const handleBowl = (aim: number, throwPower: number) => {
    const path = ballPath(aim, throwPower);
    setRollPath(path);
    setPhase("rolling");
    setTimeout(() => {
      const nextPinMap = knockDownPins(pinMap, path, throwPower);
      const nextRolls = [...rolls, countPinsDown(nextPinMap) - countPinsDown(pinMap)];
      setPinMap(nextPinMap);
      setRolls(nextRolls);

      const frames = groupFrames(nextRolls);
      const marks = frameMarks(frames[frames.length - 1]);
      pendingMessage.current = ROLL_MESSAGES[marks[marks.length - 1]] || null;

      // Clear the lane once the frame is over or the tenth frame earns a fresh rack
      if (isGameOver(nextRolls) || pinsStanding(nextRolls) === PIN_COUNT) {
        setPhase("sweeping");
      } else {
        setPhase("aim");
        showMessage(pendingMessage.current);
      }
    }, ROLL_DURATION);
  };

  const handleNewGame = () => {
    setRolls([]);
    setPinMap(pinReset());
    setPhase("aim");
    window.clearTimeout(messageTimer.current);
    setValidationMessage(null);
  };

  // Pressing locks your aim and starts the power meter; releasing bowls
  const handlePress = () => {
    if (gameOver) {
      if (!sweeping) handleNewGame();
      return;
    }
    if (phase === "aim") setPhase("power");
  };

  const handleRelease = () => {
    if (phase === "power") handleBowl(aimRef.current * 2 - 1, powerRef.current);
  };

  const handlersRef = useRef({ handlePress, handleRelease });
  handlersRef.current = { handlePress, handleRelease };

  useEffect(() => {
    const isBowlKey = (e: KeyboardEvent) => e.code === "Space" || e.key === "Enter";
    const onKeyDown = (e: KeyboardEvent) => {
      if (!isBowlKey(e)) return;
      e.preventDefault();
      if (!e.repeat) handlersRef.current.handlePress();
    };
    const onKeyUp = (e: KeyboardEvent) => {
      if (isBowlKey(e)) handlersRef.current.handleRelease();
    };
    // Listen on the window so letting go anywhere still bowls
    const onPointerUp = () => handlersRef.current.handleRelease();
    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("keyup", onKeyUp);
    window.addEventListener("pointerup", onPointerUp);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("keyup", onKeyUp);
      window.removeEventListener("pointerup", onPointerUp);
    };
  }, []);

  return (
    <div id="bowling-alley">
      <Scorecard rolls={rolls} currentFrame={currentFrameIndex(rolls)} gameOver={gameOver} />
      {/* Toasts float just under the scorecard, over the top of the lane */}
      <div id="toast-anchor">
        {validationMessage ? (
          <div
            className="toast"
            key={messageId}
            style={{ animationDuration: `${MESSAGE_DURATION[validationMessage]}ms` }}
          >
            {validationMessage === "strike" ? <Strike /> : validationMessage === "spare" ? <Spare /> : <Gutter />}
          </div>
        ) : null}
      </div>
      {gameOver && !sweeping ? (
        <GameOver score={scores[scores.length - 1]} onNewGame={handleNewGame} />
      ) : (
        <>
          <Lane
            pinMap={pinMap}
            pinsClientHeight={pinsClientHeight}
            sweeping={sweeping}
            sweepBarPosition={sweepBarPosition}
            ballX={phase === "rolling" ? rollPath : (aimValue * 2 - 1) * AIM_RANGE}
            rolling={phase === "rolling"}
            rollDuration={ROLL_DURATION}
            onPress={handlePress}
          />
          <BowlControls phase={phase} power={power} onPress={handlePress} />
        </>
      )}
    </div>
  );
};
