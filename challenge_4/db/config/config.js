require('dotenv').config({ path: require('path').resolve('.env') });
const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.PGDATABASE, process.env.PGUSER, process.env.PGPASSWORD, {
  host: process.env.PGHOST,
  dialect: 'postgres',
  logging: false,
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})()

const model = name => database.models[name];

const beginnerScores = require(`../models/beginner_scores_model.js`)(sequelize, Sequelize.DataTypes);
const intermediateScores = require(`../models/intermediate_scores_model.js`)(sequelize, Sequelize.DataTypes);
const advancedScores = require(`../models/advanced_scores_model.js`)(sequelize, Sequelize.DataTypes);
const userLogins = require('../models/user_login_model.js')(sequelize, Sequelize.DataTypes);

module.exports = (database) = {
  sequelize: sequelize,
  models: { beginnerScores, intermediateScores, advancedScores, userLogins },
  // connect,
  model,
};