const Joi = require('joi');

const CreateTaskDto = Joi.object().keys({
    title: Joi.string().min(1).required(),
    description: Joi.string(),
});

const UpdateTaskDto = Joi.object().keys({
    title: Joi.string().min(1),
    description: Joi.string(),
});

module.exports = {
    CreateTaskDto,
    UpdateTaskDto,
};