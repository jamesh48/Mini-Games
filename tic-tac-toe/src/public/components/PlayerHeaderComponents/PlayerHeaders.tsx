import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import InputBase from '@mui/material/InputBase';
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import EditRoundedIcon from '@mui/icons-material/EditRounded';
import HandshakeRoundedIcon from '@mui/icons-material/HandshakeRounded';
import { useGameContext, useConnectionContext, playerLabel, Mark } from 'GameStore';
import MarkIcon from 'Components/MarkIcon';

const PlayerCard = ({ mark }: { mark: Mark }) => {
  const [{ playerNames, scores, currentPlayer, result }, dispatch] = useGameContext();
  const { connection: { online, seat, players }, canPlay } = useConnectionContext();
  const [draft, setDraft] = useState<string | undefined>(undefined);

  const color = mark === 'X' ? 'primary' : 'secondary';
  const isTurn = !result && currentPlayer === mark;
  const isWinner = result?.kind === 'win' && result.winner === mark;
  const isYou = online && seat === mark;
  const isAbsent = online && !players[mark];
  const label = playerLabel(playerNames, mark);

  const save = () => {
    if (draft !== undefined && draft.trim() !== playerNames[mark]) {
      dispatch({ type: 'SET PLAYER NAME', mark, name: draft.trim() });
    }
    setDraft(undefined);
  };

  return (
    <Paper
      variant='outlined'
      className='player-name-headers'
      id={`p-${mark.toLowerCase()}-header`}
      sx={{
        flex: 1,
        minWidth: 0,
        px: { xs: 1.25, sm: 2 },
        py: { xs: 1, sm: 1.5 },
        borderWidth: 2,
        borderColor: isTurn || isWinner ? `${color}.main` : 'divider',
        transition: 'border-color 150ms'
      }}
    >
      <Stack direction='row' spacing={{ xs: 1, sm: 1.5 }} alignItems='center'>
        <MarkIcon mark={mark} sx={{ fontSize: { xs: 28, sm: 40 }, opacity: isAbsent ? 0.35 : 1 }} />
        <Stack minWidth={0} flex={1}>
          {draft !== undefined ? (
            <InputBase
              autoFocus
              value={draft}
              placeholder={`Player ${mark}`}
              onChange={(event) => setDraft(event.target.value)}
              onBlur={save}
              onKeyDown={(event) => {
                if (event.key === 'Enter') save();
                if (event.key === 'Escape') setDraft(undefined);
              }}
              inputProps={{ maxLength: 20, 'aria-label': `Name for player ${mark}`, id: `p-${mark.toLowerCase()}-name` }}
              sx={{ typography: 'body2', fontWeight: 500, borderBottom: 2, borderColor: `${color}.main`, '& input': { p: 0 } }}
            />
          ) : (
            <Stack direction='row' alignItems='center' minWidth={0}>
              <Typography variant='body2' color='text.secondary' fontWeight={500} noWrap title={label}>
                {label}
              </Typography>
              {canPlay(mark) && (
                <Tooltip title='Edit name'>
                  <IconButton size='small' aria-label={`Edit name for player ${mark}`} onClick={() => setDraft(playerNames[mark])}
                    sx={{ p: 0.25, ml: 0.25 }}>
                    <EditRoundedIcon sx={{ fontSize: 14 }} />
                  </IconButton>
                </Tooltip>
              )}
            </Stack>
          )}
          <Stack direction='row' alignItems='baseline' spacing={0.75}>
            <Typography variant='h5' fontWeight={700} lineHeight={1.2} id={`p-${mark.toLowerCase()}-tally`}>
              {scores[mark]}
            </Typography>
            {(isYou || isAbsent) && <Typography variant='caption' color='text.secondary' noWrap>{isYou ? 'you' : 'not joined'}</Typography>}
          </Stack>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default () => {
  const [{ scores }] = useGameContext();

  return (
    <Stack id='player-headers' direction='row' spacing={{ xs: 1, sm: 2 }} alignItems='stretch'>
      <PlayerCard mark='X' />
      <Paper variant='outlined' sx={{ px: { xs: 1, sm: 2 }, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', borderWidth: 2 }}>
        <HandshakeRoundedIcon color='action' fontSize='small' />
        <Typography variant='caption' color='text.secondary' lineHeight={1.2}>Draws</Typography>
        <Typography variant='subtitle1' fontWeight={700} lineHeight={1.2} id='draw-tally'>{scores.draws}</Typography>
      </Paper>
      <PlayerCard mark='O' />
    </Stack>
  );
};
