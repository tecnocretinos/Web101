let container = document.getElementById("users-container")
let listOfUsers = []
let data = []

async function getData() {
    const response = await fetch("https://raw.githubusercontent.com/tecnocretinos/Web101/main/2024-1/clase16-fetch/data.json")
    data = await response.json()
    createView()
}

function changeStatus(position) {
    const userToUse = listOfUsers[position]
    userToUse.status = !userToUse.status
    renderView()
}

function seeDetail(position) {
    const userToUse = listOfUsers[position]
    window.location.href = "./detail.html?id="+userToUse.id+"&name="+userToUse.name
}

function renderView() {
    container.innerHTML = ""
    for(let i = 0; i < listOfUsers.length; i++) {
        const user = listOfUsers[i]
        container.innerHTML += user.createHtml(i)
    }
}

function parseDataToUsers() {
    for(let i = 0; i < data.length; i++) {
        const obj = data[i]
        const user = new User(obj.id, obj.name, obj.email, obj.active)
        listOfUsers.push(user)
    }
}

function createView() {
    parseDataToUsers()
    renderView()
}

getData()