const contenedor = document.getElementById("container")

for(let i = 0; i < data.length; i++){
    const obj = data[i]
    const personaje = new Personaje(obj.name, obj.image, obj.status, obj.species)
    contenedor.innerHTML += personaje.toHtml()
}