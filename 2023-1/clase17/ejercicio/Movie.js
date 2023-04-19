class Movie {
    constructor(name, desc, image, stars) {
        this.name = name
        this.desc = desc
        this.image = image
        this.stars = stars
    }

    toHtml(id) {

        let starsContainer = "<div class='stars'>"
        for(let i = 0; i < this.stars; i++) {
            starsContainer += '<div class="star"></div>'
        }
        starsContainer += "</div>"

        return `
        <div id=${id} onclick="movieSelected(${id})" class="movie-item">
            <img src="${this.image}" class="movie-img"/>
            ${starsContainer}
        </div>
        `
    }

    toBanner() {
        return `
        <div>
            <h2 id="name">${this.name}</h2>
            <p id="desc">${this.desc}</p>
            <div id="image">
                <img src="${this.image}" />
            </div>
        </div>
        `
    }
}