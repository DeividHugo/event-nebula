const express = require('express');
const eventAppRoutes = require('./src/apps/event/routes/appRoutes');
const userAppRoutes = require('./src/apps/user/routes/appRoutes');

const app = express();
const port = process.env.PORT || 3001; // Escolha a porta que deseja usar

app.use(express.json());

eventAppRoutes(app)
userAppRoutes(app)

app.listen(port, () => {
  console.log(`Server Express is running at ${port}`);
});

