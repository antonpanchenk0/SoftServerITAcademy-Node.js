const passport = require('passport');
const { Strategy, ExtractJwt } = require('passport-jwt');
const usersService = require('../../modules/users/users.service');
const { auth } = require('../../config');
const { Unauthorized } = require('../exceptions');

const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: auth.secretOrKey,
    expiresIn: auth.expiresIn,
};

const strategy = new Strategy(opts, async (jwtPayload, done) => {
    try {
        const user = await usersService.findOneById(jwtPayload.id);
        if (user) {
            done(null, user);
        } else {
            done(null, false);
        }
    } catch (e) {
        console.log(e);
        done(new Unauthorized(e.message), false);
    }
});

passport.use(strategy);