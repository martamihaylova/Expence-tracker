const { Router } = require('express');
const createExpense = require('../services/createExpense');
const deleteExpense = require('../services/deleteExpense');
const check = require('../middleware/checkAuth');
const router = Router();

router.get('/:id', check.ifLoged, (req, res) => {
    console.log(req.params.id);
    deleteExpense(req.params.id)
        .then(() => res.redirect('/'))
        .catch((err) => console.log(err.message))
})
router.get('/', check.ifLoged, async (req, res) => {
    let user = await req.user;
    res.render('new-expense', {
        authenticated: req.isAuthenticated(),
        id: user?._id,
        name: user?.username
    })
});
router.post('/', check.ifLoged, async (req, res) => {
    if (req.body.total > 0) {
        try {
            let user = await req.user;
            req.body.user = user;
            createExpense(req.body, user, req, res);
        } catch (err) {
            console.log(err.message);
            res.render('new-expense', { messages: { error: 'Invalid inputs' } });
        }
    } else {
        res.render('new-expense', { messages: { error: 'Invalid inputs' } });
    }
});

module.exports = router;