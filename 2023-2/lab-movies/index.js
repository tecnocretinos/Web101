const storage = window.localStorage
// Traer lista del storage
const moviesStringList = storage.getItem("movies")
const moviesJsonList = JSON.parse(moviesStringList)

// Convertir lista de mapas a lista de Movies
let movies = []
for(let i = 0; i < moviesJsonList.length; i++) {
    const jsonObj = moviesJsonList[i]
    const movie = new Movie(jsonObj.title, 
        jsonObj.overview, 
        jsonObj.cover_url,
        jsonObj.duration)
    movies.push(movie)
}

// Llenar la informacion del banner en la vista
function createBanner(movie) {
    const bannerDiv = document.getElementById("banner")
    bannerDiv.innerHTML = movie.toHtmlBanner()
}

// Llenar la lista de peliculas en la vista
function renderAllMovies() {
    const container = document.getElementById("container")
    for(let i = 0; i < movies.length; i++) {
        const movie = movies[i]
        container.innerHTML += movie.toHtmlCover(i)
    }
}

// Cuando se selecciona una movie
function movieSelected(position) {
    const movie = movies[position]
    createBanner(movie)

    // Des seleccionar todas las peliculas
    for(let i = 0; i < moviesJsonList.length; i++) {
        moviesJsonList[i].selected = false
    }

    // Marcar seleccionada como selected en true
    moviesJsonList[position].selected = true

    // Actualizar lista del storage con la seleccionada
    const newStringList = JSON.stringify(moviesJsonList)
    storage.setItem("movies", newStringList)
}

var selectedMovie = movies[0]
for(let i = 0; i < moviesJsonList.length; i++) {
    const movie = moviesJsonList[i]
    if(movie.selected) {
        selectedMovie = movies[i]
    }
}
createBanner(selectedMovie)
renderAllMovies()