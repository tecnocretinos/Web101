var list = []
const listContainer = document.getElementById("container")

async function getList() {
    // Obtener la lista del api
    const response = await fetch("https://rickandmortyapi.com/api/character")
    const json = await response.json()
    const data = json.results
    for(let i = 0; i < data.length; i++) {
        const obj = data[i]
        const character = new Character(obj.id, obj.name, obj.image)
        list.push(character)
    }

    // Render de los elementos
    for(let i = 0; i < list.length; i++) {
        const character = list[i]
        listContainer.innerHTML += character.toHtml(i) 
    }
}

function selected(pos) {
    const character = list[pos]
    window.location.href = `./detail.html?id=${character.id}`
}

getList()