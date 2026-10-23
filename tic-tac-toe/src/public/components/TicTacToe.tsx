import React from 'react';
import type { Socket } from 'socket.io-client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import theme from 'Theme';
import { GameStoreProvider, ServerSnapshot } from 'GameStore';
import MainComponent from 'Components/MainComponents/MainComponent';

interface TicTacToeProps {
  snapshot?: ServerSnapshot;
  createSocket?: () => Socket;
}

export default ({ snapshot, createSocket }: TicTacToeProps) => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <GameStoreProvider snapshot={snapshot} createSocket={createSocket}>
      <MainComponent />
    </GameStoreProvider>
  </ThemeProvider>
);
