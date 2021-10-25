
import React from "react";
import {Link, useLocation} from 'react-router-dom';

interface LoggedOutViewProps {
};

const LoggedOutView: React.FC<LoggedOutViewProps> = () => {

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
        <Link to='/login'>Login</Link>
      </li>
      <li
        className={
          (registerSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        <Link to={'/register'}>Register</Link>
      </li>
      <li
        className={
          (scoreboardSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        <Link to={'/scoreboard'}>High Scores</Link>
      </li>
    </>
  );
};

export default LoggedOutView;