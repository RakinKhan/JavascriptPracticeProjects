const Hangman = function (word, guesses) {
    this.word = word.toLowerCase().split(''),
    this.guessesRemaining = guesses,
    this.guessedLetters = [' '],
    this.status = 'playing'
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

Hangman.prototype.changeStatus = function () {
    let completionStatus = true
    this.word.forEach((letter) => {
        if (this.guessedLetters.includes(letter)) {

        } else {
            completionStatus = false
        }
    })

    if (this.guessesRemaining === 0) {
        this.status = 'failed'
    } else if (completionStatus) {
        this.status = 'completed'
    } else {
        this.status = 'playing'
    }
}

Hangman.prototype.checkGuess = function (guess) {
    let letterGuess = guess.toLowerCase()
    let uniqueGuess = !this.guessedLetters.includes(letterGuess)
    let badGuess = !this.word.includes(letterGuess)

    if (uniqueGuess) {
        this.guessedLetters.push(letterGuess)
    }
    if (uniqueGuess && badGuess) {
        this.guessesRemaining--
    }

    this.changeStatus()
}

