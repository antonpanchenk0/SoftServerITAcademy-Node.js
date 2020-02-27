const Sequelize = require('sequelize');
const express = require('express');
const bodyParser = require('body-parser');
const usersRouter = require('./users/users.routes');

//DataBase Namea, login, password
const sequelize = new Sequelize('testapp', 'root', 'root', {
    host: '127.0.0.1',
    port: 5432,
    dialect: 'postgres',
});

const app = express();

sequelize
    .authenticate()
    .then(() => console.log('DB connected'))
    .catch(err => console.log(err));

app.use(bodyParser.json());

app.use((req, res, next)=>{
    console.log('Any request');
    next();
});

app.use('/users', usersRouter);

app.listen(3002, () => console.log('Server is started'));