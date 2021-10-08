import React from "react";
import { Link, useLocation } from "react-router-dom";
import { LogoutMutationFn, MeDocument } from "TSSrc/generated/graphql";

interface LoggedInViewProps {
  username: string;
  logout: LogoutMutationFn;
}

const LoggedInView: React.FC<LoggedInViewProps> = (props) => {
  const location = useLocation();
  const homeSelected = location.pathname === "/";
  const scoreboardSelected = location.pathname === "/scoreboard";

  return (
    <>
      <li
        className={
          (homeSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        {(homeSelected && (
          <p className={`logged-in-user-title`}>
            {" "}
            Logged in as: {props.username}{" "}
          </p>
        )) || <Link to="/">Minesweeper</Link>}
      </li>
      <li
        className={
          (scoreboardSelected && `selected-header header-nav-ul-li`) ||
          "header-nav-ul-li"
        }
      >
        <Link to="/scoreboard">High Scores</Link>
      </li>
      <li className="header-nav-ul-li">
        <a
          className="logout-button"
          onClick={() => {
            props.logout({
              refetchQueries: [MeDocument],
            });
          }}
        >
          Logout
        </a>
      </li>
    </>
  );
};

export default LoggedInView;
