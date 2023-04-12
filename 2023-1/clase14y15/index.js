let task1 = new Task("Tarea 1", false)
let task2 = new Task("Tarea 2", true)
let task3 = new Task("Tarea 3", false)
const list = [task1, task2, task3]

function showList() {
    const container = document.getElementById("container")
    container.innerHTML = ""
    for(let i = 0; i < list.length; i++) {
        const task = list[i]
        container.innerHTML += task.toHtml(i)
    }
}

function taskSelected(pos) {
    list[pos].changeCompleted()
    showList()
}

showList()