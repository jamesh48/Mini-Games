import { useEffect, useRef, useState } from "react";

// Sweeps a value back and forth between 0 and 1 while `running`, and freezes it when stopped.
// The ref always holds the latest value so event handlers can read it without going stale.
export const useOscillator = (running: boolean, periodMs: number, startPhase = 0) => {
  const [value, setValue] = useState(0);
  const valueRef = useRef(0);

  useEffect(() => {
    if (!running) return;
    const start = performance.now();
    // setValue can re-render synchronously and run this effect's cleanup mid-tick, so a
    // flag (not just cancelAnimationFrame) is what guarantees the loop really stops
    let stopped = false;
    // The frame timestamp can be slightly earlier than `start`, so clamp to avoid negative phases
    let frame = requestAnimationFrame(function tick(now) {
      if (stopped) return;
      const t = (Math.max(0, now - start) / periodMs + startPhase) % 1;
      valueRef.current = t < 0.5 ? t * 2 : 2 - t * 2;
      setValue(valueRef.current);
      if (!stopped) frame = requestAnimationFrame(tick);
    });
    return () => {
      stopped = true;
      cancelAnimationFrame(frame);
    };
  }, [running, periodMs, startPhase]);

  return [value, valueRef] as const;
};
