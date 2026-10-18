import { createTheme } from "@mui/material/styles";

export const tokenColors: { [player: string]: { main: string; light: string; dark: string } } = {
  red: { main: "#e53935", light: "#ff6f60", dark: "#ab000d" },
  yellow: { main: "#fdd835", light: "#ffff6b", dark: "#c6a700" }
};

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: { main: "#42a5f5" },
    background: { default: "#0b1426", paper: "#13213d" }
  },
  shape: { borderRadius: 12 },
  typography: {
    fontFamily: "Roboto, Helvetica, Arial, sans-serif",
    button: { textTransform: "none", fontWeight: 600 }
  }
});

export default theme;
