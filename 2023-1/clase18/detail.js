const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getCharacter() {
    const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`)
    const json = await response.json()
    const character = new Character(json.id, json.name, json.image)
    const nameH1 = document.getElementById("name")
    nameH1.innerHTML = character.name
}

getCharacter()