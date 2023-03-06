var contador = 0; // Iniciar 
const valorFinal = 158
var termino = false
while (!termino) { // Condicion de fin
    if(contador === valorFinal) {
        termino = true
    }
    contador++ // Aumento de contador
}

// iniciar; condicion; aumento de contador
var suma = 0
for (let step = 0; step < 500; step++) {
    suma = suma + step   
}
console.log("Valor acumulado de pasos:", suma)

const num1 = 0
const num2 = 1
const num3 = 2
const num4 = 3
const num5 = 4

for(let count = 0; count < 10; count++) {
    if(count === 0 && num1 % 2 === 0){
        console.log(num1 + " Es par")
    } else if(count === 1 && num2 % 2 === 0){
        console.log(num2 + " Es par")
    } else if(count === 2 && num3 % 2 === 0){
        console.log(num3 + " Es par")
    } else if(count === 3 && num4 % 2 === 0){
        console.log(num4 + " Es par")
    } else if(count === 4 && num5 % 2 === 0){
        console.log(num5 + " Es par")
    }
}

