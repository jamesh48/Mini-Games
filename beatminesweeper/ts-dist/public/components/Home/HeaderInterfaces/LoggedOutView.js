import React from "react";
import { Link, useLocation } from 'react-router-dom';
const LoggedOutView = () => {
    const location = useLocation();
    const loginSelected = location.pathname === '/login';
    const registerSelected = location.pathname === '/register';
    const scoreboardSelected = location.pathname === '/scoreboard';
    return (React.createElement(React.Fragment, null,
        React.createElement("li", { className: (loginSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            React.createElement(Link, { to: "/login" }, "Login")),
        React.createElement("li", { className: (registerSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            React.createElement(Link, { to: "/register" }, "Register")),
        React.createElement("li", { className: (scoreboardSelected && `selected-header header-nav-ul-li`) ||
                `header-nav-ul-li` },
            React.createElement(Link, { to: "/scoreboard" }, "High Scores"))));
};
export default LoggedOutView;
//# sourceMappingURL=LoggedOutView.js.map