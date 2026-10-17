import React from 'react';
import { useBoardContext } from 'BoardStore';
import { useGlobalContext } from 'GlobalStore';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import FlagIcon from '@mui/icons-material/Flag';
import './smileystyles.scss';

export default React.memo(() => {
  const [{ dimensions: { numberOfMines }, timerOn }, globalDispatch] = useGlobalContext();
  const [{ surprised, flagsRemaining }, boardDispatch] = useBoardContext();

  const resetCallback = () => {
    boardDispatch({ type: 'RESET SMILES' });
    boardDispatch({ type: 'SET FLAGS REMAINING', payload: numberOfMines });
    globalDispatch({ type: 'SWITCH TIMER OFF' });
  };

  const isVictory = timerOn === 'VICTORY' || timerOn === 'FREEZE WIN';
  const isDead = timerOn === 'FREEZE DEAD' || surprised === 'dead';

  const accentColor = isVictory ? 'secondary.main' : isDead ? 'error.main' : 'primary.main';

  const smileyId =
    surprised === 'dead' ? 'dead-guy'
      : isVictory ? 'victory-guy'
        : surprised === true ? 'surprised-guy'
          : 'smiley-guy';

  return (
    <Box
      id="smiley-bar"
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        bgcolor: 'background.paper',
        border: (t) => `2px solid ${
          isVictory ? t.palette.secondary.main
          : isDead ? (t.palette.error?.main ?? '#c62828')
          : t.palette.primary.main
        }`,
        px: 1.5,
        minHeight: 36,
        transition: 'border-color 0.3s',
      }}
    >
      {/* Flags remaining */}
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, minWidth: 52 }}>
        <FlagIcon sx={{ color: accentColor, fontSize: '1rem', transition: 'color 0.3s' }} />
        <Typography
          sx={{
            color: accentColor,
            fontFamily: '"Roboto Mono", monospace',
            fontWeight: 700,
            fontSize: '0.9rem',
            fontVariantNumeric: 'tabular-nums',
            transition: 'color 0.3s',
          }}
        >
          {flagsRemaining}
        </Typography>
      </Box>

      {/* Smiley face */}
      <Tooltip title="Reset game" placement="top" arrow>
        <Box
          className="smiley-guy"
          id={smileyId}
          onClick={resetCallback}
          sx={{
            cursor: 'pointer',
            transition: 'transform 0.1s',
            '&:hover': { transform: 'scale(1.2)' },
            '&:active': { transform: 'scale(0.92)' },
          }}
        />
      </Tooltip>

      {/* Mirror spacer to keep smiley centered */}
      <Box sx={{ minWidth: 52 }} />
    </Box>
  );
});
