import React from "react";
import { useGlobalContext } from "GlobalStore";
import { useInterval } from "CustomHooks";
import { useTimerContext } from "TimerStore";
import { useAdvancedScoreMutation, useBeginnerScoreMutation, useIntermediateScoreMutation } from "TSSrc/generated/graphql";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import TimerIcon from "@mui/icons-material/Timer";


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

  const display =
    hours !== "00"
      ? `${hours}:${minutes}:${seconds}.${centiseconds}`
      : minutes !== "00"
      ? `${minutes}:${seconds}.${centiseconds}`
      : `${seconds}.${centiseconds}`;

  const isWin = timerOn === "VICTORY" || timerOn === "FREEZE WIN";
  const isDead = timerOn === "FREEZE DEAD";

  return (
    <Box sx={{ display: "flex", justifyContent: "center", py: 1.5 }}>
      <Paper
        elevation={4}
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          px: 2.5,
          py: 0.75,
          bgcolor: "#060e26",
          border: (t) =>
            `1px solid ${
              isWin
                ? t.palette.secondary.main
                : isDead
                ? t.palette.error?.main ?? "#c62828"
                : t.palette.primary.main
            }`,
          borderRadius: 2,
          transition: "border-color 0.4s",
        }}
      >
        <TimerIcon
          sx={{
            color: isWin ? "secondary.main" : isDead ? "error.main" : "primary.main",
            fontSize: "1rem",
            transition: "color 0.4s",
          }}
        />
        <Typography
          sx={{
            color: isWin ? "secondary.main" : isDead ? "error.main" : "primary.main",
            fontFamily: '"Roboto Mono", monospace',
            fontSize: "clamp(1.1rem, 3.5vw, 1.6rem)",
            fontWeight: 700,
            letterSpacing: "0.1em",
            fontVariantNumeric: "tabular-nums",
            textShadow: (t) =>
              `0 0 10px ${
                isWin
                  ? t.palette.secondary.main
                  : isDead
                  ? t.palette.error?.main ?? "#c62828"
                  : t.palette.primary.main
              }`,
            transition: "color 0.4s, text-shadow 0.4s",
            minWidth: "6ch",
            textAlign: "center",
          }}
        >
          {display}
        </Typography>
      </Paper>
    </Box>
  );
};
