let account = {
    name: 'Rakin Khan',
    expenses: [],
    incomes: []
}
 
let addExpense = function (description, amount) {
    let expense = {
        description: description,
        amount: amount
    }
    return account.expenses.push(expense)
}

let addIncome = function (description, amount) {
    let income = {
        description: description,
        amount: amount
    }  
    return account.incomes.push(income)
}
 
let getAccountSummary = function () {
    let totalExpense = 0
    let totalIncome = 0
 
    account.expenses.forEach(function (expense) {
        totalExpense = totalExpense + expense.amount
    })
    
    account.incomes.forEach(function (income) {
        totalIncome = totalIncome + income.amount
    })
 
    return `${account.name} has a balance of $${totalIncome - totalExpense}, $${totalIncome} in income, $${totalExpense} in expenses.`
}
 
addExpense('Rent', 950)
addExpense('Coffee', 2)
addIncome('Job', 1000)
 
console.log(account)
console.log(getAccountSummary(account))
