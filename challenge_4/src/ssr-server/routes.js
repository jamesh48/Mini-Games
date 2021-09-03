import express from 'express';
const minesweeper = express.Router();
import axios from 'axios';
import { getResults, postResult, postNewUser, validateUser } from 'Database/controllers/controllers.js';

minesweeper.get('/minesweeper-topTimes', async ({ query: { skillLevel, username } }, res) => {
  try {
    const topScores = await getResults(skillLevel, username);
    res.json(topScores);
  } catch (err) {
    console.error(err);
    res.send(err);
  }
})

minesweeper.get('/minesweeper-validateUser', async ({ query: { userName, userPass } }, res) => {
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

minesweeper.post('/minesweeper-createUser', async ({ query: { userName, userPass } }, res) => {
  try {
    const posted = await postNewUser(userName, userPass);
    res.send(posted);
  } catch (err) {
    res.send(err);
  }
});

minesweeper.post('/minesweeper-topTimes', async ({ query: { skillLevel, resultTime: timerTime, definedUserName } }, res) => {
  try {
    await postResult(skillLevel, timerTime, definedUserName);
    res.send('ok');
  } catch (err) {
    res.send(err);
  }
});

export default minesweeper;