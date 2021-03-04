const { DataTypes } = require('sequelize');
const { sequelize } = require('../../config/db');

const model = {
	id: {
		type: DataTypes.INTEGER,
		allowNull: false,
		autoIncrement: true,
		primaryKey: true,
	},
};

module.exports = sequelize.define('___ApiName___', model);
