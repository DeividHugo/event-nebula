const eventRoutes = require('./eventRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');
const authMiddleware = require('../../auth/middlewares/authMiddleware');

module.exports = (app) => {
  app.use(`/api/`, authMiddleware, eventRoutes);
  app.use(`/api/`, authMiddleware, subscriptionRoutes);
};
