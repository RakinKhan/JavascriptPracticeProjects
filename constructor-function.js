const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split(''),
    this.guesses = guesses,
    this.guessedLetters = ['a']
}

Hangman.prototype.getPuzzle = function () {
    let puzzle = ''

    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter) || letter === ' ') {
            puzzle = puzzle + letter
        } else {
            puzzle = puzzle + '*'
        }
    })

    return puzzle
}
let word1 = new Hangman('cat', 2)
console.log(word1.getPuzzle())
let word2 = new Hangman('coleslaw hampshire', 5)
console.log(word2.getPuzzle())