const { Router } = require('express');
const refill = require('../services/refill');
const check = require('../middleware/checkAuth');
const router = Router();

// router.get('/:id', check.ifLoged, async (req, res) => {
//     let user = await req.user;
//     getOne(req.params.id)
//         .then((currentCourse) => {
//             res.render('edit-course', {
//                 authenticated: req.isAuthenticated(),
//                 currentCourse,
//                 id: user?._id,
//                 name: user?.username
//             })
//         })
//         .catch((err) => console.log(er.message));
// });
router.post('/:id', check.ifLoged, (req, res) => {
    refill(req.params.id, req.body)
        .then(() => {
            res.redirect('/');
        })
        .catch((err) => console.log(err.message))
});

module.exports = router;