const mongoose = require('mongoose');

const schema = mongoose.Schema({
	_id: mongoose.Schema.Types.ObjectId,
	name: String,
	status: String,
	lastUpdated: Date,
});

module.exports = mongoose.model('___ApiName___', schema);
