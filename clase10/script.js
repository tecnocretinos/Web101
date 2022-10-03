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

createTaskList()