const params = new URLSearchParams(window.location.search)
const idFromUrl = params.get('id')

function searchUser(){
    let user = null
    for(let i = 0; i < data.length; i++) {
        const obj = data[i]
        if(obj.id == idFromUrl) {
            user = new User(obj.id, obj.name, obj.email, obj.active)
        }
    }
    return user
}

function createView() {
    const user = searchUser()
    if(user) {
        const title = document.getElementById("title")
        const name = document.getElementById("name")
        const email = document.getElementById("email")

        title.innerHTML = "Detalle del usuario: " + user.id
        name.innerHTML = user.name
        email.innerHTML = user.email
    } else {
        alert("No hay coincidencias para el usuario: " + idFromUrl)
    }
}

createView()