const { DataTypes } = require('sequelize');
const sequelize = require('../services/databaseService');
const User = require('../../../apps/user/models/user');

const Event = sequelize.define('Event', {
  name: DataTypes.STRING,
  pathVideo: DataTypes.STRING,
});

Event.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

module.exports = Event
  