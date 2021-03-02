const userController = require('../controllers/userController.js');
const homeController = require('../controllers/homeController.js');
const addAndDeleteController = require('../controllers/addAndDeleteController.js');

module.exports = (app) => {
    // TODO...
    app.use('/user', userController);
    app.use('/create', addAndDeleteController);
    app.use('/delete', addAndDeleteController);
    // app.use('/edit', editController);
    // app.use('/search', searchController);
    app.use('/', homeController);
    app.get('*', (req, res) => {
        res.render('404');
    });
};