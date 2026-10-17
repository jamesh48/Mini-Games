import React from "react";
import LeaderBoardEntry from "TSComponents/Leaderboard/LeaderboardEntry";
import PageNoUl from "./Pagination/pageNoUl";
import { useGlobalContext } from "GlobalStore";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import {
  FormatTimeFunc,
  GenericScore,
  HandleClickPageFunc,
  HandleScoreViewFunc,
  LeaderboardHandleClickFunc,
  LeaderboardProps,
  MakeTitleFunc,
  Personalized,
} from "./leaderboard-types";
import {
  useGetAdvancedScoresQuery,
  useGetBeginnerScoresQuery,
  useGetIntermediateScoresQuery,
} from "TSSrc/generated/graphql";

const SKILL_LEVELS = ["beginner", "intermediate", "advanced"] as const;

const Leaderboard: React.FC<LeaderboardProps> = React.memo((props) => {
  const [
    {
      dimensions: { skillLevel },
    },
    globalDispatch,
  ] = useGlobalContext();

  const [currentPage, setCurrentPage] = React.useState(0);
  const [pageOffset] = React.useState(10);

  const handleScoreLength = () => {
    if (skillLevel === "beginner") {
      const { data } = useGetBeginnerScoresQuery();
      if (data?.allBeginnerScores.length) return data.allBeginnerScores.length;
    }
    if (skillLevel === "intermediate") {
      const { data } = useGetIntermediateScoresQuery();
      if (data?.allIntermediateScores.length) return data.allIntermediateScores.length;
    }
    if (skillLevel === "advanced") {
      const { data } = useGetAdvancedScoresQuery();
      if (data?.allAdvancedScores.length) return data.allAdvancedScores.length;
    }
    return 10;
  };

  const handleScoreViewHelper = (
    array: GenericScore[],
    currentPage: number,
    pageOffset: number
  ) =>
    array
      .slice(0)
      .sort((a, b) => a.time - b.time)
      .slice(currentPage * pageOffset, currentPage * pageOffset + pageOffset);

  const handleScoreView: HandleScoreViewFunc = (ssrTopTimes) => {
    if (typeof window === "undefined" && ssrTopTimes) {
      return ssrTopTimes.slice(0, pageOffset);
    }
    if (skillLevel === "beginner") {
      const { data } = useGetBeginnerScoresQuery();
      if (data?.allBeginnerScores)
        return handleScoreViewHelper(data.allBeginnerScores, currentPage, pageOffset);
    }
    if (skillLevel === "intermediate") {
      const { data } = useGetIntermediateScoresQuery();
      if (data?.allIntermediateScores)
        return handleScoreViewHelper(data.allIntermediateScores, currentPage, pageOffset);
    }
    if (skillLevel === "advanced") {
      const { data } = useGetAdvancedScoresQuery();
      if (data?.allAdvancedScores)
        return handleScoreViewHelper(data.allAdvancedScores, currentPage, pageOffset);
    }
    return [{ username: "loading", time: 0, updatedAt: "", createdAt: "", id: 1 }];
  };

  const [personalized, setPersonalized] = React.useState<Personalized>(false);

  const formatTime: FormatTimeFunc = (time) => {
    const cs = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const s  = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const m  = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const h  = ("0" + Math.floor(time / 3600000)).slice(-2);
    return m !== "00"
      ? `${m}:${s}.${cs}`
      : h !== "00"
      ? `${h}:${m}:${s}.${cs}`
      : `${s}.${cs}s`;
  };

  const handleClickPersonalized: LeaderboardHandleClickFunc = (e) => {
    const userName = e.currentTarget.innerHTML;
    setPersonalized(userName || false);
  };

  const handleClickPage: HandleClickPageFunc = (e) => {
    setCurrentPage(Number(e.currentTarget.children[0].innerHTML) - 1);
  };

  const makeTitle: MakeTitleFunc = (personalized, skillLevel) =>
    personalized
      ? `${personalized}'s ${skillLevel} Leaderboard`
      : `${skillLevel} Leaderboard`;

  return (
    <Paper
      elevation={8}
      sx={{
        bgcolor: "background.paper",
        border: (t) => `3px inset ${t.palette.primary.main}`,
        width: { xs: "95%", sm: "80%", md: "50%" },
        maxWidth: 700,
        height: "90vh",
        mx: "auto",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: 1,
          py: 1.25,
          px: 2,
        }}
      >
        <EmojiEventsIcon sx={{ color: "primary.main" }} />
        <Typography
          variant="h6"
          sx={{
            color: "primary.main",
            textTransform: "capitalize",
            fontSize: "clamp(0.9rem, 2.5vw, 1.2rem)",
            fontWeight: 700,
            letterSpacing: "0.05em",
          }}
        >
          {makeTitle(personalized, skillLevel)}
        </Typography>
        <EmojiEventsIcon sx={{ color: "primary.main" }} />
      </Box>

      <Divider sx={{ borderColor: "primary.main", opacity: 0.4 }} />

      {/* Scores panel */}
      <Box
        sx={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          bgcolor: "secondary.main",
          overflow: "hidden",
        }}
      >
        <Box sx={{ flex: 1, overflowY: "auto" }}>
          {(handleScoreView(props?.ssrTopTimes) || []).map((entry, index) =>
            entry ? (
              <LeaderBoardEntry
                key={index}
                currentPage={currentPage}
                personalized={personalized}
                index={index}
                entry={entry}
                handleClick={handleClickPersonalized}
                formatTime={formatTime}
              />
            ) : null
          )}
        </Box>

        <PageNoUl
          pageOffset={pageOffset}
          handleClick={handleClickPage}
          currentPage={currentPage}
          topTimesPerPage={pageOffset}
          noOfTopTimes={handleScoreLength()}
        />
      </Box>

      <Divider sx={{ borderColor: "primary.main", opacity: 0.4 }} />

      {/* Footer */}
      <Stack spacing={0.75} sx={{ py: 1, px: 1.5 }}>
        {personalized && (
          <Button
            variant="outlined"
            size="small"
            color="primary"
            onClick={() => setPersonalized(false)}
            sx={{ alignSelf: "center" }}
          >
            ← Back to {skillLevel} Leaderboard
          </Button>
        )}

        <Stack direction="row" sx={{ justifyContent: "center", flexWrap: "wrap", gap: 0.75 }}>
          {SKILL_LEVELS.map((level) => (
            <Button
              key={level}
              variant={skillLevel === level ? "contained" : "outlined"}
              color="primary"
              size="small"
              onClick={() =>
                globalDispatch({ type: `SET ${level.toUpperCase()} DIMENSIONS` as any })
              }
            >
              {level}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Paper>
  );
});

export default Leaderboard;
