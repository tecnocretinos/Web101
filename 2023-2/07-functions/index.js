function suma(num1, num2) {
    const sum = num1 * num2
    return sum
}

function createPersonHtml(name, height, desc) {
    var status = ""
    if(height > 180) {
        status = "l"
    } else if(height > 170 && height <= 180) {
        status = "m"
    } else if(height <= 170) {
        status = "s"
    }
    const html = `
        <div class="card">
            <div class="status ${status}"></div>
            <p>${height}</p>
            <h1>${name}</h1>
            <p>${desc}</p>
        </div>
        `
    return html
}

function renderInitialView() {
    let container = document.getElementById("container")

    const person1 = "Jhon Doe"
    const person1h = 160

    const person2 = "Jane Doe"
    const person2h = 173

    const person3 = "Set Smith"
    const person3h = 184
    container.innerHTML += createPersonHtml(person1, person1h, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    container.innerHTML += createPersonHtml(person2, person2h, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
    container.innerHTML += createPersonHtml(person3, person3h, "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.")
}

renderInitialView()