class User {
    constructor(id, name, email, status) {
        this.id = id
        this.name = name
        this.email = email
        this.status = status
    }

    createHtml() {
        return `
            <p>${this.id}</p>
        `
    }
}