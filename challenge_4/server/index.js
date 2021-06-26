const express = require('express');
const path = require('path');
const app = express();
const { getResults, postResult, postNewUser, validateUser } = require('../db/controllers/controllers.js');
const cors = require('cors');

app.use(cors());

app.use(express.static(path.resolve('public')));

app.get('/topTimes', async ({ query: { skillLevel, username } }, res) => {
  const topScores = await getResults(skillLevel, username);
  res.json(topScores);
})

app.get('/validateUser', async ({ query: { userName, userPass } }, res) => {
  try {
    const test = await validateUser(userName, userPass);

    if (!test) {
      res.send('already exists')
    } else if (test === 'wrong password') {
      res.send('wrong password')
    } else {
      res.send('does not exist');
    }
  } catch(err) {
    console.error(err);
    res.send(err);
  }
});

app.post('/createUser', async ({query: {userName, userPass}}, res) => {
  const posted = await postNewUser(userName, userPass);

  res.send(posted);
})

app.post('/topTimes', async ({ query: { skillLevel, timerTime, solidUserName } }, res) => {
  try {

    await postResult(skillLevel, timerTime, solidUserName);
    res.send('ok');
  } catch (err) {
    res.send(err);
  }
})
app.listen(3500, () => {
  console.log('Minesweeper listening on port 3500');
})

