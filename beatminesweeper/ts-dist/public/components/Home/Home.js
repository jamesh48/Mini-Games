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
import { useGlobalContext } from "TSSrc/public/GlobalStore/GlobalStore";
export const Home = (props) => {
    var _a;
    const { data, loading } = useMeQuery();
    const [, globalDispatch] = useGlobalContext();
    const [logout] = useLogoutMutation();
    let headerBody = null;
    React.useEffect(() => {
        var _a;
        if ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username) {
            globalDispatch({ type: 'SET DEFINED USERNAME', payload: { userName: data.me.username } });
        }
        else {
            globalDispatch({ type: 'UNSET DEFINED USERNAME' });
        }
    }, [data]);
    headerBody = loading ? null : !(data === null || data === void 0 ? void 0 : data.me) ? (React.createElement(LoggedOutView, null)) : (React.createElement(LoggedInView, { username: data.me.username, logout: logout }));
    return (React.createElement(React.Fragment, null,
        React.createElement("nav", { className: "header-nav" },
            React.createElement("ul", { className: ((_a = data === null || data === void 0 ? void 0 : data.me) === null || _a === void 0 ? void 0 : _a.username) ? `header-nav-ul header-is-concealed` : `header-nav-ul` }, headerBody)),
        React.createElement(Switch, null,
            React.createElement(Route, { path: "/login" },
                React.createElement(UserLoginForm, null),
                React.createElement(Minesweeper, null)),
            React.createElement(Route, { path: "/register" },
                React.createElement(UserRegisterForm, null),
                React.createElement(Minesweeper, null)),
            React.createElement(Route, { path: "/scoreboard" },
                React.createElement(Leaderboard, { ssrTopTimes: props.ssrTopTimes })),
            React.createElement(Route, { path: "/" },
                React.createElement(Minesweeper, null)))));
};
//# sourceMappingURL=Home.js.map