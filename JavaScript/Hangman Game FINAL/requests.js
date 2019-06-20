let puzzleWord = async () => {
    let response = await fetch('http://puzzle.mead.io/puzzle')

    if (response.status === 200) {
        let data = await response.json()
        return data.puzzle
    } else {
        throw new Error('Could Not process')
    }
}