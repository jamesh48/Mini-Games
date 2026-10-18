import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { tokenColors } from "../theme.js";

interface BoardTypes {
  renderSquares: () => React.ReactNode;
  hoverColumn: number | undefined;
  nextColor: string | undefined;
  handleLeave: () => void;
}

const Board: React.FC<BoardTypes> = ({ renderSquares, hoverColumn, nextColor, handleLeave }) => (
  <Box
    onMouseLeave={handleLeave}
    sx={{
      "--cell": "min(64px, calc((100vw - 96px) / 7))",
      "--gap": "min(10px, 1.6vw)"
    }}
  >
    {/* Preview of where the next disc will drop */}
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, var(--cell))",
        gap: "var(--gap)",
        px: "var(--gap)",
        mb: 1
      }}
    >
      {[1, 2, 3, 4, 5, 6, 7].map((column) => (
        <Box
          key={column}
          sx={{
            width: "var(--cell)",
            height: "var(--cell)",
            borderRadius: "50%",
            bgcolor: nextColor ? tokenColors[nextColor].main : "transparent",
            opacity: nextColor && hoverColumn === column ? 0.6 : 0,
            transition: "opacity 150ms"
          }}
        />
      ))}
    </Box>
    <Paper
      id="board"
      elevation={12}
      sx={{
        display: "grid",
        gridTemplateColumns: "repeat(7, var(--cell))",
        gap: "var(--gap)",
        p: "var(--gap)",
        borderRadius: 4,
        background: "linear-gradient(180deg, #1e63d6, #1546a8)"
      }}
    >
      {renderSquares()}
    </Paper>
  </Box>
);

export default Board;
