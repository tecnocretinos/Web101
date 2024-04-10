let listOfCharacters = []

function createAllCharacters() {
    const results = data.results
    for(let i = 0; i < results.length; i++) {
        const obj = results[i]
        const name = obj.name
        const isAlive = obj.status
        const race = obj.species
        const lastLocation = obj.location.name
        const firsSeen = obj.episode[0]
        const image = obj.image
        const character = new Character(name, isAlive, race, lastLocation, firsSeen, image)
        listOfCharacters.push(character)
    }
}

function fillScreenWithCharactes() {
    const container = document.getElementById("character-container")
    for(let i = 0; i < listOfCharacters.length; i++) {
        const character = listOfCharacters[i]
        container.innerHTML += character.createHtml()
    }
}

createAllCharacters()
fillScreenWithCharactes()