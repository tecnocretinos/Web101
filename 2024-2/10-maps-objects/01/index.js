let map = {
    key: "value",
    id: 0,
    name: "Santiago Moreno",
    email: "msantim@hotmail.com",
    active: true,
    income: 10000,
    transport: {
        model: 2019,
        brand: "Nissan",
        kms: 50000,
        forSale: false,
        type: "Car"
    },
    pets: [
        {
            name: "Dopamina",
            type: "Cat"
        },
        {
            name: "Bourbon",
            type: "Dog"
        }
    ]
}

let petContainer = document.getElementById("pets-container")
let h1Element = document.getElementById("title")
let pElement = document.getElementById("subtitle")

h1Element.innerHTML = map["name"]
pElement.innerHTML = map["email"]

let pets = map["pets"]
for(let i = 0; i < pets.length; i++) {
    let pet = pets[i]
    let petName = pet["name"]
    petContainer.innerHTML += `
        <p>${petName}</p>
    `
}