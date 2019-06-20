const tipAmount = (tip) => {
    return (bill) => {
        return tip * bill
    }
}

let tipNumber = tipAmount(0.15)
console.log(tipNumber(50))