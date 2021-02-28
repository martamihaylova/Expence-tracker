const express = require ('express');
const handlebars = require ('express-handlebars');
const flash = require('express-flash');
const session = require('express-session');
const passport = require('passport');
const cookieParser = require('cookie-parser');
const { SECRET } = require('./config');


module.exports = (app) => {

    app.engine('hbs', handlebars({
    extname: 'hbs',
    }));
    app.set('view engine', 'hbs');

    app.use('/static', express.static('static'));
    
    app.use(express.urlencoded({ extended: true }))
    
    app.use(cookieParser());
    
    app.use(flash());
    app.use(session({
        secret: SECRET,
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
}