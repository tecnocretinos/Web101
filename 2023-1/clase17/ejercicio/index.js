function setBannerInfo(newName, newDesc, newImageUrl) {
    const nameH2 = document.getElementById("name")
    nameH2.innerHTML = newName

    const descP = document.getElementById("desc")
    descP.innerHTML = newDesc

    const imageDiv = document.getElementById("image")
    imageDiv.innerHTML = `<img src="${newImageUrl}"/>`
}

function setBannerInfoNew(movie) {
    const bannerDiv = document.getElementById("banner-container")
    bannerDiv.innerHTML = movie.toBanner()
}

function movieSelected(id) {
    const movie = movies[id]
    //setBannerInfo(movie.name, movie.desc, movie.image)
    setBannerInfoNew(movie)
}

const moviesContainer = document.getElementById("movie-container")
const moviesContainer2 = document.getElementById("movie-container-2")

const m1 = new Movie("Peli1", "Desc1", "https://rickandmortyapi.com/api/character/avatar/10.jpeg", 3)
const m2 = new Movie("Peli2", "Desc2", "https://rickandmortyapi.com/api/character/avatar/11.jpeg", 2)
const m3 = new Movie("Peli3", "Desc3", "./images/12.jpeg", 5)
const movies = [m1, m2, m3]

for(let i = 0; i < movies.length; i++) {
    const movie = movies[i]
    moviesContainer.innerHTML += movie.toHtml(i)
}

/*
for(let j = 0; j < movies.length; j++) {
    const movie = movies[j]
    const item = document.getElementById(`${j}`)
    item.addEventListener("click", function() {
        setBannerInfo(movie.name, movie.desc, movie.image)
    })
}
*/

const firstMovie = movies[0]
//setBannerInfo(firstMovie.name, firstMovie.desc, firstMovie.image)
setBannerInfoNew(firstMovie)