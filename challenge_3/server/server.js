const path = require('path');
const express = require('express');
const app = express();

app.use('*', (req, res, next) => {
  console.log(req.method, req.originalUrl);
  console.log(path.resolve())
  next();
})
app.use(express.static(path.resolve('client/public')));

const port = 3003;
app.listen(port, () => {
  console.log(`Bowling App listening on port ${port}`)
})

