const Expense = require('../models/Expenses');
const Users = require('../models/Users');

async function deleteExpense(id) {
    let expense = await Expense.findById(id, 'creator');
    let user = await Users.findById(course.creator);
    user.created.splice(user.created.indexOf(expense._id), 1);
    user.save();
   expense.deleteOne({ _id: id }, function (err) {
        if (err) console.log(err);
        console.log("Successful deletion");
    });
}

module.exports = deleteExpense;