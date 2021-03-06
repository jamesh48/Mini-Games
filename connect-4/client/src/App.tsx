import React from "react";
import Board from "./components/board.js";
import Square from "./components/square.js";
import WinnerBanner from "./components/WinnerBanner.js";

interface IState {
  turn: string;
  board: number[];
  t1: string;
  t2: string;
  t3: string;
  t4: string;
  t5: string;
  t6: string;
  t7: string;
  t8: string;
  t9: string;
  t10: string;
  t11: string;
  t12: string;
  t13: string;
  t14: string;
  t15: string;
  t16: string;
  t17: string;
  t18: string;
  t19: string;
  t20: string;
  t21: string;
  t22: string;
  t23: string;
  t24: string;
  t25: string;
  t26: string;
  t27: string;
  t28: string;
  t29: string;
  t30: string;
  t31: string;
  t32: string;
  t33: string;
  t34: string;
  t35: string;
  t36: string;
  t37: string;
  t38: string;
  t39: string;
  t40: string;
  t41: string;
  t42: string;
  winner: undefined | string;
  pYellow: string;
  pRed: string;
}
class App extends React.Component<{}, IState> {
  constructor(props: any) {
    super(props);
    this.renderSquares = this.renderSquares.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.detectVerticalWin = this.detectVerticalWin.bind(this);
    this.detectHorizontalWin = this.detectHorizontalWin.bind(this);
    this.detectLeftDiagonalWin = this.detectLeftDiagonalWin.bind(this);
    this.detectRightDiagonalWin = this.detectRightDiagonalWin.bind(this);
    this.detectTie = this.detectTie.bind(this);

    this.state = {
      turn: "yellow",
      board: [
        1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23,
        24, 25, 26, 27, 28, 28, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42
      ],
      t1: "",
      t2: "",
      t3: "",
      t4: "",
      t5: "",
      t6: "",
      t7: "",
      t8: "",
      t9: "",
      t10: "",
      t11: "",
      t12: "",
      t13: "",
      t14: "",
      t15: "",
      t16: "",
      t17: "",
      t18: "",
      t19: "",
      t20: "",
      t21: "",
      t22: "",
      t23: "",
      t24: "",
      t25: "",
      t26: "",
      t27: "",
      t28: "",
      t29: "",
      t30: "",
      t31: "",
      t32: "",
      t33: "",
      t34: "",
      t35: "",
      t36: "",
      t37: "",
      t38: "",
      t39: "",
      t40: "",
      t41: "",
      t42: "",
      winner: undefined,
      pYellow: "Yellow",
      pRed: "Red"
    };
  }

  renderSquares() {
    return this.state.board.map((_item: any, index: number) => {
      return (
        <Square
          handleClick={this.handleClick}
          test={this.state["t" + (index + 1).toString()]}
          index={index}
          key={index}
        />
      );
    });
  }

  handleClick(event: any) {
    const currentTile = event.target.dataset;

    // Set variable equal to the bottom most tile corresponding to the clicked tile in the clicked column.
    let i = 42 - (7 - currentTile.y);
    // Count backwards to a tile in the same column whose state is an empty string and is not white, and is on the board (exists)
    while (
      this.state["t" + i.toString()] !== "" &&
      this.state["t" + i.toString()] !== "white" &&
      i - 7 > 0
    ) {
      i -= 7;
    }

    // this if statement prevents the highlight animation from running if a user clicks on a column and the column is full
    if (!(i - 7 <= 0 && this.state["t" + i] !== "" && this.state["t" + i] !== "white")) {
      let index = 0;
      // Highlight tokens one after another
      let highlightTokens = setInterval(() => {
        index++;
        if (index === i) {
          clearInterval(highlightTokens);
        }
        this.setState((prevState) => {
          // Maintain current state if a move has been played
          if (prevState["t" + index] !== "") {
            return prevState;
          } else {
            // otherwise highlight the token.
            return {
              ...prevState,
              ["t" + index]: "white"
            };
          }
        });
      }, 840 / i);
    }

    this.setState(
      (prevState) => {
        // dont let opposing player change top tile
        if (prevState["t" + i] !== "" && prevState["t" + i] !== "white") {
          return prevState;
        } else {
          let incomingMove = prevState.turn === "red" ? "yellow" : "red";
          return {
            ...prevState,
            ["t" + i]: incomingMove,
            turn: incomingMove
          };
        }
      },
      () => {
        const dVW = this.detectVerticalWin(this.state.turn);
        const dHW = this.detectHorizontalWin(i, this.state.turn);
        const dRDW = this.detectRightDiagonalWin(this.state.turn);
        const dLDW = this.detectLeftDiagonalWin(this.state.turn);
        const tie = this.detectTie();

        this.setState((prevState) => {
          // Clear state for all white tokens before next turn
          for (let key in prevState) {
            if (prevState[key] === "white") {
              prevState[key] = "";
            }
          }

          return {
            ...prevState,
            winner:
              dVW || dHW || dRDW || dLDW
                ? dVW || dHW || dRDW || dLDW
                : tie
                ? "tie"
                : undefined
          };
        });
      }
    );
  }

  detectVerticalWin(turn: string) {
    for (let i = 1; i <= 42; i++) {
      const token = this.state["t" + i] === turn;
      const t2v = this.state["t" + (i + 7)] === turn;
      const t3v = this.state["t" + (i + 14)] === turn;
      const t4v = this.state["t" + (i + 21)] === turn;

      if (token && t2v && t3v && t4v) {
        return turn;
      }
    }
    return;
  }

  detectHorizontalWin(i: number, turn: string) {
    let column = i % 7 || 7;
    let rowStart = i - column + 1;
    const rowEnd = rowStart + 6;
    for (let i = rowStart; i <= rowEnd; i++) {
      const token = this.state["t" + i] === turn;
      const t2h = this.state["t" + (i + 1)] === turn && i + 1 <= rowEnd;
      const t3h = this.state["t" + (i + 2)] === turn && i + 2 <= rowEnd;
      const t4h = this.state["t" + (i + 3)] === turn && i + 3 <= rowEnd;
      if (token && t2h && t3h && t4h) {
        return turn;
      }
    }
    return;
  }

  detectRightDiagonalWin(turn: string) {
    for (let i = 1; i <= 42; i++) {
      const yColumn = i % 7 || 7;
      const y2Column = (i + 8) % 7 || 7;
      const y3Column = (i + 16) % 7 || 7;
      const y4Column = (i + 24) % 7 || 7;

      const t1RD = this.state["t" + i] === turn;
      const t2RD = this.state["t" + (i + 8)] === turn && y2Column > yColumn;
      const t3RD = this.state["t" + (i + 16)] === turn && y3Column > y2Column;
      const t4RD = this.state["t" + (i + 24)] === turn && y4Column > y3Column;

      if (t1RD && t2RD && t3RD && t4RD) {
        return turn;
      }
    }
    return;
  }

  detectLeftDiagonalWin(turn: string) {
    for (let i = 1; i <= 42; i++) {
      const yColumn = i % 7 || 7;
      const y2Column = (i + 6) % 7 || 7;
      const y3Column = (i + 12) % 7 || 7;
      const y4Column = (i + 18) % 7 || 7;

      const t1LD = this.state["t" + i] === turn;
      const t2LD = this.state["t" + (i + 6)] === turn && y2Column < yColumn;
      const t3LD = this.state["t" + (i + 12)] === turn && y3Column < y2Column;
      const t4LD = this.state["t" + (i + 18)] === turn && y4Column < y3Column;

      if (t1LD && t2LD && t3LD && t4LD) {
        return turn;
      }
    }
    return;
  }

  detectTie() {
    for (let i = 1; i <= 42; i++) {
      if (this.state["t" + i] === "" || this.state["t" + i] === "white") {
        return false;
      }
    }
    return true;
  }

  render() {
    const { winner } = this.state;
    return (
      <div>
        <Board renderSquares={this.renderSquares} />
        <WinnerBanner winner={winner} />
      </div>
    );
  }
}

export default App;
