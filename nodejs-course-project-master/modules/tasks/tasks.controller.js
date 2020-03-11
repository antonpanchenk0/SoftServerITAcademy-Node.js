const tasksService = require('./tasks.service');

class TasksController {

    async findMany(req, res, next) {
        try {
            const tasks = await tasksService.findMany(req.user);
            res.json(tasks);
        } catch (e) {
            next(e);
        }
    }

    async findOneById(req, res, next) {
        try {
            const user = await tasksService.findOneById(req.params.id);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async createOne(req, res, next) {
        try {
            const task = await tasksService.createOne(req.user, req.body);
            res.json(task);
        } catch (e) {
            console.log(e);
            next(e);
        }

    }

    async updateOne(req, res, next) {
        try {
            const user = await tasksService.updateOne(req.params.id, req.body);
            res.json(user);
        } catch (e) {
            next(e);
        }
    }

    async removeOne(req, res, next) {
        try {
            const result = await tasksService.removeOne(req.params.id);
            res.json(result);
        } catch (e) {
            next(e);
        }
    }
}

const tasksController = new TasksController();
module.exports = tasksController;