//5/27/2019 Using the class syntax to organize hangman game
class HangmanGame {
    //5/27/2019 constructor() sets up the paramaters of the hangman game
    constructor(word, guesses) {
        //5/27/2019 the word/sentence to be guessed will be split into an array of letters
        this.word = word.toLowerCase().split(''),
        //5/27/2019 this is the number of guesses a person will have to guess the correct word/sentence
        this.guessesRemaining = guesses,
        //5/27/2019 this will store all the letters that have been guessed. the ' ' is included in the array so that spaces between words did not need to be guessed
        this.guessedLetters = [],
        //5/27/2019 this represents the current status of the game
        this.status = 'playing'
    }
    //5/27/2019 this function returns the word with the correct letters that were guessed and *'s if the letter has not been guessed yet
    get getPuzzle() {
        let puzzle = ''
        //5/27/2019 this loop will check to see if are any guessed letters that match the letters in the word/sentence to be guessed. if there is a match the letter in the
        //sentence will be displayed, if not then the unguessed letter will remain as a *.
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
                puzzle = puzzle + letter
            } else {
                puzzle = puzzle + '*'
            }
        })
    
        return puzzle
    }
    //5/27/2019 This changes the status of the game based on if the game is still going, if you used all the guesses, or if the game is done
    changeStatus() {
        let completionStatus = true
        this.word.forEach((letter) => {
            if (this.guessedLetters.includes(letter) || letter === ' ') {
    
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
    //5/27/2019 This displays the status of the game in the browser.
    get getStatus() {
        if (this.status === 'playing') {
            return `You have ${this.guessesRemaining} guesses left.`
        } else if (this.status === 'failed') {  
            return `Sorry the word was "${this.word.join('')}"`
        } else {
            return `Great, you guessed it`
        }
    }
    //5/27/2019 This checkes to see if the your guess matches a letter in the word/sentence and if it has been guessed before.
    checkGuess(guess) {
        let letterGuess = guess.toLowerCase()
        let uniqueGuess = !this.guessedLetters.includes(letterGuess)
        let badGuess = !this.word.includes(letterGuess)
        //5/27/2019 is the letter has not been guessed before then the letter is pushed into the guessed letters array
        if (uniqueGuess) {
            this.guessedLetters.push(letterGuess)
        }
        //5/27/2019 is the letter that is guessed is a unique guess but in the word or phrase then the remaining guesses you have is reduced by 1
        if (uniqueGuess && badGuess) {
            this.guessesRemaining--
        }
        //5/27/2019 updates the status of the game after every word guessed
        this.changeStatus()
    }
}

