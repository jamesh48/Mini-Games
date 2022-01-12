import React, { useState } from "react";
const PinEntry: React.FC<{
  pinCount: number;
  sweepBarPosition: number;
  pinMap: boolean[][];
  pinEntryClientHeight: React.RefObject<HTMLDivElement>;
  handleBowl: (e: React.FormEvent<HTMLFormElement>, resolve: (value: unknown) => void) => void;
}> = ({ pinCount, sweepBarPosition, handleBowl, pinEntryClientHeight }) => {
  const [pinEntry, setPinEntry] = useState(0);
  // Validation Tests
  const prospectivePins = Number(pinEntry) + Number(pinCount);
  const rightAmountOfPins = pinEntry > 0 && prospectivePins <= 10;
  const tooManyPins = prospectivePins > 10;

  return (
    <div
      style={{
        bottom: `${sweepBarPosition !== 0 ? sweepBarPosition + "px" : "-47.5vh"}`
      }}
      ref={pinEntryClientHeight}
      id={sweepBarPosition !== 0 ? "sweep-bar" : "pin-entry"}
    >
      {sweepBarPosition === 0 ? (
        <form
          onSubmit={async (e) => {
            await new Promise((resolve, _reject) => {
              handleBowl(e, resolve);
            });
            setPinEntry(10 - (pinCount + Number(pinEntry)));
          }}
        >
          <input
            id={
              rightAmountOfPins
                ? "pin-input-active"
                : tooManyPins
                ? "pin-input-invalid"
                : "pin-input-inactive"
            }
            type="text"
            value={pinEntry || ""}
            onChange={(e) => setPinEntry(Number(e.currentTarget.value))}
          ></input>
          <button
            hidden
            style={{ display: "none" }}
            type="submit"
          >
            Bowl!
          </button>
        </form>
      ) : null}
    </div>
  );
};

export default PinEntry;
