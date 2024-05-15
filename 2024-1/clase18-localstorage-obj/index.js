const localStorage = window.localStorage

function loadUserData() {
    let subtitle = document.getElementById("hello")
    let container = document.getElementById("container")
    const loggedUserString = localStorage.getItem("LOGGED-USER")
    if(loggedUserString) {
        const loggedUser = JSON.parse(loggedUserString)
        subtitle.innerHTML = "Hello, " + loggedUser.name + "!"
        container.innerHTML = "<button onclick='closeSession()'>Cerrar sesión</button>"
    } else {
        subtitle.innerHTML = ""
        container.innerHTML = "<button onclick='goToLogin()'>Iniciar sesión</button>"
    }
}

function closeSession() {
    localStorage.removeItem("LOGGED-USER")
    loadUserData()
}

function goToLogin() {
    window.location.href = "./login.html"
}

loadUserData()