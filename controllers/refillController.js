const { Router } = require('express');
const refill = require('../services/refill');
const Users = require('../models/Users');
const check = require('../middleware/checkAuth');
const router = Router();

router.post('/:id', check.ifLoged, async (req, res) => {
    if(Number(req.body.amount)){
        refill(req.params.id, req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => console.log(err.message))
    } else {
         let user = await Users.findById(req.params.id).populate('expenses').lean();
            res.render('expenses', {
                authenticated: req.isAuthenticated(),
                id: user?._id,
                name: user?.username,
                expenses: user.expenses,
                messages: { error: 'Invalid input' }
            });
    }
});

module.exports = router;