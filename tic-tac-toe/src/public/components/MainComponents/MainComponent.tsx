import React from 'react';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import WifiOffRoundedIcon from '@mui/icons-material/WifiOffRounded';
import { useConnectionContext } from 'GameStore';

import Header from 'Components/HeaderComponents/Header';
import PlayerHeaders from 'Components/PlayerHeaderComponents/PlayerHeaders';
import GameStatus from 'Components/GameStatusComponents/GameStatus';
import Board from 'Components/BoardComponents/Board';
import GameControls from 'Components/GameStatusComponents/GameControls';

// Phones turned sideways: board on the left, everything else beside it
const shortLandscape = '@media (orientation: landscape) and (max-height: 560px)';

const RejectedScreen = () => (
  <Stack id='rejected' alignItems='center' justifyContent='center' textAlign='center' spacing={1} sx={{ height: '100%', p: 3 }}>
    <WifiOffRoundedIcon sx={{ fontSize: 64, color: 'text.secondary' }} />
    <Typography variant='h5' component='h1' fontWeight={700}>Online play is off</Typography>
    <Typography color='text.secondary'>Ask the host to turn on Play online, then refresh this page.</Typography>
  </Stack>
);

export default () => {
  const { connection: { rejected } } = useConnectionContext();

  return (
    // The whole game fits the screen, so the page never scrolls; the board takes whatever room is left
    <Box id='container' sx={{
      height: '100vh',
      '@supports (height: 100dvh)': { height: '100dvh' },
      display: 'flex',
      flexDirection: 'column',
      overflow: 'hidden'
    }}>
      {rejected ? <RejectedScreen /> : (
        <>
          <Header />
          <Box component='main' sx={{
            flex: 1,
            minHeight: 0,
            width: '100%',
            maxWidth: 560,
            mx: 'auto',
            px: 2,
            py: { xs: 1.5, sm: 3 },
            pb: { xs: 'max(12px, env(safe-area-inset-bottom))', sm: 3 },
            display: 'grid',
            gap: { xs: 1.5, sm: 2 },
            gridTemplateColumns: 'minmax(0, 1fr)',
            gridTemplateRows: 'auto auto minmax(0, 1fr) auto',
            gridTemplateAreas: '"players" "status" "board" "controls"',
            [shortLandscape]: {
              maxWidth: 960,
              py: 1.5,
              gridTemplateColumns: 'minmax(0, 1fr) minmax(300px, 440px)',
              gridTemplateRows: 'auto auto auto minmax(0, 1fr)',
              gridTemplateAreas: '"board players" "board status" "board controls" "board ."'
            }
          }}>
            <Box sx={{ gridArea: 'players', minWidth: 0 }}><PlayerHeaders /></Box>
            <Box sx={{ gridArea: 'status', minWidth: 0 }}><GameStatus /></Box>
            <Box sx={{ gridArea: 'board', minHeight: 0 }}><Board /></Box>
            <Box sx={{ gridArea: 'controls', minWidth: 0 }}><GameControls /></Box>
          </Box>
        </>
      )}
    </Box>
  );
};
