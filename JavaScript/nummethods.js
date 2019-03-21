let makeGuess = function (num) {
    let min = 1
    let max = 5
    let randomNum = Math.floor(Math.random() * (max - min + 1)) + min

    if (num === randomNum) {
        return true
    } else {
        return false
    }

}

console.log(makeGuess(1))