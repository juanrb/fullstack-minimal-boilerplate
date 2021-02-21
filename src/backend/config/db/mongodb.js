// Libs
const mongoose = require('mongoose');

// Local
const environment = require('../environment');

const options = { useNewUrlParser: true, useUnifiedTopology: true }; // avoids deprecation warnings
mongoose.connect(environment.db.host, options);

module.exports.db = mongoose.connection;
