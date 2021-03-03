const Expense = require('../models/Expenses');

function getDetails(id) {

    return Expense.findById(id).lean();

}

module.exports = getDetails;