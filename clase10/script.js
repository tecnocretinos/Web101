const mapContainer = document.getElementById("map-container")
var listaDeTareas = []

function createTaskList() {
    var innerHtml = ""
    listaDeTareas.forEach(tarea => {
        const tareaP = "<p> * " + tarea + "</p>"
        innerHtml += tareaP
    })
    document.getElementById("task-list").innerHTML = innerHtml
}

function addNewTask() {
    const taskValue = document.getElementById("task-input").value
    if (taskValue !== "") {
        listaDeTareas.push(taskValue)
        document.getElementById("task-input").value = ""
        createTaskList()
    }
}

function deleteLast() {
    listaDeTareas.pop()
    createTaskList()
}

function createStudentMap(name, phone, age) {
    const map = new Map()
    map.set("nombre", name)
    map.set("telefono", phone)
    map.set("edad", age)
    return map
}

function showDetailsInView(studentMap) {
    var innerHtml = ""
    innerHtml += "<label>Nombre: </label>"
    innerHtml += "<p>" + studentMap.get("nombre") + "</p>"

    innerHtml += "<label>Telefono: </label>"
    innerHtml += "<p>" + studentMap.get("telefono") + "</p>"

    innerHtml += "<label>Edad: </label>"
    innerHtml += "<p>" + studentMap.get("edad") + "</p>"
    mapContainer.innerHTML = innerHtml
}
const mapStudent = createStudentMap("Tiago", "301692...", 28)
showDetailsInView(mapStudent)