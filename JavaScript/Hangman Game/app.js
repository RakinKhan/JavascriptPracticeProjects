let hangmanPuzzle = document.querySelector('#puzzle')
let hangmanGuesses = document.querySelector('#guesses')
let word2 = new Hangman('black cat', 2)

hangmanPuzzle.textContent =  word2.getPuzzle()
hangmanGuesses.textContent = word2.guessesRemaining
console.log(word2.status)


window.addEventListener('keypress', function (e) {
    word2.checkGuess(String.fromCharCode(e.charCode))
    console.log(word2.status)
    hangmanPuzzle.textContent = word2.getPuzzle()
    hangmanGuesses.textContent = word2.guessesRemaining
})


