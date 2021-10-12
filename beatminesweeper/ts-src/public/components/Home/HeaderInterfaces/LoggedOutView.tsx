
import React from "react";
import {Link, useLocation} from 'react-router-dom';

interface LoggedOutViewProps {
  isProxied: boolean;
};

const LoggedOutView: React.FC<LoggedOutViewProps> = (props) => {

  const location = useLocation();

  const loginSelected = location.pathname === '/login' || location.pathname === '/fullstack/minesweeper/login';
  const registerSelected = location.pathname === '/register';
  const scoreboardSelected = location.pathname === '/scoreboard'

  return (
    <>
      <li
        className={
          (loginSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        <Link to={props.isProxied ? '/fullstack/minesweeper/login' : '/login'}>Login</Link>
      </li>
      <li
        className={
          (registerSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        <Link to={props.isProxied ? '/fullstack/minesweeper/register' : '/register'}>Register</Link>
      </li>
      <li
        className={
          (scoreboardSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        <Link to={props.isProxied ? '/fullstack/minesweeper/scoreboard' : '/scoreboard'}>High Scores</Link>
      </li>
    </>
  );
};

export default LoggedOutView;