const express = require('express');
const app = express();
const path = require('path');
const db = require('../database/controllers.js');
const cors = require('cors');
app.use(cors());
app.use('*', (req, res, next) => {
  console.log(req.method, req.originalUrl);
  next();
})
app.use(express.static(path.resolve('client/public')));

app.get('/data', async ({ query }, res) => {
  const results = await db.search(query)
  res.send(results)
})

app.patch('/:q', async ({query}, res) => {
  const ok = await db.patch(query);
  res.send('ok');
})

app.listen(8000, () => {
  console.log('App listening on port 8000')
})