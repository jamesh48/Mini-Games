import React from "react";

const Board: React.FC<{ renderSquares: () => React.ReactNode }> = (props) => (
  <div id="board">{props.renderSquares()}</div>
);

export default Board;
