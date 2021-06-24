const express = require('express');
const path = require('path');
const app = express();
const { getResults, postResult } = require('../db/controllers/controllers.js');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.resolve('public')));

app.get('/topTimes', async ({query: {skillLevel}}, res) => {
  const topScores = await getResults(skillLevel);
  res.json(topScores);
})

app.post('/topTimes', async ({query: { skillLevel, timerTime }}, res) => {
  try {
    console.log(skillLevel, timerTime)
    await postResult(skillLevel, timerTime);
    res.send('ok');
  } catch(err) {
    res.send(err);
  }
})
app.listen(3500, () => {
  console.log('Minesweeper listening on port 3500');
})

