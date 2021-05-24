const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historicalEventSchema = new Schema({
  date: String,
  description: String,
  lang: String,
  category1: String,
  category2: String,
  granularity: String
});

const HistoricalEvent = mongoose.model('HistoricalEvent', historicalEventSchema);

module.exports = HistoricalEvent;