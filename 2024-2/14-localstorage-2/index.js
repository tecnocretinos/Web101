let characters = []

async function getCharacters() {
    let response = await fetch("https://rickandmortyapi.com/api/character")
    let json = await response.json()
    let data = json["results"]
    parseCharacters(data)
}

function parseCharacters(data) {
    for (let i = 0; i < data.length; i++) {
        let obj = data[i]
        let characterSaved = isCharacterSaved(obj["id"])
        let character = new Character(obj["id"], obj["name"], obj["image"], characterSaved)
        characters.push(character)
    }
    renderCharacters(characters)
}

function renderCharacters(list) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    for (let i = 0; i < list.length; i++) {
        let character = list[i]
        container.innerHTML += character.toHtml(i)
    }
}

function selected(pos) {
    let character = characters[pos]
    if(!character.saved) {
        character.saved = true
        let map = character.toMap()
        let savedCharacters = localStorage.getItem("savedCharacters")
        let list = []
        if (savedCharacters) {
            list = JSON.parse(savedCharacters)
        }
        list.push(map)
        let listString = JSON.stringify(list)
        localStorage.setItem("savedCharacters", listString)
        renderCharacters(characters)
    } else {
        // TODO: Remove item
    }
}

function isCharacterSaved(id) {
    let savedCharacters = localStorage.getItem("savedCharacters")
    if(savedCharacters) {
        let list = JSON.parse(savedCharacters)
        for(let i = 0; i < list.length; i++){
            let obj = list[i]
            if(obj["id"] === id) {
                return true
            }
        }
    }
    return false
}

getCharacters()