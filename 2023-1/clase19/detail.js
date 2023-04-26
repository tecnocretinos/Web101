const results = data.results
const params = new URLSearchParams(window.location.search)
const id = params.get('id')

async function getCharacter() {
    const json = searchById(id)
    const character = new Character(json.id, json.name, json.image)
    const nameH1 = document.getElementById("name")
    nameH1.innerHTML = character.name
}

function searchById(id) {
   for (let i = 0; i < results.length; i++) {
    var busqueda = `${results[i].id}`
    if (busqueda === id) {
        console.log(results[i])
        return results[i]
    }
   }
}

getCharacter()