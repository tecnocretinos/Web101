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

    studentMap.forEach((value, key) => {
        innerHtml += "<div class='map-item'>"
        innerHtml += "<label>" + key + ": </label>"
        innerHtml += "<p>" + value + "</p>"
        innerHtml += "</div>"
    })
    mapContainer.innerHTML = innerHtml
}


const mapsList = []
mapsList.push(createStudentMap("Tiago", "301692...", 28))
mapsList.push(createStudentMap("Uno", "301692...", 28))
mapsList.push(createStudentMap("Dos", "301692...", 28))
mapsList.push(createStudentMap("Tres", "301692...", 28))

mapsList.forEach(map => {
    console.log(map)
})

const mapStudent = createStudentMap("Tiago", "301692...", 28)
showDetailsInView(mapStudent)