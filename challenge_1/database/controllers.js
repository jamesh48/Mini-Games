const path = require('path');
const db = require(path.resolve(__dirname + '/mongoDB.js'));
const HistoricalEvent = require('./historical_event_model.js');
const mongoose = require('mongoose');
const connection = mongoose.connection;

module.exports = {
  search: async ({ searchQuery, offset, limit }) => {
    const historicalResults = await HistoricalEvent.find({ category2: searchQuery });
    const numberOfResults = historicalResults.length;
    return {
      results: historicalResults.slice(Number(offset), Number(offset) + Number(limit)),
      totalPages: Math.ceil(numberOfResults / limit)
    };
  }
};
