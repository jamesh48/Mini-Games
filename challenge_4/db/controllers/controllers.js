const sequelize = require('Database/config/config.js');

module.exports = {

  postNewUser: async (userName, userPass) => {
    try {
      const { userLogins } = sequelize.models;
      await userLogins.create({ username: userName, userPass: userPass });
      return 'New User Posted!';
    } catch (err) {
      res.send(err);
    }
  },

  validateUser: async (userName, userPass) => {
    try {
      const { userLogins } = sequelize.models;

      const loginTest = await userLogins.findAll({
        limit: 1,
        where: { username: userName }
      });

      const loginPasswordTest = await userLogins.findAll({
        limit: 1,
        where: { username: userName, userPass: userPass }
      });

      if (loginTest.length !== 0 && !loginPasswordTest.length) return 'wrong password';
      if (loginTest.length !== 0) return false;
      return true;
    } catch (err) {
      throw err;
    }
  },

  getResults: async (skillLevel, username) => {
    try {
      const { beginnerScores, intermediateScores, advancedScores } = sequelize.models;

      let whereStatement = {}
      if (username) whereStatement.username = username

      const determinedSkillLevel =
        skillLevel === 'beginner' ? beginnerScores
          : skillLevel === 'intermediate' ? intermediateScores
            : advancedScores;

      const scoreResults = await determinedSkillLevel.findAll({
        where: whereStatement,
        limit: 10,
        order: [
          ['time', 'ASC'],
        ],
      });
      return scoreResults;
    } catch (err) {
      throw err;
    }
  },

  postResult: async (skillLevel, time, definedUserName) => {
    const { beginnerScores, intermediateScores, advancedScores } = sequelize.models;

    const determinedSkillLevel =
      skillLevel === 'beginner' ? beginnerScores
        : skillLevel === 'intermediate' ? intermediateScores
          : advancedScores;

    try {
      await determinedSkillLevel.create({ username: definedUserName, time: time });
      return 'ok';
    } catch (err) {
      console.log(err);
      throw err;
    }
  }
}