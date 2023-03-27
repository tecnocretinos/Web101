/**
 * T1. Escriba una funcion que reciba como parametro un arreglo/lista
 * de numeros. La funcion debe RETORNAR la suma total de todos
 * los numero de la lista. Pruebela imprimiendo en consola
 * un caso de uso de la funcion.
 */

function suma(num){
    const a = num.length
    var suma = 0
    for(let i = 0; i < a; i++){
        suma = suma + num[i]
    }       
    return suma
}

let num = []
num.push(1)
num.push(4)
num.push(1237)
num.push(10)
const sum = suma(num)
console.log(sum)


/**
 * T2. Escriba una funcion que reciba como parametro un arreglo/lista
 * de numeros. La funcion debe RETORNAR el promedio de los numeros
 * en la lista. Pruebela imprimiendo en consola
 * un caso de uso de la funcion.
 */
function hallarPromedio(arregloprom) {
    var suma = 0;

    for (var i = 0; i < arregloprom.length; i++) {
        suma += arregloprom[i];
    }

    var promedio = suma / arregloprom.length;

    return promedio;
}


/**
 * T3. Escriba una funcion que reciba como parametro un arreglo/lista
 * de numeros. La funcion debe RETORNAR el promedio de los numeros
 * en la lista. Esta vez se debe hacer usando la primera funcion 
 * desarrollada en T1 para hacer la suma.
 * Pruebela imprimiendo en consola
 * un caso de uso de la funcion.
 */

function newHallarPromedio(arregloprom) {
    const sum = suma(arregloprom)
    var promedio = sum / arregloprom.length;
    return promedio;
}

const newProm = newHallarPromedio(num)
console.log(newProm)