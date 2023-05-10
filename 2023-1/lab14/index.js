function createTask() {
    const taskValue = document.getElementById("task-input").value
    const task = new Task(taskValue, "TODO")
    let list = localStorage.getItem("list")
    if (list === null) {
        list = [task]
        const listStr = JSON.stringify(list)
        localStorage.setItem("list", listStr)
    } else {
        let listJson = JSON.parse(list)
        let taskList = []
        for (let i = 0; i < listJson.length; i++) {
            const obj = listJson[i]
            const objTask = new Task(obj.desc, obj.status)
            taskList.push(objTask)
        }
        taskList.push(task)
        const listStr = JSON.stringify(taskList)
        localStorage.setItem("list", listStr)
    }
    renderAll()
}

function renderAll() {
    const divTodo = document.getElementById("todo")
    const divDoing = document.getElementById("doing")
    const divDone = document.getElementById("done")

    divTodo.innerHTML = ""
    divDoing.innerHTML = ""
    divDone.innerHTML = ""
    let list = localStorage.getItem("list")
    if (list !== null) {
        let listJson = JSON.parse(list)
        for (let i = 0; i < listJson.length; i++) {
            const obj = listJson[i]
            const objTask = new Task(obj.desc, obj.status)
            if (objTask.status === "TODO") {
                divTodo.innerHTML += objTask.html(i)
            } else if (objTask.status === "DOING") {
                divDoing.innerHTML += objTask.html(i)
            } else {
                divDone.innerHTML += objTask.html(i)
            }
        }
    }
}

function updateTask(pos) {
    let list = localStorage.getItem("list")
    let listJson = JSON.parse(list)
    let task = listJson[pos]
    if (task.status === "TODO") {
        task.status = "DOING"
    } else if (task.status === "DOING") {
        task.status = "DONE"
    }

    let taskList = []
    for (let i = 0; i < listJson.length; i++) {
        const obj = listJson[i]
        const objTask = new Task(obj.desc, obj.status)
        taskList.push(objTask)
    }
    const listStr = JSON.stringify(taskList)
    localStorage.setItem("list", listStr)
    renderAll()
}

renderAll()