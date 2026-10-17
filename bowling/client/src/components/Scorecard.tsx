import React from "react";
import { MAX_FRAMES, frameMarks, groupFrames, scoreFrames } from "./scoring";

const Scorecard: React.FC<{ rolls: number[]; currentFrame: number; gameOver: boolean }> = ({
  rolls,
  currentFrame,
  gameOver
}) => {
  const frames = groupFrames(rolls);
  const scores = scoreFrames(rolls);

  return (
    <div id="scorecard">
      {Array.from({ length: MAX_FRAMES }, (_, index) => {
        const marks = frameMarks(frames[index] || []);
        const rollSlots = index === MAX_FRAMES - 1 ? 3 : 2;
        // A strike fills the right-hand box, like a real scorecard
        const boxes =
          index < MAX_FRAMES - 1 && marks[0] === "X" ? ["", "X"] : marks;
        return (
          <div
            className={!gameOver && index === currentFrame ? "frame current-frame" : "frame"}
            key={index}
          >
            <div className="frame-number">{index + 1}</div>
            <div className="frame-rolls">
              {Array.from({ length: rollSlots }, (_, rollIndex) => (
                <span className="frame-roll" key={rollIndex}>
                  {boxes[rollIndex] || ""}
                </span>
              ))}
            </div>
            <div className="frame-total">{scores[index] ?? ""}</div>
          </div>
        );
      })}
    </div>
  );
};

export default Scorecard;
