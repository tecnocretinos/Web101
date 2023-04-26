class Character {
    constructor(id, name, image) {
        this.id = id
        this.name = name
        this.image = image
    }

    toHtml(pos) {
        return `
        <div class="card" onclick="selected(${pos})">
            <p>${this.name}</p>
            <img width="100" src="${this.image}" />
        </div>
        `
    }
}