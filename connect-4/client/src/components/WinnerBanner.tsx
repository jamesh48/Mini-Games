import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import Typography from "@mui/material/Typography";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import HandshakeIcon from "@mui/icons-material/Handshake";
import ReplayIcon from "@mui/icons-material/Replay";
import { tokenColors } from "../theme.js";

const WinnerBanner: React.FC<{
  winner: undefined | string;
  winnerName: string;
  handlePlayAgain: () => void;
}> = ({ winner, winnerName, handlePlayAgain }) => {
  const text = winner === "tie" ? "It's a Tie!" : `${winnerName} Wins!`;
  return (
    <Dialog open={winner !== undefined} onClose={handlePlayAgain} maxWidth="xs" fullWidth>
      <DialogContent sx={{ textAlign: "center", pt: 4 }}>
        {winner === "tie" ? (
          <HandshakeIcon sx={{ fontSize: 72, color: "text.secondary" }} />
        ) : (
          <EmojiEventsIcon
            sx={{ fontSize: 72, color: winner ? tokenColors[winner]?.main : undefined }}
          />
        )}
        <Typography id="annouce-winner" variant="h4" fontWeight={700} sx={{ mt: 1 }}>
          {text}
        </Typography>
      </DialogContent>
      <DialogActions sx={{ justifyContent: "center", pb: 3 }}>
        <Button variant="contained" size="large" startIcon={<ReplayIcon />} onClick={handlePlayAgain}>
          Play again
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WinnerBanner;
