const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

    email: {
        type: String,
        unique: true,
        required: true,
        validate: /^[a-zA-Z0-9$@$!%*?&#^-_. +]+$/
    },
    username: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    // somethings: [{
    //     type: mongoose.Types.ObjectId,
    //     ref: 'Something'
    // }],
});

module.exports = mongoose.model('Users', userSchema);