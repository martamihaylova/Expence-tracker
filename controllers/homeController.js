const { Router } = require('express');
const router = Router();

router.get('/', async (req, res) => {
    try {
        let user = await req.user;
        // let courses = await Courses.find().sort({ createdAt: - 1 }).lean();
        if (user === null) {
            console.log('null');
            res.redirect('/');
        }
        if (!user) {
            // courses.sort((a, b) => b.usersEnrolled.length - a.usersEnrolled.length);
            res.render('home', { authenticated: req.isAuthenticated()});
        } else {
            res.render('account-info', {
                authenticated: req.isAuthenticated(),
                id: user?._id,
                name: user?.username
            })
        }
    } catch (err) {
        console.log(err.message);
    }
});

module.exports = router;