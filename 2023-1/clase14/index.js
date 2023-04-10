class Task {
    constructor(description, completed) {
        this.description = description
        this.completed = completed
    }

    changeCompleted(newCompleted) {
        this.completed = newCompleted
    }

    toHtml() {
        if(this.completed) {
            return "<p class='completed'>"+ this.description + "</p>"
        } else {
            return "<p class='no-completed'>"+ this.description + "</p>"
        }
    }
}

let task1 = new Task("Tarea 1", false)
let task2 = new Task("Tarea 2", false)
let task3 = new Task("Tarea 3", false)
const list = [task1, task2, task3]

function showList() {
    
}