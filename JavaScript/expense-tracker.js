let myAccount = {
    name: 'Rakin Khan',
    expenses: 0,
    income: 0
}

let addExpenses = function (account, amount) {
    account.expenses = account.expenses + amount
}

let addIncome = function (account, amount) {
    account.income = account.income + amount
}

let resetAccount = function (account) {
    account.income = 0
    account.expenses = 0
}

let getAccountSummary = function (myAccount) {
    let balance = myAccount.income - myAccount.expenses
    return `Account for ${myAccount.name} has $${balance}. $${myAccount.income} in income and $${myAccount.expenses} in expenses.`
}

addExpenses(myAccount, 100)
addIncome(myAccount, 1000)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))