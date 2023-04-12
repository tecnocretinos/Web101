class Task {
    constructor(description, completed) {
        this.description = description
        this.completed = completed
    }

    changeCompleted() {
        this.completed = !this.completed
    }

    toHtml(pos) {
        if(this.completed) {
            return `
            <div class="task" onclick="taskSelected(${pos})">
                <p class='completed'>${this.description}</p>
            </div>
            `
        } else {
            return `
            <div class="task" onclick="taskSelected(${pos})">
                <p class='no-completed'>${this.description}</p>
            </div>
            `
        }
    }
}