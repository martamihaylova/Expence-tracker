const { Router } = require('express');
const Users = require('../models/Users');
const router = Router();

router.get('/', async (req, res) => {
    try {
        let user = await req.user;

        if (user === null) {
            console.log('null');
            res.redirect('/');
        }
        if (!user) {
            res.render('home', { authenticated: req.isAuthenticated() });
        } else {
            let userWithExpenses = await Users.findById(user._id).populate('expenses').lean();
            res.render('expenses', {
                authenticated: req.isAuthenticated(),
                id: user?._id,
                name: user?.username,
                expenses: userWithExpenses.expenses,
            });
        }
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;