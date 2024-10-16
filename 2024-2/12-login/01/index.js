function login() {
    let email = document.getElementById("email").value
    let pass = document.getElementById("password").value
    if(email !== "" && pass !== "") {
        if(email === "msantim@hotmail.com" && pass === "qqqqqq") {
            window.location = "https://www.google.com/"
        } else {
            alert("Correo o contraseña incorrectos")
        }
    } else {
        alert("Por favor complete los campos para continuar")
    }
}