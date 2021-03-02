const mongoose = require('mongoose');

const expensesSchema = new mongoose.Schema({
    merchant: {
        type: String,
        minlength: [4, 'Merchant must be at least 4 characters.'],
        maxlength: [20, 'Merchant must be less than 20 characters.'],
        required: true
    },
    total: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        minlength: [3, 'Description must be at least 3 characters.'],
        maxlength: [30, 'Description must be less than 30 characters.'],
    },
    report: {
        type: Boolean,
        required: true,
        default: false
    },
    user: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
        required: true
    }

});
module.exports = mongoose.model('Expenses', expensesSchema);