import express from 'express';
import path from 'path';
import React from 'react';
import TicTacToe from 'Components/TicTacToe.js';
import { htmlStart, htmlEnd } from './template.js';
import { renderToNodeStream } from 'react-dom/server';

const app = express();

app.use('*', (req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
});

app.use('/static', express.static(path.resolve(__dirname, '../../dist/public')));


app.get('/', (req, res) => {
  const ticTacToeStream = renderToNodeStream(
    <TicTacToe />
  );

  res.write(htmlStart());
  ticTacToeStream.pipe(res, { end: false });
  ticTacToeStream.on('end', () => {
    res.write(htmlEnd());
    res.end();
  })
})

const port = 3650;
app.listen(port, () => console.log(`Tic Tac Toe App is listening on port ${port}`));
