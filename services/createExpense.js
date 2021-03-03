const Expense = require('../models/Expenses');

function createNewExpense(data, user, req, res) {
    data.report = data.reportCheck === 'on';
    data.total = Number(data.total).toFixed(2);
    let expense = new Expense(data);
    return expense.save()
        .then(() => {
            user.expenses.push(expense);
            user.save();
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err.message);
            res.render('new-expense', {
                authenticated: req.isAuthenticated(),
                id: user?._id,
                name: user?.username,
                messages: { error: 'Invalid inputs' }
            });
        });
}

module.exports = createNewExpense;