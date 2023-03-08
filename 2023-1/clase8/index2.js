const name = "Tiago"
const concatenado = "Este es un texto " + name + " que esta concatenado"
console.log(concatenado)

const bigText = `
Hola ${name}! <br/>
Bienvenido de vuelta
`
console.log(bigText)

const tituloRef = document.getElementById("titulo")
tituloRef.innerHTML = bigText

const contenedorRef = document.getElementById("contenedor")
for(let i = 0; i < 500; i++) {
    const htmlExample = `
    <div class="card">
       <h2>Subtitulo ${i}</h2>
       <p>Hola soy un parrafo #${i}</p>
       <button id="btn${i}">Click me</button>
       <hr/>
    </div>
    `
    contenedorRef.innerHTML += htmlExample
}

// Agregarle funcion de clic a cada boton
for(let i = 0; i < 500; i++) {
    const elem = document.getElementById("btn"+i)
    elem.addEventListener("click", () => {
        console.log(i)
    })
}
