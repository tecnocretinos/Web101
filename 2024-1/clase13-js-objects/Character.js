class Character {

    constructor(name, isAlive, race, lastLocation, firsSeen, imageUrl) {
        this.name = name
        if(isAlive === "Alive") {
            this.isAlive = "Vivo"
        } else {
            this.isAlive = "Muerto"
        }
        this.race = race
        this.lastLocation = lastLocation
        this.firsSeen = firsSeen
        this.imageUrl = imageUrl
    }

    createHtml() {
        return `
        <div class="character">
            <img src="${this.imageUrl}"></img>
            <p>${this.name}</p>
            <p>${this.isAlive} - ${this.race}</p>
            <p><b>Last location:</b> ${this.lastLocation}</p>
            <p><b>First seen in:</b> ${this.firsSeen}</p>
        </div>
        `
    }
}