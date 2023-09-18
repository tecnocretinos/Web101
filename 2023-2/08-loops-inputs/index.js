function renderOneNumber(num) {
    const container = document.getElementById("container")
    if(num % 2 === 0) {
        container.innerHTML += `
        <div class="par">
            <h4>#${num}</h4>
        </div>
        `   
    } else {
        container.innerHTML += `
        <div class="impar">
            <h4>#${num}</h4>
        </div>
        `
    }
}

function renderNumbersWhile(total) {
    var contador = 1
    while(contador <= total) {
        renderOneNumber(contador)
        contador += 1
    }
}

function renderNumbersFor(total) {
    for(var contador = 1; contador <= total; contador += 1) {
        renderOneNumber(contador)
    }
}

function pokemonFight(lifeP1, attackP1, lifeP2, attackP2) {
    var turno = 1
    while(lifeP1 > 0 && lifeP2 > 0) {
        if(turno === 1) {
            lifeP2 = lifeP2 - attackP1
            turno = 2
        } else {
            lifeP1 = lifeP1 - attackP2
            turno = 1
        }
    }
    if(lifeP1 <= 0) {
        console.log("Pokemon 2 ganó")
    } else {
        console.log("Pokemon 1 ganó")
    }
}

function addNumber() {
    const number = document.getElementById("number")
    const value = number.value
    renderOneNumber(value)
}

var value = 0

function add() {
    const result = document.getElementById("result")
    const number2 = document.getElementById("number2")
    value += Number(number2.value)
    result.innerHTML = "La suma va en: " + value
    number2.value = ""
}

renderNumbersFor(50)