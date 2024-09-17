let list = ["Perro", "Gato", "Pez"]
list.push("Hamster")
list.push("Hamster 2")
list.push("Perro bravo")

for(let i = 0; i < list.length; i++) {
    let animal = list[i]
    console.log(animal)
}


let search = "Pe"
let searchList = []
for(let i = 0; i < list.length; i++) {
    let animal = list[i]
    if(animal.includes(search)){
        searchList.push(animal)
    }
}
console.log(searchList)