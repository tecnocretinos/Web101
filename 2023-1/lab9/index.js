function showModal() {
    const modal = document.getElementById("modal")
    modal.classList.remove("hide")
    modal.classList.add("show")
}

function hideModal() {
    const modal = document.getElementById("modal")
    modal.classList.remove("show")
    modal.classList.add("hide")
}