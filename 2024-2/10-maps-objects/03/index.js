let person = {
    firts_name: "Santiago Moreno B",
    cc: "1144000000",
    email: "msantim@hotmail.com",
    income: 1000,
    outcome: 100,
    active: true,
    transport: {
        type: "Car",
        brand: "Nissan",
        model: 2019
    },
    pets: [
        {
            type: "Cat",
            name: "Manolo"
        },
        {
            type: "Dog",
            name: "Dog"
        }
    ],
    something: ["S", "L", "M"]
}

const name = person["name"]
const email = person["email"]

const h1Element = document.getElementById("name")
h1Element.innerHTML = name

const pElement = document.getElementById("email")
pElement.innerHTML = email

const transport = person["transport"]
const brand = transport["brand"]
const model = transport["model"]

const brandPElement = document.getElementById("transport-brand")
const modelPElement = document.getElementById("transport-model")
brandPElement.innerHTML = brand
modelPElement.innerHTML = model

const petsContainer = document.getElementById("pets-container")
const pets = person["pets"]
for(let i = 0; i <pets.length; i++) {
    const pet = pets[i]
    const petName = pet["name"]
    petsContainer.innerHTML += `
        <p>${petName}</p>
    `
}