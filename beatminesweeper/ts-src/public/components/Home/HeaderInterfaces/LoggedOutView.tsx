import React from "react";
import { Link as RouterLink, useLocation } from "react-router-dom";
import Button from "@mui/material/Button";

const LoggedOutView: React.FC = () => {
  const location = useLocation();
  const loginSelected = location.pathname === "/login" || location.pathname === "/fullstack/minesweeper/login";
  const registerSelected = location.pathname === "/register";
  const scoreboardSelected = location.pathname === "/scoreboard";

  const navBtn = (to: string, label: string, selected: boolean) => (
    <Button
      component={RouterLink}
      to={to}
      variant={selected ? "contained" : "text"}
      color="primary"
      size="small"
      sx={{ flex: 1, borderRadius: 0, py: 0.75 }}
    >
      {label}
    </Button>
  );

  return (
    <>
      {navBtn("/login", "Login", loginSelected)}
      {navBtn("/register", "Register", registerSelected)}
      {navBtn("/scoreboard", "High Scores", scoreboardSelected)}
    </>
  );
};

export default LoggedOutView;
