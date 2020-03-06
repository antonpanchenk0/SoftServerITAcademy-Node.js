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

app.get('/name', (req, res, next)=>{
    console.log('HTTP method', req.method);
    req.table = 'Some table';
    next();
}, (req, res, next)=>{
    res.send('Hello');
}, (err, req, res ,next)=>{

});

app.use('/users', usersRouter);

app.listen(3002, () => console.log('Server is started'));