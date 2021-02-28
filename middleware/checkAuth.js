function ifLoged(req, res, next) {
    if (req.isAuthenticated()) {
        return next();
    }
    res.redirect('/user/login');
}

function ifNotLoged(req, res, next) {
    if (req.isAuthenticated()) {
        return res.redirect('/');
    }
    next();
}
module.exports = {
    ifLoged,
    ifNotLoged,
};