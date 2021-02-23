// Libs
const { Sequelize } = require('sequelize');

// Local
const environment = require('../environment');

const options = {
	dialect: 'mysql',
	host: environment.db.host,
};

// Init sequelize instance
const sequelize = new Sequelize(environment.db.name, environment.db.user, environment.db.pass, options);

module.exports.sequelize = sequelize;
