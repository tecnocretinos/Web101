const taskList = [
    {
        description: "Tarea 1",
        completed: true
    },
    {
        description: "Tarea 2",
        completed: false
    },
    {
        description: "Tarea 3",
        completed: true
    }
]

/* Cree una función que recorra la lista de tareas (taskList)
    y agregue a la vista cada una de las tareas, como en el lab #6
**/
function showList() {
    const container = document.getElementById("task-container")
    for(let i = 0; i < taskList.length; i++) {
        const element = taskList[i]
        container.innerHTML += createTaskHtml(element)
    }
}

function createTaskHtml(task) {
    if(task.completed === true) {
        return "<p class='completed'>"+ task.description + "</p>"
    } else {
        return "<p class='no-completed'>"+ task.description + "</p>"
    }
}

showList()