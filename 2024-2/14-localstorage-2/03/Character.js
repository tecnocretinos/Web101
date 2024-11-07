class Character {
    constructor(id, name, img, saved) {
        this.id = id
        this.name = name
        this.img = img
        this.saved = saved
    }

    toHtml(pos) {
        
        let buttonLabel = "Guardar"
        if(this.saved) {
            buttonLabel = "Quitar"
        }

        let label = ""
        if(this.saved) {
            label = "<label>Guardado</label>"
        }
        return `
        <div class="item">
            <img src="${this.img}" alt="">
            <div class="info">
                ${label}
                <p>${this.name}</p>
                <button onclick="selected(${pos})">${buttonLabel}</button>
            </div>
        </div>
        `
    }

    toHtmlFavoritos(pos) {
        return `
        <div class="item-fav">
            <img src="${this.img}" alt="">
            <div class="info">
                <p>${this.name}</p>
            </div>
        </div>
        `
    }

    toMap() {
        return {
            id: this.id,
            name: this.name,
            img: this.img,
            saved: this.saved
        }
    }
}