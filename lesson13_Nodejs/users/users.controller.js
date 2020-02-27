const userService = require('./users.service');

class UsersController{
    createUser(req, res, next){
        const user = userService.createUser(req.body);
        res.json(user);
    }
}

module.exports = new UsersController();