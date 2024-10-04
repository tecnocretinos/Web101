let products = []
function parseDataToProducts() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        let product = new Product(map["id"], map["title"], map["price"], map["description"], map["images"], map["category"]["name"])
        products.push(product)
    }
}

function renderAllProducts() {
    let container = document.getElementById("products")
    for(let i = 0; i < products.length; i++) {
        let product = products[i]
        container.innerHTML += product.htmlCard()
    }
}

parseDataToProducts()
renderAllProducts()