function login() {
    // Obtener los valores de los inputs
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value
    // Validar que no sean vacios
    if (username === "" || password === "") {
        alert("Error, algunos campos estan vacios")
        return
    }
    // Obtener el usuario del localstorage
    const userData = localStorage.getItem("userData")
    const userDataJSON = JSON.parse(userData)
    // Validar que coincidan con los datos del usuario
    if ( username === userDataJSON.username && password === userDataJSON.password) {
        // Crear usuario como logueado en localstorage
        const userString = JSON.stringify(userDataJSON)
        localStorage.setItem("loggedUser", userString)
        // Redirigir a main.html
        window.location.href = "./main.html"
    } else {
        alert("Usuario o contraseña incorrectos")
    }
    
}