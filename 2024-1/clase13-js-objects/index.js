const listOfCharacters = [
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/61.jpeg"),
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/62.jpeg"),
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/63.jpeg"),
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/64.jpeg"),
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/66.jpeg"),
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/67.jpeg"),
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/68.jpeg"),
    new Character("Campaign Manager Morty", false, "Human", "Citadel of Ricks", "The Ricklantis Mixup", "https://rickandmortyapi.com/api/character/avatar/65.jpeg")
]

function fillScreenWithCharactes() {
    const container = document.getElementById("character-container")
    for(let i = 0; i < listOfCharacters.length; i++) {
        const character = listOfCharacters[i]
        container.innerHTML += character.createHtml()
    }
}

fillScreenWithCharactes()