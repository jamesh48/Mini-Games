import React from "react";

export type Phase = "aim" | "power" | "rolling" | "sweeping";

const HINTS: { [phase in Phase]: string } = {
  aim: "Hold SPACE (or the mouse) to lock your aim, then let go at the power you want",
  power: "Let go to bowl!",
  rolling: "Rolling...",
  sweeping: "Resetting pins..."
};

const BowlControls: React.FC<{ phase: Phase; power: number; onPress: () => void }> = ({
  phase,
  power,
  onPress
}) => (
  <div id="bowl-controls">
    <div id="power-row">
      <span id="power-label">Power</span>
      <div id="power-meter">
        <div id="power-fill" style={{ width: `${phase === "aim" ? 0 : power * 100}%` }}></div>
      </div>
      <button
        id="bowl-button"
        disabled={phase === "rolling" || phase === "sweeping"}
        // Keyboard presses are handled globally, and the release is caught on the window
        onPointerDown={onPress}
      >
        {phase === "power" ? "Let go!" : "Hold"}
      </button>
    </div>
    <div id="bowl-hint">{HINTS[phase]}</div>
  </div>
);

export default BowlControls;
