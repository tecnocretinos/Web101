let movie = {
    title: "Shrek",
    description: "Best movie ever!",
    img: "https://pics.filmaffinity.com/shrek-903764423-large.jpg",
    score: 5,
    active: true,
    comments: [
        {
            user: "@espaciotiago",
            comment: "Gran peli"
        },
        {
            user: "@espaciotiago2",
            comment: "x2"
        }
    ]
}

let movies = [movie, movie, movie, movie, movie]

function renderMovie(m) {
    let container = document.getElementById("container")
    container.innerHTML += `
        <div>
            <h1>${m.title}</h1>
            <p>${m.description}</p>
            <img src="${m.img}" height="300"/>
            <p>Score: ${m.score}</p>
        </div>
    `
}

for(let i = 0; i < movies.length; i++) {
    const movie = movies[i]
    renderMovie(movie)
}
