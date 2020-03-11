const { DataTypes, Model } = require('sequelize');
const sequelize = require('../../db');
const UserModel = require('../users/user.model');

class Task extends Model {}

const TaskModel = Task.init({
    id: { type: DataTypes.INTEGER, primaryKey: true, allowNull: false, autoIncrement: true },
    title: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.STRING, allowNull: true },
}, { sequelize });

TaskModel.User = TaskModel.belongsTo(UserModel);

module.exports = TaskModel;