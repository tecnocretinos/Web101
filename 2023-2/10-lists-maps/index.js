// Usos generales de las listas
let list = ["Nombre 1", "Nombre 2", "Nombre 3"]
console.log(list)

let first = list[0]
console.log(first)

list.push("Nombre 4")
console.log(list)

list.pop()
console.log(list)

for(let i = 0; i < list.length; i++) {
    let element = list[i]
    console.log(element)
}

let numbers = [1, 2, 5, 8,789, 456, 78,4, 564,7,9, 98]
let sum = 0
for(let i = 0; i < numbers.length; i++) {
    let number = numbers[i]
    sum += number
}
const prom = sum/numbers.length
console.log(prom)

// Caso de uso: Lista de tareas
let tasks = []

function showTasks() {
    let tasksList = document.getElementById("tasks")
    tasksList.innerHTML = ""
    for(let i = 0; i < tasks.length; i++) {
        const task = tasks[i]
        tasksList.innerHTML += `<li>${task}</li>`
    }
}

function addTask() {
    let value = document.getElementById("task-value").value
    tasks.push(value)
    showTasks()
    document.getElementById("task-value").value = ""
}