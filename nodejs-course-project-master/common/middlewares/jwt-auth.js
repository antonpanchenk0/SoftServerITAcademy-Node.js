const passport = require('passport');
const { Unauthorized } = require('../exceptions');

module.exports = (req, res, next) => {
    const authMiddleware = passport.authenticate('jwt', { session: false }, (err, user) => {
        if (!user) {
            return next(new Unauthorized('Invalid jwt token'));
        }
        req.user = user;
        next();
    });
    authMiddleware(req, res, next);
};