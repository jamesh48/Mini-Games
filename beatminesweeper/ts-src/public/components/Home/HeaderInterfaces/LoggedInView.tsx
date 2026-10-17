import React from "react";
import { Link as RouterLink, useLocation, useHistory } from "react-router-dom";
import { LogoutMutationFn, MeDocument } from "TSSrc/generated/graphql";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

interface LoggedInViewProps {
  username: string;
  logout: LogoutMutationFn;
}

const LoggedInView: React.FC<LoggedInViewProps> = ({ username, logout }) => {
  const location = useLocation();
  const history = useHistory();
  const homeSelected = location.pathname === "/";
  const scoreboardSelected = location.pathname === "/scoreboard";

  return (
    <>
      <Box sx={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center" }}>
        {homeSelected ? (
          <Typography
            variant="body2"
            sx={{
              color: "primary.main",
              fontStyle: "italic",
              fontSize: "clamp(0.65rem, 1.5vw, 0.85rem)",
              px: 1,
            }}
          >
            Logged in as: {username}
          </Typography>
        ) : (
          <Button
            component={RouterLink}
            to="/"
            variant="text"
            color="inherit"
            size="small"
            fullWidth
            sx={{ borderRadius: 0, py: 0.75 }}
          >
            Minesweeper
          </Button>
        )}
      </Box>

      <Button
        component={RouterLink}
        to="/scoreboard"
        variant={scoreboardSelected ? "contained" : "text"}
        color="primary"
        size="small"
        sx={{ flex: 1, borderRadius: 0, py: 0.75 }}
      >
        High Scores
      </Button>

      <Button
        variant="text"
        color="inherit"
        size="small"
        sx={{ flex: 1, borderRadius: 0, py: 0.75 }}
        onClick={() => {
          logout({ refetchQueries: [MeDocument] });
          history.push("/");
        }}
      >
        Logout
      </Button>
    </>
  );
};

export default LoggedInView;
