import React from "react";
import { useGlobalContext } from "GlobalStore";
const SingleLeaderboardEntry = ({ currentPage, personalized, handleClick, entry: { username, time }, index, formatTime, }) => {
    const [{ definedUserName }] = useGlobalContext();
    const golden = definedUserName === username;
    return (React.createElement("div", { key: index, className: personalized ? "personalized scores-list-item" : "scores-list-item" },
        React.createElement("h5", { className: golden ? "golden scores-user" : "scores-user", style: { paddingRight: "5px" } },
            ((currentPage * 10) + index) + 1,
            "."),
        React.createElement("h5", { onClick: handleClick, className: golden ? "golden scores-user" : "scores-user" }, username),
        React.createElement("h5", { className: golden ? "golden scores-user" : "black-num scores-user" },
            " ",
            "|",
            " "),
        React.createElement("h5", { className: golden ? "golden scores-time" : "scores-time" }, formatTime(time))));
};
export default SingleLeaderboardEntry;
//# sourceMappingURL=LeaderboardEntry.js.map