const conatainer = document.getElementById("main-container")
let list = []

for(let j = 0; j < 100; j++) {
    list.push(`Tarea #${j}`)
}
revealList()

function add() {
    const input = document.getElementById("input-task")
    const value = input.value
    list.push(value)
    input.value = ""

    revealList()
}

function revealList() {
    conatainer.innerHTML = ""
    for(let i = 0; i < list.length; i++) {
        const element = list[i]
        conatainer.innerHTML += `
        <div>
            <p>${element}</p>
        </div>
        `
    }
}