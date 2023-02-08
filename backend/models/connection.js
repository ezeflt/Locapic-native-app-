const mongoose = require('mongoose');

var connectionString = 'mongodb+srv://eze_flt:Blackops2@cluster0.qxydwzg.mongodb.net/allPlaces';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));

module.exports = connectionString