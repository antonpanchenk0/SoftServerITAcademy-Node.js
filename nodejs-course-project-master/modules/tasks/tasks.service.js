const TaskModel = require('./task.model');
const { NotFound } = require('../../common/exceptions');

class TasksService {

    async findMany(user) {
        return TaskModel.findAll({ where: { UserId: user.id } });
    }

    async findOneById(id) {
        const task = await TaskModel.findOne({ where: { id } });

        if (!task) {
            throw new NotFound('Task not found');
        }

        return task;
    }

    async createOne(user, taskData) {
        console.log(user);
        const taskModel = new TaskModel(taskData);
        taskModel.UserId = user.id;
        return taskModel.save();
    }

    async updateOne(id, taskData) {
        await this.findOneById(id);
        await TaskModel.update(taskData, { where: { id } });
        return this.findOneById(id);
    }

    async removeOne(id) {
        const task = await this.findOneById(id);
        task.destroy();
        return { id: task.id };
    }
}

module.exports = new TasksService();