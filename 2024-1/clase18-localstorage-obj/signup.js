const localStorage = window.localStorage

function saveUser() {
    const name = document.getElementById("name").value
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    const id = (Math.random() + 1).toString(36).substring(7);
    // TODO: Validar valores vacios
    const userToSave = {
        id: id,
        name: name,
        username: username,
        password: password
    }
    const usersListString = localStorage.getItem("USERS")
    if(usersListString) {
        let listObject = JSON.parse(usersListString)
        listObject.push(userToSave)
        const listToSave = JSON.stringify(listObject)
        localStorage.setItem("USERS", listToSave)
    } else {
        const usersList = [userToSave]
        const listToSave = JSON.stringify(usersList)
        localStorage.setItem("USERS", listToSave)
    }

    document.getElementById("name").value = ""
    document.getElementById("username").value = ""
    document.getElementById("password").value = ""
}