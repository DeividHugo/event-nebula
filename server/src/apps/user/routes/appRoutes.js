const userRoutes = require('./userRoutes');
const authMiddleware = require('../../auth/middlewares/authMiddleware');

module.exports = (app) => {
  app.use(`/api/`, authMiddleware, userRoutes);
};
