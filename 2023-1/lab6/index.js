const contenedorTareas = document.getElementById("contenedor-tareas")

// Definir tareas
const tarea1 = "Agregar el index.html"
const estadoTarea1 = true

const tarea2 = "Agregar el styles.css"
const estadoTarea2 = false

const tarea3 = "Agregar el index.js"
const estadoTarea3 = true

const tarea4 = "Referenciar el contenedor"
const estadoTarea4 = false

const tarea5 = "Declarar las tareas"
const estadoTarea5 = true

let contadorNoCompletadas = 0
let contadorCompletadas = 0

// Creo funcion para agregar tareas al html
function agregarTareaAlHtml(tarea, estado) {
    if(estado) {
        contadorCompletadas ++
        contenedorTareas.innerHTML += `
        <div class="active">
            <p>${tarea}</p>
        </div>
        `
    } else {
        contadorNoCompletadas ++
        contenedorTareas.innerHTML += `
        <div class="inactive">
            <p>${contadorNoCompletadas}. ${tarea}</p>
        </div>
    `
    }
}

// Agregarlas a la pagina
agregarTareaAlHtml(tarea1, estadoTarea1)
agregarTareaAlHtml(tarea2, estadoTarea2)
agregarTareaAlHtml(tarea3, estadoTarea3)
agregarTareaAlHtml(tarea4, estadoTarea4)
agregarTareaAlHtml(tarea5, estadoTarea5)

const tareasCompletadasP = document.getElementById("completadas")
tareasCompletadasP.innerHTML += `Tareas completadas: ${contadorCompletadas}`


const tareasNoCompletadasP = document.getElementById("noCompletadas")
tareasNoCompletadasP.innerHTML += `Tareas NO completadas: ${contadorNoCompletadas}`
