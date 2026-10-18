import React from "react";
import { io, Socket } from "socket.io-client";
import Alert from "@mui/material/Alert";
import CircularProgress from "@mui/material/CircularProgress";
import InviteLink from "./components/InviteLink.js";
import Board from "./components/board.js";
import Square from "./components/square.js";
import WinnerBanner from "./components/WinnerBanner.js";
import PlayerCard from "./components/PlayerCard.js";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import GridViewIcon from "@mui/icons-material/GridView";
import WifiOffIcon from "@mui/icons-material/WifiOff";
import LinkIcon from "@mui/icons-material/Link";
import RestartAltIcon from "@mui/icons-material/RestartAlt";

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
  hoverColumn: undefined | number;
  redWins: number;
  yellowWins: number;
  // "both" is single-device play, where this browser plays both colors
  myColor: undefined | "red" | "yellow" | "both" | "spectator";
  players: { red: boolean; yellow: boolean };
  connected: boolean;
  // Tiles that already hold a disc and are lit by the current cascade
  lit: number[];
  online: boolean;
  // Whether this browser is on the computer running the server, which controls online play
  isHost: boolean;
  tunnel: { status: "off" | "starting" | "ready" | "error"; url?: string; error?: string };
  // Turned away because online play is off on the host's computer
  rejected: boolean;
  // The host dismissed the online link banner; it comes back from the header
  linkHidden: boolean;
}

const getSavedName = () => {
  try {
    return localStorage.getItem("connect4-name") || undefined;
  } catch {
    return undefined;
  }
};

const saveName = (name: string) => {
  try {
    localStorage.setItem("connect4-name", name);
  } catch {}
};

// Remembers which online link was dismissed, so it stays hidden across refreshes but a new link shows again
const getHiddenLink = () => {
  try {
    return localStorage.getItem("connect4-hidden-link") || undefined;
  } catch {
    return undefined;
  }
};

const saveHiddenLink = (url: string | undefined) => {
  try {
    url ? localStorage.setItem("connect4-hidden-link", url) : localStorage.removeItem("connect4-hidden-link");
  } catch {}
};

// One id per browser tab, kept across refreshes so a player gets their seat back
const getClientId = () => {
  const fresh = Math.random().toString(36).slice(2);
  try {
    const id = sessionStorage.getItem("connect4-client-id") || fresh;
    sessionStorage.setItem("connect4-client-id", id);
    return id;
  } catch {
    return fresh;
  }
};

interface IProps {
  // Lets tests swap in a fake socket instead of connecting to the server
  createSocket?: () => Socket;
}

class App extends React.Component<IProps, IState> {
  socket: Socket | undefined;

  constructor(props: any) {
    super(props);
    this.renderSquares = this.renderSquares.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.detectVerticalWin = this.detectVerticalWin.bind(this);
    this.detectHorizontalWin = this.detectHorizontalWin.bind(this);
    this.detectLeftDiagonalWin = this.detectLeftDiagonalWin.bind(this);
    this.detectRightDiagonalWin = this.detectRightDiagonalWin.bind(this);
    this.detectTie = this.detectTie.bind(this);
    this.handleHover = this.handleHover.bind(this);
    this.newGame = this.newGame.bind(this);
    this.resetBoard = this.resetBoard.bind(this);
    this.dropInColumn = this.dropInColumn.bind(this);
    this.handleRename = this.handleRename.bind(this);
    this.setOnline = this.setOnline.bind(this);
    this.setLinkHidden = this.setLinkHidden.bind(this);
    this.controls = this.controls.bind(this);

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
      pRed: "Red",
      hoverColumn: undefined,
      redWins: 0,
      yellowWins: 0,
      myColor: undefined,
      players: { red: false, yellow: false },
      connected: false,
      lit: [],
      online: false,
      isHost: false,
      tunnel: { status: "off" },
      rejected: false,
      linkHidden: false
    };
  }

  componentDidMount() {
    const socket = this.props.createSocket
      ? this.props.createSocket()
      : io({ auth: { clientId: getClientId(), name: getSavedName() } });
    this.socket = socket;
    socket.on("connect", () => this.setState({ connected: true }));
    socket.on("disconnect", () => this.setState({ connected: false }));
    // On (re)connect the server sends our seat and every move so far
    socket.on(
      "welcome",
      ({ color, moves, isHost }: { color: IState["myColor"]; moves: number[]; isHost: boolean }) => {
      this.resetBoard();
      this.setState({ myColor: color, isHost });
      moves.forEach((column) => this.dropInColumn(column, false));
      }
    );
    socket.on("mode", ({ online, tunnel }: { online: boolean; tunnel: IState["tunnel"] }) =>
      this.setState({ online, tunnel, linkHidden: !!tunnel.url && tunnel.url === getHiddenLink() })
    );
    socket.on("rejected", () => this.setState({ rejected: true }));
    socket.on(
      "players",
      ({ red, yellow }: { [color: string]: { connected: boolean; name: string } }) =>
        this.setState({
          players: { red: red.connected, yellow: yellow.connected },
          pRed: red.name,
          pYellow: yellow.name
        })
    );
    socket.on("move", ({ column }: { column: number }) => this.dropInColumn(column, true));
    socket.on("newGame", this.resetBoard);

  }

  componentWillUnmount() {
    this.socket?.disconnect();
  }

  renderSquares() {
    return this.state.board.map((_item: any, index: number) => {
      return (
        <Square
          handleClick={this.handleClick}
          handleHover={this.handleHover}
          test={this.state["t" + (index + 1).toString()]}
          lit={this.state.lit.includes(index + 1)}
          inHoverColumn={
            !this.state.winner &&
            this.controls(this.state.turn === "yellow" ? "red" : "yellow") &&
            this.state.hoverColumn === (index % 7) + 1
          }
          index={index}
          key={index}
        />
      );
    });
  }

  handleHover(column: undefined | number) {
    this.setState({ hoverColumn: column });
  }

  // Whether this browser plays the given color
  controls(color: string) {
    return this.state.myColor === color || this.state.myColor === "both";
  }

  handleRename(color: string, name: string) {
    // Remember your own name for next time; single-device play names both players
    if (this.state.myColor === color) {
      saveName(name);
    }
    this.socket?.emit("setName", { color, name });
  }

  setLinkHidden(hidden: boolean) {
    saveHiddenLink(hidden ? this.state.tunnel.url : undefined);
    this.setState({ linkHidden: hidden });
  }

  setOnline(on: boolean) {
    this.socket?.emit("setOnline", { on });
  }

  newGame() {
    this.socket?.emit("newGame");
  }

  resetBoard() {
    this.setState((prevState) => {
      const cleared = { ...prevState };
      for (let i = 1; i <= 42; i++) {
        cleared["t" + i] = "";
      }
      return { ...cleared, turn: "yellow", winner: undefined, lit: [] };
    });
  }

  handleClick(event: any) {
    const { winner, turn } = this.state;
    const next = turn === "yellow" ? "red" : "yellow";
    // No more moves once the game is decided, and only on your own turn
    if (winner || !this.controls(next)) {
      return;
    }
    // The server checks the move and sends it back to both players, who play it with dropInColumn
    this.socket?.emit("move", { column: Number(event.currentTarget.dataset.y) });
  }

  dropInColumn(column: number, animate: boolean) {
    // Set variable equal to the bottom most tile corresponding to the clicked tile in the clicked column.
    let i = 42 - (7 - column);
    // Count backwards to a tile in the same column whose state is an empty string and is not white, and is on the board (exists)
    while (
      this.state["t" + i.toString()] !== "" &&
      this.state["t" + i.toString()] !== "white" &&
      i - 7 > 0
    ) {
      i -= 7;
    }

    // this if statement prevents the highlight animation from running if a user clicks on a column and the column is full
    if (animate && !(i - 7 <= 0 && this.state["t" + i] !== "" && this.state["t" + i] !== "white")) {
      let index = 0;
      // Highlight tokens one after another
      let highlightTokens = setInterval(() => {
        index++;
        if (index === i) {
          clearInterval(highlightTokens);
        }
        this.setState((prevState) => {
          // The disc being dropped lands on tile i, so leave it alone
          if (index === i) {
            return prevState;
          } else if (prevState["t" + index] !== "") {
            // Light up discs already on the board
            return { ...prevState, lit: [...prevState.lit, index] };
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

          const winner =
            dVW || dHW || dRDW || dLDW
              ? dVW || dHW || dRDW || dLDW
              : tie
              ? "tie"
              : undefined;

          return {
            ...prevState,
            lit: [],
            winner,
            redWins: prevState.redWins + (winner === "red" ? 1 : 0),
            yellowWins: prevState.yellowWins + (winner === "yellow" ? 1 : 0)
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

  renderStatus() {
    const { myColor, players, connected, online, isHost, tunnel } = this.state;
    const opponent = myColor === "red" ? "yellow" : "red";
    const waiting = online && (myColor === "red" || myColor === "yellow") && !players[opponent];

    if (!connected) {
      return <Alert severity="error">Disconnected from the server. Reconnecting…</Alert>;
    }
    if (isHost && tunnel.status === "error") {
      return <Alert severity="error">{tunnel.error}</Alert>;
    }
    if (isHost && tunnel.status === "starting") {
      return (
        <Alert severity="info" icon={<CircularProgress size={20} color="inherit" />}>
          Starting the online link… This can take up to a minute.
        </Alert>
      );
    }
    if (isHost && tunnel.status === "ready" && tunnel.url) {
      if (this.state.linkHidden) {
        return null;
      }
      return (
        <Alert
          severity={waiting ? "warning" : "success"}
          onClose={() => this.setLinkHidden(true)}
          sx={{ "& .MuiAlert-message": { minWidth: 0, flex: 1 } }}
        >
          {waiting ? "Waiting for an opponent to join. Send them this link:" : "Online play is on. Your link:"}
          <InviteLink url={tunnel.url} />
        </Alert>
      );
    }
    if (myColor === "spectator") {
      return <Alert severity="info">Both seats are taken. You're watching.</Alert>;
    }
    if (waiting) {
      return <Alert severity="warning">Waiting for an opponent to join.</Alert>;
    }
    return null;
  }

  render() {
    const { winner, turn, hoverColumn, pRed, pYellow, redWins, yellowWins, myColor, players, connected } =
      this.state;
    const { online, isHost, tunnel, rejected } = this.state;
    // `turn` holds the color that moved last
    const next = turn === "yellow" ? "red" : "yellow";
    const myTurn = !winner && this.controls(next);
    const status = this.renderStatus();

    if (rejected) {
      return (
        <Box sx={{ minHeight: "100vh", display: "grid", placeItems: "center", p: 2, textAlign: "center" }}>
          <div>
            <WifiOffIcon sx={{ fontSize: 64, color: "text.secondary" }} />
            <Typography variant="h5" fontWeight={700} sx={{ mt: 1 }}>
              Online play is off
            </Typography>
            <Typography color="text.secondary" sx={{ mt: 1 }}>
              Ask the host to turn on Play online, then refresh this page.
            </Typography>
          </div>
        </Box>
      );
    }

    return (
      <Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Toolbar sx={{ gap: 1 }}>
            <GridViewIcon color="primary" sx={{ mr: 0.5 }} />
            <Typography variant="h6" fontWeight={700} noWrap sx={{ flexGrow: 1, minWidth: 0 }}>
              Connect Four
            </Typography>
            {isHost && tunnel.status === "ready" && this.state.linkHidden && (
              <Tooltip title="Show online link">
                <IconButton color="inherit" onClick={() => this.setLinkHidden(false)} aria-label="Show online link">
                  <LinkIcon />
                </IconButton>
              </Tooltip>
            )}
            {isHost && (
              <FormControlLabel
                label={
                  <>
                    <Box component="span" sx={{ display: { xs: "none", sm: "inline" } }}>
                      Play{" "}
                    </Box>
                    online
                  </>
                }
                control={
                  <Switch
                    checked={online}
                    disabled={!connected || tunnel.status === "starting"}
                    onChange={(event) => this.setOnline(event.target.checked)}
                  />
                }
                sx={{ mr: 0, "& .MuiFormControlLabel-label": { whiteSpace: "nowrap" } }}
              />
            )}
            {/* Icon only on phones to leave room for the toggle */}
            <Button
              color="inherit"
              startIcon={<RestartAltIcon />}
              onClick={this.newGame}
              disabled={!connected || myColor === "spectator"}
              sx={{ whiteSpace: "nowrap", display: { xs: "none", sm: "inline-flex" } }}
            >
              New game
            </Button>
            <Tooltip title="New game">
              <span>
                <IconButton
                  color="inherit"
                  onClick={this.newGame}
                  disabled={!connected || myColor === "spectator"}
                  aria-label="New game"
                  sx={{ display: { xs: "inline-flex", sm: "none" } }}
                >
                  <RestartAltIcon />
                </IconButton>
              </span>
            </Tooltip>
          </Toolbar>
        </AppBar>
        <Container
          maxWidth="sm"
          sx={{ py: 4, display: "flex", flexDirection: "column", alignItems: "center", gap: 3 }}
        >
          <Stack direction="row" spacing={{ xs: 1, sm: 2 }} sx={{ width: "100%" }}>
            <PlayerCard
              color="red"
              name={pRed}
              wins={redWins}
              active={!winner && next === "red"}
              isYou={myColor === "red"}
              editable={this.controls("red")}
              online={!online || players.red}
              handleRename={(name) => this.handleRename("red", name)}
            />
            <PlayerCard
              color="yellow"
              name={pYellow}
              wins={yellowWins}
              active={!winner && next === "yellow"}
              isYou={myColor === "yellow"}
              editable={this.controls("yellow")}
              online={!online || players.yellow}
              handleRename={(name) => this.handleRename("yellow", name)}
            />
          </Stack>
          {status && <Box sx={{ width: "100%" }}>{status}</Box>}
          <Board
            renderSquares={this.renderSquares}
            hoverColumn={hoverColumn}
            nextColor={myTurn ? next : undefined}
            handleLeave={() => this.handleHover(undefined)}
          />
          <Typography variant="body2" color="text.secondary">
            {winner || myColor === "spectator"
              ? "Four in a row wins."
              : myColor === "both"
              ? `${next === "red" ? pRed : pYellow}'s turn. Click a column to drop a disc.`
              : myTurn
              ? "Your turn. Click a column to drop a disc."
              : "Waiting for the other player…"}
          </Typography>
        </Container>
        <WinnerBanner
          winner={winner}
          winnerName={winner === "red" ? pRed : pYellow}
          handlePlayAgain={this.newGame}
        />
      </Box>
    );
  }
}

export default App;
