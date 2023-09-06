const nota1 = 3
const nota2 = 4
const nota3 = 1
const suma = nota1 + nota2 + nota3
const promedio = suma / 3

// >, >=, <, <=, ===, !==
if(promedio >= 3) {
    console.log("Pasaste la materia con una nota de: " + promedio)
} else {
    console.log("Lo siento! No pasaste la materia con una nota de: " + promedio)
}

// && -> y
if(promedio < 2.5) {
    console.log("Nos vemos el proximo semestre")
} else if(promedio >= 2.5 && promedio < 3) {
    console.log("Profe colaboreme!")
} else if(promedio >= 3 && promedio < 4) {
    console.log("Pasaste de forma mediocre")
} else if(promedio >= 4 && promedio <= 5) {
    console.log("Buen trabajo")
} else {
    console.log("Hay un error con la nota")
}

// || -> o
const nombre = "santiago"
if(nombre === "Santiago" || nombre === "Jorge") {
    console.log("Es uno de los nombres buscados")
} else {
    console.log("No es uno de los nombres buscados")
}

// Conectar con mi html
const title = document.getElementById("title")
if(promedio < 2.5) {
    title.innerHTML = "Nos vemos el proximo semestre"
} else if(promedio >= 2.5 && promedio < 3) {
    title.innerHTML = "Profe colaboreme!"
} else if(promedio >= 3 && promedio < 4) {
    title.innerHTML = "Pasaste de forma mediocre"
} else if(promedio >= 4 && promedio <= 5) {
    title.innerHTML = "Buen trabajo"
} else {
    title.innerHTML = "Hay un error con la nota"
}

const contenedor = document.getElementById("contenedor")

if(promedio >= 3) {
    contenedor.innerHTML = "<h2 class='blue'>Pasaste!</h2>"
} else {
    contenedor.innerHTML = "<h2 class='red'>Lo siento!</h2>"
}