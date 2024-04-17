class User {
    constructor(id, name, email, status) {
        this.id = id
        this.name = name
        this.email = email
        this.status = status
    }

    createHtml() {

        let buttonLabel = ""
        if(this.status) {
            buttonLabel = "Disable"
        } else {
            buttonLabel = "Enable"
        }

        return `
        <div>
            <p>${this.id}</p>
            <p>${this.name}</p>
            <p>${this.email}</p>
            <button>${buttonLabel}</button>
        </div>
        <hr />
        `
    }
}