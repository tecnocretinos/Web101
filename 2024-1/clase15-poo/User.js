class User {
    constructor(id, name, email, status) {
        this.id = id
        this.name = name
        this.email = email
        this.status = status
    }

    createHtml(pos) {

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
            <button onclick="userClicked(${pos})">${buttonLabel}</button>
        </div>
        <hr />
        `
    }
}