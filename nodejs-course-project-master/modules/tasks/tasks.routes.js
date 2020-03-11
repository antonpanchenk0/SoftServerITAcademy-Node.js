const { CreateTaskDto, UpdateTaskDto } = require('./task.dtos');
const { Router } = require('express');
const tasksController = require('./tasks.controller');
const createValidator = require('../../common/middlewares/create-validator');

const router = new Router();

router.get('/', tasksController.findMany);

router.get('/:id', tasksController.findOneById);

router.post('/', createValidator(CreateTaskDto), tasksController.createOne);

router.put('/:id', createValidator(UpdateTaskDto), tasksController.updateOne);

router.delete('/:id', tasksController.removeOne);

module.exports = router;