let firstNonRepeatingLetter = (s) => {
    let word = s.split('')
    let singleLetter = []    
    for (i = 0; i < word.length; i++) {
        let repeat = 0
        word.forEach((letter) => {
           if (word[i].toLowerCase() === letter.toLowerCase()) {
               repeat = repeat + 1
           }  
        })

        if (repeat === 1) {
            singleLetter.push(word[i])
        }
    }
    if (singleLetter.length == 0) {
        return 'none'
    } else {
        return singleLetter[0]
    }
}

console.log(firstNonRepeatingLetter('Sttss'))