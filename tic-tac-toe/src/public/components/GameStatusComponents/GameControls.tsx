import React from 'react';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import ReplayRoundedIcon from '@mui/icons-material/ReplayRounded';
import RestartAltRoundedIcon from '@mui/icons-material/RestartAltRounded';
import { useGameContext, useConnectionContext } from 'GameStore';

export default () => {
  const [{ result, scores }, dispatch] = useGameContext();
  const { connection: { connected, seat } } = useConnectionContext();
  const canControl = connected && seat !== undefined && seat !== 'spectator';
  const hasScores = scores.X + scores.O + scores.draws > 0;

  return (
    <Stack direction='row' spacing={{ xs: 1.5, sm: 2 }} justifyContent='center'>
      <Button id='new-game-button' variant='contained' disableElevation startIcon={<ReplayRoundedIcon />}
        disabled={!canControl} onClick={() => dispatch({ type: 'NEW ROUND' })} sx={{ flex: { xs: 1, sm: 'none' } }}>
        {result ? 'Next round' : 'Restart round'}
      </Button>
      <Button id='reset-scores-button' variant='outlined' color='inherit' startIcon={<RestartAltRoundedIcon />}
        disabled={!canControl || !hasScores} onClick={() => dispatch({ type: 'RESET SCORES' })} sx={{ flex: { xs: 1, sm: 'none' } }}>
        Reset scores
      </Button>
    </Stack>
  );
};
