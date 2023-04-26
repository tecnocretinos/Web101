const results = data.results
var list = []
const listContainer = document.getElementById("container")

async function getList() {
    for(let i = 0; i < results.length; i++) {
        const obj = results[i]
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