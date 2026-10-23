import express from 'express';
import http from 'http';
import os from 'os';
import path from 'path';
import React from 'react';
import { Server } from 'socket.io';
import { CacheProvider } from '@emotion/react';
import createEmotionServer from '@emotion/server/create-instance';
import { renderToString } from 'react-dom/server';
import TicTacToe from 'Components/TicTacToe';
import createEmotionCache from '../public/createEmotionCache';
import { startOnlinePlay, isThisComputer, tunnelCheckToken } from './onlinePlay';
import { htmlStart, htmlEnd } from './template';

const app = express();
const server = http.createServer(app);
const port = Number(process.env.PORT) || 3650;
const onlinePlay = startOnlinePlay(new Server(server), port);

// Polled while the tunnel starts, so it comes before the request log
app.get('/tunnel-check', (req, res) => {
  res.send(tunnelCheckToken);
});

app.use('*', (req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});

app.use('/static', express.static(path.resolve(__dirname, '../../dist/public')));

app.get('/', (req, res) => {
  const snapshot = onlinePlay.snapshot(isThisComputer(req.socket.remoteAddress, req.headers));
  const cache = createEmotionCache();
  const { extractCriticalToChunks, constructStyleTagsFromChunks } = createEmotionServer(cache);

  const html = renderToString(
    <CacheProvider value={cache}>
      <TicTacToe snapshot={snapshot} />
    </CacheProvider>
  );
  const styleTags = constructStyleTagsFromChunks(extractCriticalToChunks(html));

  res.send(htmlStart(styleTags) + html + htmlEnd(snapshot));
});

// Don't leave a tunnel running after the server stops (nodemon restarts send SIGUSR2)
['SIGINT', 'SIGTERM', 'SIGUSR2'].forEach((signal) =>
  process.on(signal, () => {
    onlinePlay.stopTunnel();
    process.exit(0);
  })
);

const networkAddresses = () =>
  Object.values(os.networkInterfaces())
    .flatMap((nets) => nets ?? [])
    .filter((net) => net.family === 'IPv4' && !net.internal)
    .map((net) => `http://${net.address}:${port}`);

server.listen(port, () => {
  console.log(`Tic Tac Toe App is listening on port ${port}`);
  // Other computers on the network can use these once online play is on
  networkAddresses().forEach((address) => console.log(`  On your network: ${address}`));
});
