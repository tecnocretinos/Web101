async function getAgents() {
    let response = await fetch("https://valorant-api.com/v1/agents")
    let json = await response.json()
    console.log(json)
}

getAgents()