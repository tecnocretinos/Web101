const localStorage = window.localStorage

function validateLoggedUser() {
    const loggedUserString = localStorage.getItem("LOGGED-USER")
    if(loggedUserString) {
        window.location.href = "./index.html"
    }
}

function login() {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    const usersListString = localStorage.getItem("USERS")
    if (usersListString) {
        let listObject = JSON.parse(usersListString)
        var found = false
        for (let i = 0; i < listObject.length; i++) {
            const obj = listObject[i]
            if (obj.username === username &&
                obj.password === password) {
                    found = true
                    const objToSave = JSON.stringify(obj)
                    localStorage.setItem("LOGGED-USER", objToSave)
            }
        }
        if(found) {
            window.location.href = "./index.html"
        } else {
            alert("Datos incorrectos")
        }
    } else {
        alert("Datos incorrectos")
    }
}

validateLoggedUser()