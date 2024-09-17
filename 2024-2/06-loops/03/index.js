let contador = 0
while(contador <= 5) {
    if(contador % 2 === 0) {
        console.log("Contador: (Par)" + contador)
    } else {
        console.log("Contador: (Inpar)" + contador)
    }
    //contador = contador + 1
    contador++
}
console.log("Finish")


for(let i = 0; i <= 5; i++) {
    if(i % 2 === 0) {
        console.log("Contador: (Par)" + i)
    } else {
        console.log("Contador: (Inpar)" + i)
    }
}
console.log("Finish")