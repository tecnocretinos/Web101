const storage = window.localStorage
let usernames = []

function save() {
    const value = document.getElementById("username-input").value
    usernames.push(value)
    
    const usernamesString = JSON.stringify(usernames)
    storage.setItem("usernames", usernamesString)
    if(usernames.length >= 0) {
        const title = document.getElementById("title")
        title.innerHTML = "Usernames"
    }
    showAllUsernames()
}

function showAllUsernames() {
    const container = document.getElementById("container")
    const values = storage.getItem("usernames")
    container.innerHTML = ""
    const list = JSON.parse(values)
        for(let i = 0; i < list.length; i++) {
        const val = list[i]
        container.innerHTML += `<li>${val}</li>`
    }
}

function fillUsernames() {
    const values = storage.getItem("usernames")
    const list = JSON.parse(values)
    for(let i = 0; i < list.length; i++) {
        const val = list[i]
        usernames.push(val)
    }

    if(usernames.length >= 0) {
        const title = document.getElementById("title")
        title.innerHTML = "Usernames"
    }
}

fillUsernames()
showAllUsernames()