let container = document.getElementById("users-container")
let listOfUsers = []

function userClicked(position) {
    const user = listOfUsers[position]
    console.log(user.status)
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
    for(let i = 0; i < listOfUsers.length; i++) {
        const user = listOfUsers[i]
        container.innerHTML += user.createHtml(i)
    }
}

createView()