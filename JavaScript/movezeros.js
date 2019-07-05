var moveZeros = function (arr) {
    let movedZeros = arr
    movedZeros.forEach((item) => {
        if (item === 0) {
            let index = movedZeros.indexOf(item)
            movedZeros.splice(index, 1)
            movedZeros.push(item)
        }
    })
    
    return movedZeros
}

console.log(moveZeros([1,2,0,1,0,1,0,3,0,3]))