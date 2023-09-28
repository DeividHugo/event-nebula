const sequelize = require('../services/databaseService');
const User = require('../../../apps/user/models/user');

const Subscription = sequelize.define('Subscription', {});

Subscription.belongsTo(User, {
  foreignKey: 'userId',
  onDelete: 'CASCADE',
});

Subscription.belongsTo(User, {
  foreignKey: 'eventId',
  onDelete: 'CASCADE',
});

module.exports = Subscription;

  