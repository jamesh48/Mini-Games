import React from "react";
import { useGlobalContext } from "GlobalStore";
import { useInterval } from "CustomHooks";
import { useTimerContext } from "TimerStore";
import { useAdvancedScoreMutation, useBeginnerScoreMutation, useIntermediateScoreMutation } from "TSSrc/generated/graphql";
import "./millisecondstyles.scss";


export default () => {
  const [postBeginnerScore] = useBeginnerScoreMutation();
  const [postIntermediateScore] = useIntermediateScoreMutation();
  const [postAdvancedScore] = useAdvancedScoreMutation();
  const [
    {
      isProxied,
      dimensions: { skillLevel },
      definedUserName,
      timerOn,
    }, globalDispatch
  ] = useGlobalContext();

  const [{ timerTime }, timerDispatch] = useTimerContext();

  useInterval(
    () => {
      timerDispatch({ type: "ITERATE TIMER TIME", payload: 10 });
    },
    timerOn === true
      ? 10
      : timerOn === "FREEZE WIN" || timerOn === "FREEZE DEAD" || timerOn === "VICTORY"
      ? -1
      : null
  );

  // If Timer is changed to true, start the timer.
  React.useEffect(() => {
    if (timerOn === false) {
      timerDispatch({ type: "CLEAR TIMER TIME" });
    }

    if (timerOn === "VICTORY" && typeof definedUserName === "string" && !isProxied) {
      if (skillLevel === 'beginner') {
        postBeginnerScore({
          variables: { username: definedUserName, time: timerTime },
        }).then(() => {
          globalDispatch({type: 'FREEZE TIMER STATE WIN'})
          // globalDispatch({ type: 'SET TOP TIMES', payload: { topTimes: newTopTimes } });
        });
        return;
      };

      if (skillLevel === 'intermediate') {
        postIntermediateScore({
          variables: {username: definedUserName, time: timerTime}
        }).then(() => {
          globalDispatch({type: 'FREEZE TIMER STATE WIN'})
        })
        return;
      }

      if (skillLevel === 'advanced') {
        postAdvancedScore({
          variables: {username: definedUserName, time: timerTime}
        }).then(() => {
          globalDispatch({type: 'FREEZE TIMER STATE WIN'})
        })
        return;
      }
    }
    if (isProxied && timerOn === 'VICTORY') {
      setTimeout(() => {
        alert(`
        Congratulations!

        You cleared the board in ${("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2)} seconds!

        check out the full game with login and high scores at...
        https://wwww.beatminesweeper.app

        -James
        `

        );
      }, 500);
    }
  }, [timerOn]);

  const centiseconds = ("0" + (Math.floor(timerTime / 10) % 100)).slice(-2);
  const seconds = ("0" + (Math.floor(timerTime / 1000) % 60)).slice(-2);
  const minutes = ("0" + (Math.floor(timerTime / 60000) % 60)).slice(-2);
  const hours = ("0" + Math.floor(timerTime / 3600000)).slice(-2);

  return (
    <div className='milli-second-timer-container'>
      <h4 id="milli-second-timer" className={skillLevel}>
        {hours !== "00"
          ? `${hours} : ${minutes} : ${seconds} : ${centiseconds}`
          : minutes !== "00"
          ? `${minutes} : ${seconds} : ${centiseconds}`
          : `${seconds} : ${centiseconds}`}
      </h4>
    </div>
  );
};
