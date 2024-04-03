
const numbers = [1,2,3,4,5,6,7,8,9,0]
const operations = ["/","X","-","+","="]
var result = 0

function createNumbers() {
    const container = document.getElementById("numbers-container")
    for(let i = 0; i < numbers.length; i++) {
        let element = numbers[i]
        container.innerHTML += `<button onclick="onNumberClicked(${element})">${element}</button>`
    }
}

function createOperations() {
    const container = document.getElementById("opetarions-container")
    for(let i = 0; i < operations.length; i++) {
        let element = operations[i]
        container.innerHTML += `<button onclick="onOperationClicked('${element}')">${element}</button>`
    }
}

function onNumberClicked(number) {
    // TODO: Manejar caso de placeholder
    const result = document.getElementById("result")
    result.innerHTML += number
}

function onOperationClicked(operation) {
    // Obtener el valor del numero escrito
    const h1 = document.getElementById("result")
    const value = Number(h1.innerHTML)
    // Determinar si la operacion es suma o igual
    if(operation === "+") {
        // Sumar
        result = result + value
        h1.innerHTML = ""
    } else if(operation === "=") {
        // TODO: Mostrar resultado sin el bug
        h1.innerHTML = result
    }
    // TODO: Manejar los demas casos
}

function start() {
    createNumbers()
    createOperations()
}

start()