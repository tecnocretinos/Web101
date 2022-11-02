const fetchData = async () => {
    // Get the list from the api
    const data = await fetch('https://rickandmortyapi.com/api/character')
    // Convert to json
    const dataJson = await data.json()
    // Print the results
    console.log(dataJson.results)
}

fetchData()