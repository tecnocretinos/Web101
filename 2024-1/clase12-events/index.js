function clicked(text) {
    console.log("On Click " + text)
}

function enter() {
    const div = document.getElementById("blue")
    div.style.backgroundColor = "yellow"
}

function leave() {
    const div = document.getElementById("blue")
    div.style.backgroundColor = "blue"
}