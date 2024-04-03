
const numbers = [1,2,3,4,5,6,7,8,9,0]
const operations = ["/","X","-","+","="]

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
    const result = document.getElementById("result")
    result.innerHTML += number
}

function onOperationClicked(operation) {
    console.log(operation)
}

function start() {
    createNumbers()
    createOperations()
}

start()