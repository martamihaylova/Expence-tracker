const { Router } = require('express');
const Expenses = require('../models/Expenses');
const Users = require('../models/Users');
const router = Router();

router.get('/', async (req, res) => {
    try {
        let user = await req.user;
        // let expenses = await Expenses.find().sort({ createdAt: - 1 }).lean();
        if (user === null) {
            console.log('null');
            res.redirect('/');
        }
        if (!user) {
            // courses.sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length);
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