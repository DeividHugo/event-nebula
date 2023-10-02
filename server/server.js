const express = require('express');
const eventAppRoutes = require('./src/apps/event/routes/appRoutes');
const userAppRoutes = require('./src/apps/user/routes/appRoutes');
const authAppRoutes = require('./src/apps/auth/routes/appRoutes')

const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());

eventAppRoutes(app)
userAppRoutes(app)
authAppRoutes(app)


app.listen(port, () => {
  console.log(`Server Express is running at ${port}`);
});

