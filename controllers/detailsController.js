const { Router } = require('express');
const check = require('../middleware/checkAuth');
const expenseDetails = require('../services/getDetails');
const router = Router();

router.get('/:id', check.ifLoged, async (req, res) => {
    let user = await req.user;
    let currentExpense = await expenseDetails(req.params.id);
    // let owner = (currentHotel.owner + '') === (user._id + '');
    // let alreadyBooked = user.booked.includes(req.params.id);
    res.render('report', {
        authenticated: req.isAuthenticated(),
        id: user?._id,
        name: user?.username,
        currentExpense,
    })
});

module.exports = router;