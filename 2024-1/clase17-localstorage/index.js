const localStorage = window.localStorage

function addNewKey(key, value) {
    localStorage.setItem(key, value)
}

function getItem(key) {
    return localStorage.getItem(key)
}

function removeItem(key) {
    localStorage.removeItem(key)
}

const savedName = getItem("name")
if(savedName) {
    console.log("Hola " + savedName)
} else {
    console.log("Ningun nombre guardado")
}