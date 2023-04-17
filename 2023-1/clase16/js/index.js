const contenedor = document.getElementById("container")

for(let i = 0; i < data.length; i++){
    const obj = data[i]
    const personaje = new Personaje(obj.name, obj.image, obj.status, obj.species)
    contenedor.innerHTML += personaje.toHtml()
}




// Para el api de valorant
let data2 = {
    "personaje1": {
        "key1": "value1",
        "key2": "value2"
    },
    "personaje2": {
        "key1": "value1",
        "key2": "value2"
    },
}
const keys = Object.keys(data2)
for(let i = 0; i < keys.length; i++) {
    const key = keys[i]
    const obj = data2[key]
    console.log(obj)
}
