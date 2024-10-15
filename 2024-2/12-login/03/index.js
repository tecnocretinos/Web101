function login() {
    let email = document.getElementById("email").value
    let password = document.getElementById("password").value
    if(email !== "", password !== "") {
        if(email === "msantim@hotmail.com" && password === "qqqqqq") {
            window.location = "https://www.google.com/"
        } else {
            alert("Usuario o contraseña incorrecto")
        }
    } else {
        alert("Por favor complete los campos para continuar")
    }
}