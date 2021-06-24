require('dotenv').config({ path: __dirname + '/../../.env' });
const Sequelize = require('sequelize');

console.log(__dirname + '/../.env')
console.log(process.env.PGDATABASE, process.env.PGUSER)
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


module.exports = (database) = {
  sequelize: sequelize,
  models: { beginnerScores, intermediateScores },
  // connect,
  model,
};