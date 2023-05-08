const loggedUser = localStorage.getItem("loggedUser")
if(loggedUser !== null) {
    window.location.href = "./main.html"
}

function createUser() {
    const name = document.getElementById("name").value
    const username = document.getElementById("username").value
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    
    // Validar campos que no esten vacios

    if (name === "" || username === "" || email === "" || password === "") {
        alert("Error, algunos campos estan vacios")
        return
    }

    // Crear mapa con datos del usuario
    const user = {
        name: name,
        username: username,
        email: email,
        password: password
    }

    // Guardar mapa en localstorage
    
    const userString = JSON.stringify(user)
    localStorage.setItem("userData", userString)

    // Redirigir al login
    
    window.location.href = "./login.html"
}

console.log("")