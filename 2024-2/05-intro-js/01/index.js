console.log("Hola mundo, este es mi primer programa en JS!! :D")
const nombreDeLaConstanteString = "Cadena de caracteres (String)"
const constanteNumerica = 134.1312
const constanteBooleana = true

var unaVariable = 1
let otraVariable = 3 

console.log(unaVariable)
unaVariable = 4
console.log(unaVariable)

const suma = 100 + 67
console.log(suma)

const sumaVariables = (unaVariable + otraVariable)*2
console.log(sumaVariables)

const concatenada = "Hola!!" + " " + nombreDeLaConstanteString
console.log(concatenada)

const ejemplo = "1" + 1
console.log(ejemplo)

const entrega1 = 1
const entrega2 = 1
const entrega3 = 3
const labs = 1

const sumaDeNotas = entrega1 + entrega2 + entrega3 + labs
const notaFinal = sumaDeNotas/4
console.log(notaFinal)

let mensaje = ""
if(notaFinal >= 3) {
    mensaje = "Pasaste la materia con: " + notaFinal
} else {
    mensaje = "Game over! Nos vemos el proximo semestre."
}
console.log(mensaje)
