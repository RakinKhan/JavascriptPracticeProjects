// This function allows you to search through each ,p> element to search for the word "the" and remove it.


let p = document.querySelectorAll('p')

p.forEach(function (eachp) {
    let wordMatch = 'the'
    if (eachp.textContent.toLowerCase().includes(wordMatch.toLowerCase())) {
        eachp.remove()
    }

})