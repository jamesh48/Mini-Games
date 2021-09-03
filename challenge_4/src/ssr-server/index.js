import express from 'express';
import axios from 'axios';
import path from 'path';
import React from 'react';
import cors from 'cors';
import { renderToNodeStream } from 'react-dom/server';
import Minesweeper from 'Components/App/App.js';
import minesweeperRouter from './routes.js';
import template from './template.js';
const { htmlStart, htmlEnd } = template;

const app = express();
const port = 3500;

app.use("/static", express.static('dist/public'));
app.use(/(minesweeper)?/, minesweeperRouter);

app.get('/', (req, res) => {
  const minesweeperStream = renderToNodeStream(<Minesweeper />);
  res.write(htmlStart);
  minesweeperStream.pipe(res, { end: false });
  minesweeperStream.on("end", () => {
    res.write(htmlEnd);
    res.end();
  });
});

app.listen(port, () => {
  `Minesweeper App is listening on port-> ${port}`
});



