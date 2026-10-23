import React, { useState } from 'react';
import Alert from '@mui/material/Alert';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import EmojiEventsRoundedIcon from '@mui/icons-material/EmojiEventsRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import { useGameContext, useConnectionContext, playerLabel, otherPlayer } from 'GameStore';
import InviteLink from 'Components/HeaderComponents/InviteLink';
import MarkIcon from 'Components/MarkIcon';

// Connection and online-play messages come first; otherwise whose turn it is, or how the round ended
export default () => {
  const [{ result, currentPlayer, playerNames }] = useGameContext();
  const { connection: { connected, seat, isHost, online, tunnel, players }, canPlay } = useConnectionContext();
  const [dismissedError, setDismissedError] = useState<string>();

  const mySeat = seat === 'X' || seat === 'O' ? seat : undefined;
  const opponent = mySeat && otherPlayer(mySeat);

  if (!connected) {
    return seat === undefined
      ? <Alert id='game-status' severity='info' icon={<CircularProgress size={20} color='inherit' />}>Connecting…</Alert>
      : <Alert id='game-status' severity='error'>Disconnected from the server. Reconnecting…</Alert>;
  }
  if (isHost && tunnel.status === 'error' && tunnel.error !== dismissedError) {
    return <Alert id='game-status' severity='error' onClose={() => setDismissedError(tunnel.error)}>{tunnel.error}</Alert>;
  }
  if (isHost && tunnel.status === 'starting') {
    return (
      <Alert id='game-status' severity='info' icon={<CircularProgress size={20} color='inherit' />}>
        Starting the online link… This can take up to a minute.
      </Alert>
    );
  }
  if (online && opponent && !players[opponent]) {
    return isHost && tunnel.url ? (
      <Alert id='game-status' severity='warning' sx={{ '& .MuiAlert-message': { minWidth: 0, flex: 1 } }}>
        <Typography variant='body2' mb={0.5}>Waiting for an opponent. Send them this link:</Typography>
        <InviteLink url={tunnel.url} />
      </Alert>
    ) : (
      <Alert id='game-status' severity='warning'>Waiting for {playerLabel(playerNames, opponent)} to join…</Alert>
    );
  }

  if (result?.kind === 'win') {
    return (
      <Alert id='game-status' severity='success' variant='filled' icon={<EmojiEventsRoundedIcon />}>
        {mySeat === result.winner ? 'You win' : `${playerLabel(playerNames, result.winner)} wins`} the round!
      </Alert>
    );
  }

  if (result?.kind === 'draw') {
    return (
      <Alert id='game-status' severity='info' variant='filled' icon={<HandshakeRoundedIcon />}>
        It&apos;s a draw. Nobody wins this round.
      </Alert>
    );
  }

  const label = playerLabel(playerNames, currentPlayer);
  return (
    <Alert id='game-status' variant='outlined' icon={<MarkIcon mark={currentPlayer} />}
      sx={{ color: 'text.primary', bgcolor: 'background.paper', borderColor: currentPlayer === 'X' ? 'primary.main' : 'secondary.main' }}>
      {seat === 'spectator'
        ? `${label}'s turn · You're watching`
        : !canPlay(currentPlayer)
        ? `Waiting for ${label}…`
        : mySeat
        ? 'Your turn'
        : `${label}'s turn`}
    </Alert>
  );
};
