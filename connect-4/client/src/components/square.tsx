import React from "react";
import Box from "@mui/material/Box";
import { tokenColors } from "../theme.js";

interface SquareTypes {
  index: number;
  handleClick: (event: any) => void;
  handleHover: (column: number) => void;
  test: string;
  inHoverColumn: boolean;
  lit: boolean;
}

const disc = (color: string) =>
  `radial-gradient(circle at 35% 30%, ${tokenColors[color].light}, ${tokenColors[color].main} 55%, ${tokenColors[color].dark})`;

const Square: React.FC<SquareTypes> = ({ index, handleClick, handleHover, test, inHoverColumn, lit }) => {
  const column = (index % 7) + 1;
  const filled = test === "red" || test === "yellow";
  return (
    <Box
      className={"square " + test + (lit ? " lit" : "")}
      id={(index + 1).toString()}
      data-tile={index + 1}
      data-y={column}
      data-x={Math.ceil((index + 1) / 7)}
      onClick={handleClick}
      onMouseEnter={() => handleHover(column)}
      sx={{
        // Row 1 is the top; the drop animation falls this many cells (plus one above the board)
        "--row": Math.ceil((index + 1) / 7),
        position: "relative",
        width: "var(--cell)",
        height: "var(--cell)",
        borderRadius: "50%",
        cursor: "pointer",
        background: filled ? disc(test) : inHoverColumn ? "#1c2f55" : "#0b1426",
        boxShadow: filled
          ? "inset 0 -4px 6px rgba(0,0,0,0.35), 0 2px 4px rgba(0,0,0,0.4)"
          : "inset 0 4px 8px rgba(0,0,0,0.6)",
        transition: "background-color 150ms"
      }}
    />
  );
};

export default Square;
