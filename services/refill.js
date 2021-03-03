const User = require('../models/Users');

async function editUser(userId, data) {
    let user = await User.findById(userId);
    user.amount = Number(user.amount) + Number(data.amount);
    return user.save();
}

module.exports = editUser;