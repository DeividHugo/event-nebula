const eventRoutes = require('./eventRoutes');
const subscriptionRoutes = require('./subscriptionRoutes');

module.exports = (app) => {
  app.use(`/api/`, eventRoutes);
  app.use(`/api/`, subscriptionRoutes);
};
