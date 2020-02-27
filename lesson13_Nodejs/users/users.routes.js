const { Router } = require('express');
const usersController = require('./users.controller');

const router = new Router();

router.get('/', (req, res, next)=>{

});

router.post('/', usersController.createUser);

router.put('/:id', (req, res, next)=>{

});

router.delete('/:id', (req, res, next)=>{

});

module.exports = router;