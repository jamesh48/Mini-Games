import React from "react";
import { Link, useLocation, useHistory } from "react-router-dom";
import { LogoutMutationFn, MeDocument } from "TSSrc/generated/graphql";

interface LoggedInViewProps {
  username: string;
  logout: LogoutMutationFn;
  isProxied: boolean;
}

const LoggedInView: React.FC<LoggedInViewProps> = (props) => {
  const location = useLocation();
  const history = useHistory();
  const homeSelected = location.pathname === "/" || location.pathname === '/fullstack/minesweeper';
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
        )) || <Link to={props.isProxied ? '/fullstack/minesweeper' : '/'}>Minesweeper</Link>}
      </li>
      <li
        className={
          (scoreboardSelected && `selected-header header-nav-ul-li`) ||
          "header-nav-ul-li"
        }
      >
        <Link to={props.isProxied ? '/fullstack/minesweeper/scoreboard' : '/scoreboard'}>High Scores</Link>
      </li>
      <li className="header-nav-ul-li">
        <a
          className="logout-button"
          onClick={() => {
            props.logout({
              refetchQueries: [MeDocument],
            });
            if (window.location.href.indexOf('fullstack') > -1) {
              history.push('/fullstack/minesweeper');
            } else {
              history.push('/');
            }
          }}
        >
          Logout
        </a>
      </li>
    </>
  );
};

export default LoggedInView;
