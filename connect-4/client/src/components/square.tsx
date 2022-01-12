import React from "react";

interface SquareTypes {
  index: number;
  handleClick: (event: any) => void;
  test: string;
}
const Square: React.FC<SquareTypes> = ({ index, handleClick, test }) => {
  return (
    <div
      className={"square " + test}
      id={(index + 1).toString()}
      data-tile={index + 1}
      data-y={(index % 7) + 1}
      data-x={Math.ceil((index + 1) / 7)}
      onClick={handleClick}
    ></div>
  );
};

export default Square;
