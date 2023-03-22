const container = document.getElementById("main-container")

// Remplazar propiedades de estilo
//container.style.backgroundColor = "rgba(0,0,0,1)"
// Agregar o quitar clases de css
container.classList.add("red")
container.classList.remove("blue-border")

// Funciones para eventos del mouse
function clicked() {
    const input = document.getElementById("input")
    const value = input.value
    container.innerHTML += "<p>" + value + "</p>"
}

function mouseEntered() {
    console.log("Entro el mouse")
    container.classList.add("blue-border")
}

function mouseLeave() {
    console.log("Salio el mouse")
    container.classList.remove("blue-border")
}