import React from "react";
import { useGlobalContext } from "GlobalStore";
import { Personalized, FormatTimeFunc, LeaderboardEntry, LeaderboardHandleClickFunc } from "./leaderboard-types";


interface LeaderboardEntryProps {
  personalized: Personalized;
  handleClick: LeaderboardHandleClickFunc;
  entry: LeaderboardEntry;
  index: number;
  currentPage: number;
  formatTime:FormatTimeFunc;
}
const SingleLeaderboardEntry: React.FC<LeaderboardEntryProps> = ({
  currentPage,
  personalized,
  handleClick,
  entry: { username, time },
  index,
  formatTime,
}) => {
  const [{ definedUserName }] = useGlobalContext();

  const golden = definedUserName === username;

  return (
    <div
      key={index}
      className={personalized ? "personalized scores-list-item" : "scores-list-item"}
    >
      {/* Number */}
      <h5
        className={golden ? "golden scores-user" : "scores-user"}
        style={{ paddingRight: "5px" }}
      >
        {((currentPage * 10) + index ) + 1}.
      </h5>
      {/* Name */}
      <h5
        onClick={handleClick}
        className={golden ? "golden scores-user" : "scores-user"}
      >
        {username}
      </h5>
      {/* Vertical line */}
      <h5 className={golden ? "golden scores-user" : "black-num scores-user"}>
        {" "}
        |{" "}
      </h5>
      {/* Time */}
      <h5 className={golden ? "golden scores-time" : "scores-time"}>
        {formatTime(time)}
      </h5>
    </div>
  );
};

export default SingleLeaderboardEntry;
