class Movie {
    constructor(title, overview, image, duration) {
        this.title = title
        this.overview = overview
        this.image = image
        this.duration = duration
    }

    toHtmlBanner() {
        return `
        <img 
        class="banner-img"
        alt="banner image"
        src="${this.image}"
        >
        <h3>${this.title}</h3>
        <p class="overview">${this.overview}</p>
        `
    }

    toHtmlCover(position) {
        return `
        <div class="movie" onclick="movieSelected(${position})">
                <img 
                class="cover-img"
                alt="banner image"
                src="${this.image}"
                >
                <p class="duration">Duration: ${this.duration} min</p>
            </div>
        `
    }
}