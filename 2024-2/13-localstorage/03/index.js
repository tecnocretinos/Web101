//localStorage.setItem("myCat", "Otro gato")

//let cat = localStorage.getItem("myCat")

//localStorage.removeItem("myCat")

let user = {
    id: 1,
    name: "Tiago",
    age: 12,
    email: "msantim@hotmail.com"
}

let json = JSON.stringify(user)
localStorage.setItem("user", json)

let userString = localStorage.getItem("user")
let userMap = JSON.parse(userString)

console.log(userMap)