// timerReducers.ts
type TimerTimeFunc = (
  state: number,
  action: { type: string; payload: number }
) => number;


// TimerStore.tsx
type TimerTime = number;

interface TimerIStateTypes {
  timerTime: TimerTime
}

interface TimerStoreInterface {
  children: JSX.Element;
};


export { TimerTimeFunc, TimerIStateTypes, TimerStoreInterface };
