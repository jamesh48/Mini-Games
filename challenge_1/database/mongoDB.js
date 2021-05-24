const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/historicalevents', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const db = mongoose.connection;

db.on('error', () => { console.log('error') });
db.once('open', () => {
  console.log(`mongoose successfully connected`);
})