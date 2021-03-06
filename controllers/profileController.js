const { Router } = require('express');
const check = require('../middleware/checkAuth');
const Users = require('../models/Users');
const calculate = require('../services/accountInfo')
const router = Router();

router.get('/:id', check.ifLoged, async (req, res) => {

  let user = await Users.findById(req.params.id).populate('expenses').lean();
  let expenses = calculate(user);
  let usersAmount = user.amount.toFixed(2);
  res.render('account-info', {
    authenticated: req.isAuthenticated(),
    id: user?._id,
    name: user?.username,
    usersAmount,
    expenses
  })
});

module.exports = router;