import React, { useEffect, useRef } from "react";
import Pins from "./Pins";
import PinEntry from "./PinEntry";
import Strike from "./validationMessageStrike";
import Spare from "./validationMessageSpare";
import BowlingBall from "./BowlingBall";
import { CustomWindow } from "./bowlingTypes";
declare let window: CustomWindow;
export default () => {
  const pinReset = [
    [false, false, false, false],
    [false, false, false],
    [false, false],
    [false]
  ];

  const [pinCount, setPinCount] = React.useState(0);
  const [pinMap, setPinMap] = React.useState(pinReset);
  const [sweepBarPosition, setSweepBarPosition] = React.useState(0);
  const [numberOfBowls, setNumberOfBowls] = React.useState(0);
  const [rolling, setRolling] = React.useState(false);

  const [validationMessage, setValidationMessage] = React.useState<string | null>(null);
  const pinsClientHeight = useRef<HTMLDivElement>(null);
  const pinEntryClientHeight = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pinCount === 10) {
      window.interval = setInterval(() => {
        setSweepBarPosition((prevPosition) => {
          return prevPosition + 1;
        });
      }, 20);
    }
  }, [pinCount]);
  // { currentTarget: [{ value: pinEntry }] }: { currentTarget: [{ value: string }] },

  const handleBowl = (
    event: React.FormEvent<HTMLFormElement>,
    resolve: (value: unknown) => void
  ) => {
    event.preventDefault();
    const pinEntry = event.target[0].value;
    setRolling(true);
    setTimeout(() => {
      setPinMap((existingPinMap) => {
        const existingBowledPins = existingPinMap
          .join(",")
          .split(",")
          .filter((x) => x === "true").length;
        const updatedBowledPins = pinCount + Number(pinEntry);
        let count = updatedBowledPins - existingBowledPins;
        while (count) {
          const searchRow = Math.floor(Math.random() * 4);
          const searchColumn = Math.floor(Math.random() * (3 - searchRow + 1));

          if (!existingPinMap[searchRow][searchColumn]) {
            existingPinMap[searchRow][searchColumn] = true;
            count--;
          }
        }
        return existingPinMap;
      });
      setNumberOfBowls((current) => {
        return Number(current) + 1;
      });
      setPinCount((current) => {
        return Number(current) + Number(pinEntry);
      });
      setRolling(false);
      resolve("");
    }, 3500);
  };

  if (
    sweepBarPosition ===
    // @ts-ignore
    pinEntryClientHeight.current?.clientHeight +
      // @ts-ignore
      pinsClientHeight.current?.clientHeight +
      10
  ) {
    clearInterval(window.interval);
    if (numberOfBowls === 1) {
      setValidationMessage("strike");
    }

    if (numberOfBowls > 1) {
      setValidationMessage("spare");
    }
    setNumberOfBowls(0);
    setSweepBarPosition(0);
    setPinCount(0);
    setPinMap(pinReset);
    setTimeout(() => {
      setValidationMessage(null);
    }, 3000);
  }

  return (
    <div id="bowling-alley">
      {validationMessage === "strike" ? (
        <Strike />
      ) : validationMessage === "spare" ? (
        <Spare />
      ) : (
        <div>
          <Pins
            pinsClientHeight={pinsClientHeight}
            pinMap={pinMap}
            sweepBarPosition={sweepBarPosition}
          />
          {sweepBarPosition === 0 ? <BowlingBall rolling={rolling} /> : null}
          <PinEntry
            pinCount={pinCount}
            pinEntryClientHeight={pinEntryClientHeight}
            sweepBarPosition={sweepBarPosition}
            pinMap={pinMap}
            handleBowl={handleBowl}
          />
        </div>
      )}
    </div>
  );
};
