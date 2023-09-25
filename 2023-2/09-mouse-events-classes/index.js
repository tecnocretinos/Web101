var size = 200

function enter_old() {
    size += 20
    const container = document.getElementById("container")
    container.style.backgroundColor = "blue"
    container.style.height = `${size}px`
    container.style.width = `${size}px`
}

function leave_old() {
    console.log("Leave here")
    const container = document.getElementById("container")
    container.style.backgroundColor = "red"
}

function enter() {
    const container = document.getElementById("container")
    container.classList.remove("red")
    container.classList.add("blue")
}

function leave() {
    const container = document.getElementById("container")
    container.classList.remove("blue")
    container.classList.add("red")
}

function showModal() {
    const modal = document.getElementById("modal")
    modal.classList.remove("hidden")
}

function hideModal() {
    const modal = document.getElementById("modal")
    modal.classList.add("hidden")
}