function greeting() {
    const name = "Camila"
    console.log("Hola " + name + "!")
}

function greetingWithParams(name) {
    console.log("Hola " + name + "!")
}

function greetingWithParamsAndReturn(name) {
    const saludo = "Hola " + name + "!"
    return saludo
}

function calculateFinalScore(nota1, nota2, nota3, nota4) {
    const final = (nota1*0.3) + (nota2*0.3) + (nota3*0.3) + (nota4*0.1)
    return final
}

function explainConditionals(a, b) {
    var result = ""
    if(a > b) {
        result = "El numero a es mayor al numero b"
    } else if (a === b) {
        result = "Los dos numeros son iguales"
    } else {
        result = "El numero b es mayor al numero a"
    }
    console.log(result)

    var resultScore = ""
    const iLike = "Me cae mal"
    const finalScore = calculateFinalScore(4,2,3,5)
    if(finalScore > 3 && iLike === "Me cae bien") {
        resultScore = "Paso!"
    } else if(finalScore > 3 && iLike === "Me cae mal") {
        resultScore = "No paso, pero no te quiero ver, mete con otro profe"
    } else {
        resultScore = "Nos vemos el proximo semestre"
    }
    console.log(resultScore)
}

function init() {
    greeting()
    greetingWithParams("Juan")
    const newName = "Andrea" + " Con apellido"
    greetingWithParams(newName)
    greetingWithParams("Messi")

    const saludo = greetingWithParamsAndReturn("Daniel")
    console.log(saludo)
    console.log("---------------------------------------")
    console.log("CONDICIONALES")
    console.log("---------------------------------------")
    explainConditionals(1,2)
}

init()