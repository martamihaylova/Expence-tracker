function calculate(user) {
    let expensesValue = user.expenses.reduce((acc, curr) => {
        return acc + Number(curr.total);
    }, 0);
    
    let zero = 0;
    let moneyLeft = Number(user.amount) - expensesValue;
    let totalMerches = expensesValue.toFixed(2) || zero.toFixed(2);
    let availableAmount = moneyLeft > 0 ? moneyLeft.toFixed(2) : zero.toFixed(2);
    return { totalMerches, availableAmount };
}

module.exports = calculate;