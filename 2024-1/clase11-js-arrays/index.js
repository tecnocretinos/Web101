let list = ["Tarea -1", "Tarea 0"]
// Agregar elementos
list.push("Tarea 1")
list.push("Tarea 2")
list.push("Tarea 3")

// Obtener un elemento
let element = list[1]
console.log(element)

// Eliminar un elemento
list.pop()

let listStatus = [true, true, false, true]
// Mostrar en el DOM
let container = document.getElementById("container")
for(let i = 0; i < list.length; i++) {
    let e = list[i]
    let status = listStatus[i]
    if(status) {
        container.innerHTML += `<p class="completed">${e}</p>`
    } else {
        container.innerHTML += `<p class="incomplete">${e}</p>`
    }
}