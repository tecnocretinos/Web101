let isBlue = false
function changeTitle() {
    let element = document.getElementById("title")
    if(isBlue) {
        element.innerHTML = "Hola mundo"
        element.className = "red"
        isBlue = false
    } else {
        element.innerHTML = "Texto cambiado"
        element.className = "blue"
        isBlue = true
    }
}

function addText() {
    let inputElement = document.getElementById("input")
    let value = inputElement.value
    if(value === "") {
        alert("Por favor escribe algo.")
    } else {
        let containerElement = document.getElementById("container")
        containerElement.innerHTML += "<div class='text-container'><img src='https://cdn-icons-png.flaticon.com/512/1160/1160358.png'/> <p class='text'>" + value + "</p></div>"
        inputElement.value = ""
    }
}