async function get() {
    const response = await fetch('https://rickandmortyapi.com/api/character');
    const json = await response.json()
    console.log(json)
    
    const list = json.results
    
    for(let i = 0; i < list.length; i++){
        const obj = list[i]
        console.log(obj)
    }
}

function redirect() {
    window.location.href = "./detail.html?texto=Hola soy un id&id=0&var=foo"
}

get()