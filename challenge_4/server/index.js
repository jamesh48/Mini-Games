const express = require('express');
const path = require('path');
const app = express();
const { getResults, postResult, postNewUser, validateUser } = require(path.resolve('db/controllers/controllers.js'));
const cors = require('cors');
const port = 3500;

app.use(cors());

app.use(express.static(path.resolve('public')));

app.get('/minesweeper-topTimes', async ({ query: { skillLevel, username } }, res) => {
  try {
    const topScores = await getResults(skillLevel, username);
    res.json(topScores);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
})

app.get('/minesweeper-validateUser', async ({ query: { userName, userPass } }, res) => {
  try {
    const test = await validateUser(userName, userPass);
    if (!test) {
      res.send('already exists')
    } else if (test === 'wrong password') {
      res.send('wrong password')
    } else {
      res.send('does not exist');
    }
  } catch (err) {
    console.error(err);
    res.send(err);
  }
});

app.post('/minesweeper-createUser', async ({ query: { userName, userPass } }, res) => {
  try {
    const posted = await postNewUser(userName, userPass);
    res.send(posted);
  } catch (err) {
    res.send(err);
  }
});

app.post('/minesweeper-topTimes', async ({ query: { skillLevel, resultTime: timerTime, definedUserName } }, res) => {
  try {
    await postResult(skillLevel, timerTime, definedUserName);
    res.send('ok');
  } catch (err) {
    res.send(err);
  }
});

app.listen(port, () => {
  console.log(`Minesweeper listening on port ${port}`);
});

