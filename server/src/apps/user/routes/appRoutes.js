const userRoutes = require('./userRoutes');

module.exports = (app) => {
  app.use(`/api/`, userRoutes);
};
