import React from "react";
import LeaderBoardEntry from "TSComponents/Leaderboard/LeaderboardEntry";
import PageNoUl from "./Pagination/pageNoUl";
import { useGlobalContext } from "GlobalStore";
import "./leaderboard.scss";
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
      if (data?.allBeginnerScores.length) {
        return data.allBeginnerScores.length;
      }
    }

    if (skillLevel === "intermediate") {
      const { data } = useGetIntermediateScoresQuery();
      if (data?.allIntermediateScores.length) {
        return data.allIntermediateScores.length;
      }
    }

    if (skillLevel === "advanced") {
      const { data } = useGetAdvancedScoresQuery();
      if (data?.allAdvancedScores.length) {
        return data.allAdvancedScores.length;
      }
    }

    return 10;
  };

  const handleScoreViewHelper = (
    array: GenericScore[],
    currentPage: number,
    pageOffset: number
  ) => {
    console.log(currentPage * pageOffset, currentPage * pageOffset + pageOffset);
    // console.log(array.slice(0).sort((a, b) => a.time - b.time));
    return array
      .slice(0)
      .sort((a, b) => a.time - b.time)
      .slice(currentPage * pageOffset, currentPage * pageOffset + pageOffset);
  };

  const handleScoreView: HandleScoreViewFunc = (ssrTopTimes) => {

    if (typeof window === "undefined" && ssrTopTimes) {
      return ssrTopTimes.slice(0, pageOffset);
    }

    if (skillLevel === "beginner") {
      const { data } = useGetBeginnerScoresQuery();
      const topScores = data?.allBeginnerScores;
      if (topScores) {
        let test = handleScoreViewHelper(topScores, currentPage, pageOffset);
        return test;
      }
    }

    if (skillLevel === "intermediate") {
      const { data } = useGetIntermediateScoresQuery();
      const topScores = data?.allIntermediateScores;
      if (topScores) {
        let test = handleScoreViewHelper(topScores, currentPage, pageOffset);
        return test;
      }
    }

    if (skillLevel === "advanced") {
      const { data } = useGetAdvancedScoresQuery();
      const topScores = data?.allAdvancedScores;

      if (topScores) {
        return handleScoreViewHelper(topScores, currentPage, pageOffset);
      }
    }

    return [
      {
        username: "loading",
        time: 0,
        updatedAt: "",
        createdAt: "",
        id: 1,
      },
    ];
  };

  const [personalized, setPersonalized] = React.useState<Personalized>(false);

  const formatTime: FormatTimeFunc = (time) => {
    const centiseconds = ("0" + (Math.floor(time / 10) % 100)).slice(-2);
    const seconds = ("0" + (Math.floor(time / 1000) % 60)).slice(-2);
    const minutes = ("0" + (Math.floor(time / 60000) % 60)).slice(-2);
    const hours = ("0" + Math.floor(time / 3600000)).slice(-2);

    return minutes !== "00"
      ? `${minutes} : ${seconds} . ${centiseconds}`
      : hours !== "00"
      ? `${hours} : ${minutes}: ${seconds} . ${centiseconds}`
      : `${seconds} . ${centiseconds} secs`;
  };

  const handleClickPersonalized: LeaderboardHandleClickFunc = (e) => {
    const userName = e.currentTarget.innerHTML;
    return userName ? setPersonalized(userName) : setPersonalized(false);
  };

  const handleClickPage: HandleClickPageFunc = (e) => {
    const selected = Number(e.currentTarget.children[0].innerHTML) - 1;
    setCurrentPage(selected);
  };

  const makeTitle: MakeTitleFunc = (personalized, skillLevel) =>
    personalized
      ? `${personalized}s ${skillLevel} Leaderboard:`
      : `${skillLevel} Leaderboard`;

  return (
    <div id="leaderboard">
      <h3 id="leaderboard-header">{makeTitle(personalized, skillLevel)}</h3>
      <div className="winners-circle">
        <div className="scores-list-container">
          {(handleScoreView(props?.ssrTopTimes) || []).map((entry, index) => {
            return entry ? (
              <LeaderBoardEntry
                key={index}
                currentPage={currentPage}
                personalized={personalized}
                index={index}
                entry={entry}
                handleClick={handleClickPersonalized}
                formatTime={formatTime}
              />
            ) : null;
          })}
        </div>
        <PageNoUl
          pageOffset={pageOffset}
          handleClick={handleClickPage}
          currentPage={currentPage}
          topTimesPerPage={pageOffset}
          noOfTopTimes={handleScoreLength()}
        />
      </div>

      <div className="leaderboard-buttons-container">
        {personalized ? (
          <input
            type="button"
            onClick={(e) => handleClickPersonalized(e)}
            className="return-to-leaderboard-button"
            value={`return to ${skillLevel} LeaderBoard`}
          />
        ) : null}
        <div className="leaderboard-skill-level-selector-container">
          <input
            className="leaderboard-skill-level-selector-button"
            type="button"
            value="beginner"
            onClick={() => globalDispatch({ type: "SET BEGINNER DIMENSIONS" })}
          />
          <input
            className="leaderboard-skill-level-selector-button"
            type="button"
            value="intermediate"
            onClick={() =>
              globalDispatch({ type: "SET INTERMEDIATE DIMENSIONS" })
            }
          />
          <input
            className="leaderboard-skill-level-selector-button"
            type="button"
            value="advanced"
            onClick={() => {
              globalDispatch({ type: "SET ADVANCED DIMENSIONS" });
            }}
          />
        </div>
      </div>
    </div>
  );
});

export default Leaderboard;
