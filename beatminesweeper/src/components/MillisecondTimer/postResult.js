import axios from 'axios';
import regeneratorRuntime from "regenerator-runtime";

export default async (skillLevel, definedUserName, timerTime) => {
  const { data: newTopTimes } = await axios.post('/minesweeper-topTimes', null, { params: { skillLevel, definedUserName, timerTime } });
  return newTopTimes;
};