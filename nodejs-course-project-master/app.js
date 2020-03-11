const passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./db');
const errorHandler = require('./common/middlewares/error-handler');
const jwtAuth = require('./common/middlewares/jwt-auth');

require('./common/passport/jwt.strategy');

const app = express();

app.use(bodyParser.json());
app.use(passport.initialize());

app.use('/users', require('./modules/users/users.routes'));
app.use('/tasks', jwtAuth, require('./modules/tasks/tasks.routes'));
app.use('/auth', require('./modules/auth/auth.routes'));
app.use(errorHandler);

sequelize.sync({ alter: true });

app.listen(3002, () => console.log('Server is started'));