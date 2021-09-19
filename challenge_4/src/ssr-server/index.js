import express from 'express';
import axios from 'axios';
import path from 'path';
import React from 'react';
import cors from 'cors';
import { renderToNodeStream } from 'react-dom/server';

import Minesweeper from 'Components/Minesweeper/Minesweeper.js';

import minesweeperRouter from './routes.js';
import { getResults } from 'Database/controllers/controllers.js';
import { htmlStart, htmlEnd } from './template.js';
import { StoreProvider } from 'Store/store.js';
const app = express();

app.use('/static', express.static('dist/public'));
app.use(/(minesweeper)?/, minesweeperRouter);

app.get('/', async (req, res) => {
  const topTimes = await getResults();
  const minesweeperStream = renderToNodeStream(
    <StoreProvider>
      <Minesweeper />
    </StoreProvider>
  );

  res.write(htmlStart({ topTimes: topTimes }));
  minesweeperStream.pipe(res, { end: false });
  minesweeperStream.on('end', () => {
    res.write(htmlEnd());
    res.end();
  });
});


const port = 3500;
app.listen(port, () => console.log(`Minesweeper App is listening on port ${port}`));



