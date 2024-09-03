console.log("Hello world!")

const constanteString = "esto es un string"
const constanteNumerica = 12.432
const costanteBooleana = true

console.log(constanteString)
console.log(constanteNumerica)

var variable1 = 12
let variable2 = 3.3

console.log(variable1)

variable1 = 134

console.log(variable1)

const suma = (variable1 + variable2)/3
console.log(suma)

const concatenar = "Hola" + " " + "mundo: " + constanteString
console.log(concatenar)

const ejemplo = "1" + 1
console.log(ejemplo)

const entrega1 = 4
const entrega2 = 3
const entrega3 = 3
const labs = 2

const sumaDeNotas = entrega1 + entrega2 + entrega3 + labs
const notaFinal = sumaDeNotas/4
console.log(notaFinal)

let mensaje = ""
if(notaFinal >= 3) {
    mensaje = "Pasaste con: " + notaFinal
} else {
    mensaje = "Game over. Nos vemos el proximo semestre."
}
console.log(mensaje)
alert(mensaje)