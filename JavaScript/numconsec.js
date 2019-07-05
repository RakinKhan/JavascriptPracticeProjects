let sumDigPow = (a, b) => {
    let powerArray = []
    let lower 
    for (let num = a; num <= b; num++) {
        lower = num.toString().split('')
        let sum = 0
        let index = 0
        for (i = index; i < lower.length; i++) {
            sum = sum + Math.pow(parseInt(lower[i]), i + 1)
        }

        if (sum === num) {
            powerArray.push(num)
        }
    }

    return powerArray
}

console.log(sumDigPow(1, 100))
