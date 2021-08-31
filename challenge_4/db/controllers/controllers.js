const sequelize = require('../config/config.js');
module.exports = {

  postNewUser: async (userName, userPass) => {
    const { userLogins } = sequelize.models;

    await userLogins.create({username: userName, userPass: userPass});
    return 'ok';
  },

  validateUser: async (userName, userPass) => {
    const { userLogins } = sequelize.models;

    const loginTest = await userLogins.findAll({
      limit: 1,
      where: { username: userName }
    });

    const loginPasswordTest = await userLogins.findAll({
      limit: 1,
      where: {username: userName, userPass: userPass}
    });

    if (loginTest.length !== 0 && loginPasswordTest.length === 0) {
      return 'wrong password';
    }

    if (loginTest.length !== 0) {
      return false;
    } else {
      return true;
    }
    // return 'ok';
    // return loginTest;
  },

  getResults: async (skillLevel, username) => {
    const { beginnerScores, intermediateScores, advancedScores } = sequelize.models;
    let whereStatement = {}
    if (username) {
      whereStatement.username = username
    }
    if (skillLevel === 'beginner') {
      const scoreResults = await beginnerScores.findAll({
        where: whereStatement,
        limit: 10,
        order: [
          ['time', 'ASC'],
        ],
      });
      return scoreResults;
    }

    if (skillLevel === 'intermediate') {
      const scoreResults = await intermediateScores.findAll({
        limit: 10,
        order: [
          ['time', 'ASC'],
        ],
      });
      return scoreResults;
    }

    if (skillLevel === 'advanced') {
      const scoreResults = await advancedScores.findAll({
        limit: 10,
        order: [
          ['time', 'ASC'],
        ],
      });
      return scoreResults;
    }


  },

  postResult: async (skillLevel, time, definedUserName) => {
    const { beginnerScores, intermediateScores, advancedScores } = sequelize.models;

    if (skillLevel === 'beginner') {
      try {
        await beginnerScores.create({ username: definedUserName, time: time });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }

    if (skillLevel === 'intermediate') {
      try {
        await intermediateScores.create({ username: definedUserName, time: time });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }

    if (skillLevel === 'advanced') {
      try {
        await advancedScores.create({ username: definedUserName, time: time });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
    return 'ok';
  }
}