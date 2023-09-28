const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');

const User = sequelize.define('User', {
  name: DataTypes.STRING,
});

module.exports = User;
