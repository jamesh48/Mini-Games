
import React from "react";
import {Link, useLocation} from 'react-router-dom';



const LoggedOutView: React.FC<{}> = () => {

  const location = useLocation();

  const loginSelected = location.pathname === '/login';
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
        <Link to="/login">Login</Link>
      </li>
      <li
        className={
          (registerSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        <Link to="/register">Register</Link>
      </li>
      <li
        className={
          (scoreboardSelected && `selected-header header-nav-ul-li`) ||
          `header-nav-ul-li`
        }
      >
        <Link to="/scoreboard">High Scores</Link>
      </li>
    </>
  );
};

export default LoggedOutView;