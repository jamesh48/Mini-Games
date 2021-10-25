import React from "react";

import { Switch, Route } from "react-router-dom";

import Minesweeper from "TSComponents/Minesweeper/Minesweeper";
import Leaderboard from "TSComponents/Leaderboard/Leaderboard";

import UserLoginForm from "TSComponents/UserForms/Login";
import UserRegisterForm from "TSComponents/UserForms/Register";
import LoggedInView from "TSComponents/Home/HeaderInterfaces/LoggedInView";
import LoggedOutView from "TSComponents/Home/HeaderInterfaces/LoggedOutView";

import "./home.scss";
import "./header.scss";
import { useMeQuery, useLogoutMutation } from "TSSrc/generated/graphql";
import { GenericScore } from "../Leaderboard/leaderboard-types";
import { useGlobalContext } from "TSSrc/public/GlobalStore/GlobalStore";

interface HomeProps {
  ssrTopTimes?: GenericScore[];
}

export const Home: React.FC<HomeProps> = (props) => {
  const { data, loading } = useMeQuery();

  const [{isProxied}, globalDispatch] = useGlobalContext();
  const [logout] = useLogoutMutation();

  let headerBody = null;

  React.useEffect(() => {
    if (window.location.href.indexOf("fullstack") > -1) {
      globalDispatch({type: 'SET PROXIED TRUE'})
    }
  }, []);

  React.useEffect(() => {
    if (data?.me?.username) {
      globalDispatch({
        type: "SET DEFINED USERNAME",
        payload: {
          userName: data.me.username,
        },
      });
    } else {
      globalDispatch({ type: "UNSET DEFINED USERNAME" });
    }
  }, [data]);

  headerBody = loading ? null : !data?.me ? (
    <LoggedOutView />
  ) : (
    <LoggedInView username={data.me.username} logout={logout} />
  );

  return !isProxied ? (
    <>
      <nav className="header-nav">
        <ul
          className={
            data?.me?.username
              ? `header-nav-ul header-is-concealed`
              : `header-nav-ul`
          }
        >
          {headerBody}
        </ul>
      </nav>

      <Switch>
        <Route path="/login">
          <UserLoginForm />
          <Minesweeper />
        </Route>
        <Route path="/register">
          <UserRegisterForm />
          <Minesweeper />
        </Route>
        <Route path="/scoreboard">
          <Leaderboard ssrTopTimes={props.ssrTopTimes} />
        </Route>
        <Route path="/">
          <Minesweeper />
        </Route>
      </Switch>
    </>
  ) : (
    <Minesweeper />
  );
};
