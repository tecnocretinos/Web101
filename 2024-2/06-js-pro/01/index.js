function mostrarFinal(nota1, nota2, nota3, nota4) {
    const notaFinal = calcularPromedio(nota1, nota2, nota3, nota4)
    const mensaje = generarMensaje(notaFinal)
    alert(mensaje)
}

function calcularPromedio(nota1, nota2, nota3, nota4) {
    const sumaDeNotas = nota1 + nota2 + nota3 + nota4
    const notaFinal = sumaDeNotas/4
    return notaFinal
}

function generarMensaje(nota) {
    let mensaje = ""
    if(nota >= 0 && nota < 1) {
        mensaje = "Tenemos un problema."
    } else if(nota >= 1 && nota < 3) {
        mensaje = "Game over! No pasaste"
    } else if(nota >= 3 && nota < 4) {
        mensaje = "Pasaste pero raspando"
    } else if(nota > 5 || nota < 0) {
        mensaje = "Hay un error en el sistema"
    } else if(nota === 5) {
        mensaje = "Exelente"
    } else {
        mensaje = "Muy bien"
    }
    return mensaje
}

const entrega1 = 1
const entrega2 = 1
const entrega3 = 3
const labs = 1
mostrarFinal(entrega1, entrega2, entrega3, labs)
mostrarFinal(5,5,5,5)
mostrarFinal(0,0,0,0)