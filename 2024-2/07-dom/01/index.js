var isGreen = true

function changeTitle() {
    let element = document.getElementById("title")
    if (isGreen) {
        element.innerHTML = "Titulo modificado"
        element.className = "aux"
        isGreen = false
    } else {
        element.innerHTML = "Hole mundo"
        element.className = "title"
        isGreen = true
    }
}

function addText() {
    let inputElement = document.getElementById("input")
    let value = inputElement.value
    if(value == "") {
        alert("Por favor escriba algo")
    } else {
        let containerElement = document.getElementById("container")
        containerElement.innerHTML += "<p class='text'>" + value + "</p>"
        inputElement.value = ""
    }
}