const { Router } = require('express');
const refill = require('../services/refill');
const check = require('../middleware/checkAuth');
const router = Router();

router.post('/:id', check.ifLoged, (req, res) => {
    refill(req.params.id, req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => console.log(err.message))
});

module.exports = router;