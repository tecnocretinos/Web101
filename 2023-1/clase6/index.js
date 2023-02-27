//Definir una variable con let
let numeroA = 19079300379832;
// Definier una variable con var
var numeroB = 28721938721908120983;
// Sumar dos valores
var suma = numeroA + numeroB;
// Imprimer en consola el resultado
console.log(suma);

// Concatenar strings
const nombre = "Tiago";
const saludo = "Hola " + nombre + ". Bienvenido de vuelta!";
console.log(saludo);

// Calcular el promedio de tres notas
function calcularPromedio(nota1, nota2, nota3) {
  const sumaNotas = nota1 + nota2 + nota3;
  const promedio = sumaNotas / 3;
  console.log(promedio);
}

// Calcula la nota final de acuerdo a procentajes
// TODO: Volver funcion porque aqui explota
const nota4 = nota1 * 0.5;
const nota5 = nota2 * 0.25;
const nota6 = nota3 * 0.25;
const notaFinal = nota4 + nota5 + nota6;
console.log(notaFinal);

const nota1 = 3;
const nota2 = 6;
const nota3 = 9;
calcularPromedio(nota1, nota2, nota3);

calcularPromedio(5, 10, 15);
calcularPromedio(500, 190, 1588);
