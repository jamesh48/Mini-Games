const sequelize = require('../config/config.js');
module.exports = {
  getResults: async (skillLevel) => {
    const { beginnerScores, intermediateScores } = sequelize.models;
    if (skillLevel === 'beginner') {
      const scoreResults = await beginnerScores.findAll({
        order: [
          ['time', 'ASC'],
        ],
      });
      return scoreResults;
    }

    if (skillLevel === 'intermediate') {
      const scoreResults = await intermediateScores.findAll({
        order: [
          ['time', 'ASC'],
        ],
      });
      return scoreResults;
    }

    if (skillLevel === 'advanced') {
      const scoreResults = await advancedScores.findAll({
        order: [
          ['time', 'ASC'],
        ],
      });
      return scoreResults;
    }


  },
  postResult: async (skillLevel, time) => {
    const { beginnerScores, intermediateScores } = sequelize.models;

    if (skillLevel === 'beginner') {
      console.log('xxx')
      try {
        await beginnerScores.create({ username: 'jamesh48', time: time });
      } catch (err) {
        console.log(err);
        throw err;
      }
    }
    return 'ok';
  }
}