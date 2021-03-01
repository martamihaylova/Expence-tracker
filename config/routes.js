const userController = require('../controllers/userController.js');
const homeController = require('../controllers/homeController.js');

module.exports = (app) => {
    // TODO...
    app.use('/user', userController);
    // app.use('/create', createAndDeleteController);
    // app.use('/delete', createAndDeleteController);
    // app.use('/edit', editController);
    // app.use('/search', searchController);
    app.use('/', homeController);
    app.get('*', (req, res) => {
        res.render('404');
    });
};