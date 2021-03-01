const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        minlength: [4, 'Username must be at least 4 characters.'],
        trim: true,
        unique: true,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    amount: {
        type: Number,
        required: true,
        default: 0,
        min: [0, 'Amount cannot be negative.'],
    },
    expenses: [{
        type: mongoose.Types.ObjectId,
        ref: 'Expenses'
    }],
});

module.exports = mongoose.model('Users', userSchema);