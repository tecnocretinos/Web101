function createMovies(number) {
    const container = document.getElementById("main-container")
    for(let i = 0; i < number; i++) {
        const movieName = "Fast and furious #" + (i+1)
        const image = "https://i.ebayimg.com/images/g/fnwAAOSwq7VgWs6B/s-l1600.jpg"
        const altImage = "https://musicart.xboxlive.com/7/a7b41000-0000-0000-0000-000000000002/504/image.jpg?w=1920&h=1080"
        let imageToUse = ""
        if((i % 2) === 0) {
            imageToUse = image
        } else {
            imageToUse = altImage
        }

        container.innerHTML += `
        <div class="item">
            <div>
                <img alt="cover" src="${imageToUse}"/>
            </div>
            <p>${movieName}</p>
        </div>
        `
    }
}

createMovies(10)