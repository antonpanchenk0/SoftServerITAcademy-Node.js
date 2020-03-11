const { LoginDto } = require('./auth.dtos');
const { Router } = require('express');
const authController = require('./auth.controller');
const createValidator = require('../../common/middlewares/create-validator');

const router = new Router();

router.post('/login', createValidator(LoginDto), authController.login);

module.exports = router;