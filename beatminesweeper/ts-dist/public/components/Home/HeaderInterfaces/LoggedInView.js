import React from "react";
import { Link, useLocation } from "react-router-dom";
import { MeDocument } from "TSSrc/generated/graphql";
const LoggedInView = (props) => {
    const location = useLocation();
    const homeSelected = location.pathname === "/";
    const scoreboardSelected = location.pathname === "/scoreboard";
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { className: (homeSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` }, (homeSelected && (React.createElement("p", { className: `logged-in-user-title` },
            " ",
            "Logged in as: ",
            props.username,
            " "))) || React.createElement(Link, { to: "/" }, "Minesweeper")),
        React.createElement("li", { className: (scoreboardSelected && `selected-header header-nav-ul-li`) ||
                "header-nav-ul-li" },
            React.createElement(Link, { to: "/scoreboard" }, "High Scores")),
        React.createElement("li", { className: "header-nav-ul-li" },
            React.createElement("a", { className: "logout-button", onClick: () => {
                    props.logout({
                        refetchQueries: [MeDocument],
                    });
                } }, "Logout"))));
};
export default LoggedInView;
//# sourceMappingURL=LoggedInView.js.map