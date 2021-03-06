const userController = require('../controllers/userController.js');
const homeController = require('../controllers/homeController.js');
const detailsController = require('../controllers/detailsController.js');
const addAndDeleteController = require('../controllers/addAndDeleteController.js');
const refillController = require('../controllers/refillController.js');
const profileController = require('../controllers/profileController.js');

module.exports = (app) => {
    // TODO...
    app.use('/user', userController);
    app.use('/create', addAndDeleteController);
    app.use('/delete', addAndDeleteController);
    app.use('/report', detailsController);
    app.use('/refill', refillController);
    app.use('/profile', profileController);
    // app.use('/search', searchController);
    app.use('/', homeController);
    app.get('*', (req, res) => {
        res.render('404', { authenticated: req.isAuthenticated() });
    });
};