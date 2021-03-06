const { Router } = require('express');
const refill = require('../services/refill');
const check = require('../middleware/checkAuth');
const router = Router();

router.post('/:id', check.ifLoged, (req, res) => {
    if(Number(req.body.amount)){
        refill(req.params.id, req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => console.log(err.message))
    } else {
        res.render( '/', { messages: { error: 'Invalid inputs' } });
    }
});

module.exports = router;