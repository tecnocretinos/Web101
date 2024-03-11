let winner = ""
let turn = 1

const PA1 = 3
let PV1 = 10

const PA2 = 2
let PV2 = 15

while(PV1 > 0 && PV2 > 0) {
    if(turn === 1) {
        console.log("Pokemon 1 ataca a Pokemon 2")
        PV2 = PV2 - PA1
        console.log("Ahora la vida de Pokemon 2 es: " + PV2)
        turn = 2
        winner = "Pokemon 1"
    } else {
        console.log("Pokemon 2 ataca a Pokemon 1")
        PV1 = PV1 - PA2
        console.log("Ahora la vida de Pokemon 1 es: " + PV1)
        turn = 1
        winner = "Pokemon 2"
    }
}

console.log("Fin de la battala!")
console.log("Ganador: " + winner)


let counter = 0
const total = 10
while(counter <= total) {
    console.log(counter)
    counter++ 
}
console.log("Fin...")


for(let counter2 = 0; counter2 <= total; counter2++) {
    console.log(counter2)
}
console.log("Fin...")