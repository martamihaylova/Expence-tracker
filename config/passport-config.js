const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcrypt');

function initialize(passport, getUser, grtUserById) {
    const authUser = async (username, password, done) => {
        let user = await getUser(username);
        if (user === null) {
            return done(null, false, { message: 'Password or usename incorrect' });
        };
        try {
            if (await bcrypt.compare(password, user.password)) {
                return done(null, user);
            } else {
                return done(null, false, { message: 'Password or usename incorrect' });
            }
        } catch (err) {
            return done(err.message);
        }
    };
    passport.use(new LocalStrategy({ usernameField: 'username' }, authUser));

    passport.serializeUser((user, done) => done(null, user.id));
    passport.deserializeUser((id, done) => {
        return done(null, grtUserById(id))
    });
}

module.exports = initialize;