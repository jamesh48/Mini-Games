const express = require('express');
const path = require('path');
const app = express();


app.use(express.static(path.resolve('public')));

app.listen(3500, () => {
 console.log('Minesweeper listening on port 3500');
})

