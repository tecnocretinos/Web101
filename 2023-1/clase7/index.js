const a = false;

//  === !== > >= < <=
if (a !== true) {
  console.log("a es falso");
} else {
  console.log("a es verdadero");
}

if (!a) {
  console.log("a es falso");
} else {
  console.log("a es verdadero");
}

const b = 10;
const c = 4;
const d = b + c;

if (d > 20) {
  console.log("Es mayor a 20");
} else if (d > 10 && d <= 20) {
  console.log("Esta entre 10 y 20");
}

function calcularPromedio(nota1, nota2, nota3) {
  const sumaNotas = nota1 + nota2 + nota3;
  const promedio = sumaNotas / 3;
  return promedio;
}

const n1 = 3;
const n2 = 3;
const n3 = 3;
const n4 = 3;
const n5 = 3;
const n6 = 4;
const prom = calcularPromedio(n1, n2, n3);
const prom2 = calcularPromedio(n4, n5, n6);

const sumaPromedios = prom + prom2;
if (sumaPromedios < 6) {
  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Perdiste!";
} else if (sumaPromedios >= 6 && sumaPromedios < 8) {
  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Pasaste de forma mediocre :S! de: " + sumaPromedios;
  titulo.style.color = "#000000";
} else {
  const titulo = document.getElementById("titulo");
  titulo.innerHTML = "Pasaste!";
}

function cortarCable(pos) {
  console.log("Cable cortado en la pos: " + pos);
}

function desactivarBomba(totalCables) {
    // TODO: https://www.bombmanual.com/es/web/index.html
}

desactivarBomba(4);
