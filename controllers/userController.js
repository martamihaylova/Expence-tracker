const { Router } = require('express');
const router = Router();
const passport = require('passport');
const initPassport = require('../config/passport-config');
const register = require('../services/registerUser');
const Users = require('../models/Users');
const check = require('../middleware/checkAuth');
const validator = require('validator');


initPassport(passport,
    async (username) => {
        try {
            return await Users.findOne({ 'username': username });
        } catch (err) {
            console.log(err.message);
        }
    },
    async (id) => {
        try {
            return await Users.findById(id);
        } catch (err) {
            console.log(err.message);
        }
    });


router.get('/logout', check.ifLoged, (req, res) => {
    req.logOut();
    res.redirect('/');
});
router.get('/login', check.ifNotLoged, (req, res) => {
    res.render('login', { title: 'Login' });
});
router.post('/login', check.ifNotLoged, passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
}));
router.get('/register', check.ifNotLoged, (req, res) => {
    res.render('register', { title: 'Register' });
});
router.post('/register', check.ifNotLoged, (req, res) => {
    let { username, password, rePassword, amount} = req.body;
    if(amount === '') amount = 0;
    if (password !== rePassword || !validator.isAlphanumeric(username) || !validator.isLength(password, {min: 4, max: 20})) {
        res.render('register', { messages: { error: 'Invalid passwords or username' }, title: 'Register' });
    } else {
        console.log(typeof amount);
        register(username, password, amount, req, res);
    }
});

module.exports = router;