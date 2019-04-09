let account = {
    name: 'Rakin Khan',
    expenses: []
}

let addExpense = function (description, amount) {
    let expense = {
        description: description,
        amount: amount
    }
    return account.expenses.push(expense)

}

let getAccountSummary = function () {
    let totalExpense = 0

    account.expenses.forEach(function (expense) {
        totalExpense = totalExpense + expense.amount
    })

    return `${account.name} has $${totalExpense}`

}







addExpense('Rent', 950)
addExpense('Coffee', 2)

console.log(account)
console.log(getAccountSummary(account))
