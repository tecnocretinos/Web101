/**
 * Cree una función que reciba como parametro una plabra (string)
 * y la busque en un arreglo de palabras. La función debe retornar
 * una lista con todas las palabras que coincidan o contengan el
 * string del parametro.
 * 
 * TIP: Use el metodo includes() de javascript
 * 
 * Por ejemplo: Si uso la función y le paso como parametro
 * el string "Col" la función deberia retornar la lista 
 * ["Col", "Coliflor"]
 */

const vegetales = [
    "Acelga", 
    "Ajo", 
    "Calabaza", 
    "Cebolla",
    "Col", 
    "Coliflor", 
    "Chayote", 
    "Chícharo", 
    "Ejote", 
    "Elote", 
    "Espinaca", 
    "Jitomate", 
    "Lechuga", 
    "Nopales", 
    "Papa", 
    "Pepino", 
    "Rábano", 
    "Romeritos", 
    "Zanahoria"
]

const animales = [
    "Perro", 
    "Gato", 
    "Oso", 
    "Caballo"
]

const nombres = [
    "Santiago", 
    "Maria", 
    "Juan", 
    "Jose"
]

function buscador (palabras, letras){
    var lista = []
    for (let i = 0; i < palabras.length; i++){
        const palabra = palabras[i]
        if (palabra.includes(letras)){
            lista.push(palabra)
        }
    }
    return lista
}

const input = document.getElementById("input")
const button = document.getElementById("button")

function buscarBoton() {
    var textoBuscar = document.getElementById("input").value
    var resultado = buscador(vegetales, textoBuscar)
    const contenedorBusca = document.getElementById("contenedor-busca")
    contenedorBusca.innerHTML = ""
for(let i = 0; i < resultado.length; i++){
    const palabra = resultado[i]
    contenedorBusca.innerHTML += "<p>" + palabra + "</p>"
}
    textoBuscar = ""
}