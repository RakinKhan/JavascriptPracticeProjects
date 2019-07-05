var uniqueInOrder = function(iterable) {
    let array
    let newArray = [] 
    if (typeof iterable === "string") {
        array = iterable.split('')
    } else {
      array = iterable
    }

    for (i = 0; i < array.length; i++) {    
        if (array[i] !== array[i + 1]) {
            newArray.push(array[i])
        }
    }
     
    return newArray
}
   
console.log(uniqueInOrder('aaabbcddd33aaddd41'))