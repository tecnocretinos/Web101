class Task {
    constructor(desc, status) {
        this.desc = desc
        this.status = status
    }

    html(pos) {
        return `
        <div class="task">
            <p>${this.desc}</p>
            <button onclick="updateTask(${pos})">+</button>
        </div>
        `
    }
}