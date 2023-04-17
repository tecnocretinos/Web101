class Personaje {
    constructor(nombre, imagen, vivo, especie) {
        this.nombre = nombre
        this.imagen = imagen
        this.vivo = vivo
        this.especie = especie
    }

    toHtml() {
        return `
        <div class="card">
            <p><b>${this.nombre}</b></p>
            <img src="${this.imagen}" alt="personaje"/>
            <p>${this.especie}</p>
            <p>${this.vivo}</p>
        </div>
        `
    }
}