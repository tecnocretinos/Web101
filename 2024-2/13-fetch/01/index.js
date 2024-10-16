let data = []
async function getAgents() {
    let response = await fetch("https://valorant-api.com/v1/agents")
    let json = await response.json()
    data = json["data"]

    console.log(data)
}
getAgents()