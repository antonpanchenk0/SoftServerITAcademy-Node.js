const authService = require('./auth.service');

class AuthController {

    async login(req, res, next) {
        try {
            const result = await authService.login(req.body);
            res.json(result);
        } catch (e) {
            console.log(e);
            next(e);
        }

    }

}

const usersController = new AuthController();
module.exports = usersController;