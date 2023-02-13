// Logged user validation
const storage = window.localStorage
function validateLoggedUser() {
    const loggedUser = storage.getItem("user")
    const user = JSON.parse(loggedUser)
    if(!user.isLogged) {
        window.location.href = './login.html'
    } else {
        getButtonInfo()
    }
}

// Mock data simulating that i get the current item from the API
const data = [
    {
        id: 1,
        label: "Click me 1"
    },
    {
        id: 2,
        label: "Click me 2"
    },
    {
        id: 3,
        label: "Click me 3"
    },
    {
        id: 4,
        label: "Click me 4"
    }
]
function getButtonById(id) {
    const button = data.find(e => {
        return e.id + "" === id
    })
    return button
}

function getButtonInfo() {
    const params = new URLSearchParams(window.location.search)
    const buttonId = params.get('id')
    const button = getButtonById(buttonId)

    const idP = document.getElementById("id")
    const labelP = document.getElementById("label")

    idP.innerHTML = button.id
    labelP.innerHTML = button.label
}


validateLoggedUser()