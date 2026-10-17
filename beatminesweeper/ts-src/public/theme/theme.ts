import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#FFD700",       // gold — trophy, headers, borders
      contrastText: "#0d1b4b",
    },
    secondary: {
      main: "#00BFA5",       // teal — scores panel
      contrastText: "#f5f5f5",
    },
    background: {
      default: "#0d1b4b",    // deep navy
      paper: "#0d1b4b",
    },
    text: {
      primary: "#f5f5f5",
      secondary: "#b0bec5",
    },
    action: {
      hover: "#3949AB",      // indigo — active/hover state
    },
    info: {
      main: "#00E5FF",       // cyan — hover accent on entry text
    },
  },
  typography: {
    fontFamily: '"Roboto Mono", "Roboto", monospace',
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          textTransform: "capitalize",
          fontSize: "clamp(0.65rem, 2vw, 0.8rem)",
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
