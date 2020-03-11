const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { auth } = require('../../config');
const { BadRequest } = require('../../common/exceptions');
const usersService = require('../users/users.service');

class AuthService {

    async login({ email, password }) {
        const user = await usersService.findOneByEmail(email);

        if (!bcrypt.compareSync(password, user.password)) {
            throw new BadRequest('Wrong password');
        }

        const token = jwt.sign({ id: user.id, email: user.email }, auth.secretOrKey);

        return {
            token,
            expiresIn: auth.expiresIn,
        }
    }
}

module.exports = new AuthService();