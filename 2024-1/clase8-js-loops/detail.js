let name = "Tiago"
if(name === "") {
    let mainTitle = document.getElementById("main-title")
    mainTitle.innerHTML = "Bienvenido"
} else {
    let mainTitle = document.getElementById("main-title")
    mainTitle.innerHTML = "Hola, " + name + "!"
}

const p = "<p>Hola mundo!</p>"
let elements = ""
for(let counter2 = 0; counter2 <= 10; counter2++) {
    elements += p
}

console.log(elements)
let mainContainer = document.getElementById("container")
mainContainer.innerHTML = elements