const fetchData = async () => {
    const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10'
    // Get the list from the api
    const data = await fetch(url)
    // Convert to json
    const dataJson = await data.json()
    // Print the results
    console.log(dataJson)
}

const fetchOne = async () => {
    const url = 'https://api.escuelajs.co/api/v1/products/10'
    // Get the list from the api
    const data = await fetch(url)
    // Convert to json
    const dataJson = await data.json()
    // Print the results
    console.log(dataJson)
}

function fetchAsync() {
    const url = 'https://api.escuelajs.co/api/v1/products?offset=0&limit=10'
    fetch(url)
        .then(response => {
            response.json().then(data => {
                console.log(data)
            })
        })
}

fetchData()
fetchOne()
//fetchAsync()