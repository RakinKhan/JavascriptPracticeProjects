let hangmanPuzzle = document.querySelector('#puzzle')
let hangmanGuesses = document.querySelector('#guesses')
let word2

let render = () => {
    hangmanPuzzle.textContent =  word2.getPuzzle
    hangmanGuesses.textContent = word2.getStatus
}


window.addEventListener('keypress', function (e) {
    word2.checkGuess(String.fromCharCode(e.charCode))
    render()
})

let startGame = async () => {
    let wordPuzzle = await puzzleWord()
    word2 = new HangmanGame(wordPuzzle, 5)
    render()
}

startGame()