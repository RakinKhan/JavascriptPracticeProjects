let hangmanPuzzle = document.querySelector('#puzzle')
let hangmanGuesses = document.querySelector('#guesses')
let word2 = new HangmanGame('black cat', 2)

//5/27/2019 displays the word in the HTML as *'s when the game originally begins
hangmanPuzzle.textContent =  word2.getPuzzle()
//5/27/2019 displays the current status of the game on the HTML
hangmanGuesses.textContent = word2.getStatus()
console.log(word2.status)

//5/27/2019 this event listener checkes for every letter that is pressed on the keyboard on the HTML page
window.addEventListener('keypress', function (e) {
    //5/27/2019 the pressed letter is turned into a string using its character code and is passed through the checkGuesses() function
    word2.checkGuess(String.fromCharCode(e.charCode))
    console.log(word2.status)
    //5/27/2019 the game is reupdated on the browser every time a new letter is guessed.
    hangmanPuzzle.textContent = word2.getPuzzle()
    hangmanGuesses.textContent = word2.getStatus()
})


