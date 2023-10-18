const params = new URLSearchParams(window.location.search)
const id = params.get('id')

function searchById(id) {
    for(let i = 0; i < products.length; i++) {
        const product = products[i]
        if(product.id+"" === id) {
            return product
        }
    }
}

let products = []
for(let i = 0; i < data.length; i++) {
    const productJson = data[i]
    const product = new Product(productJson.id, 
            productJson.title, 
            productJson.description, 
            productJson.price,
            productJson.images, 
            productJson.category.name)
    products.push(product)      
}

const selectedProduct = searchById(id)

const container = document.getElementById("container")
container.innerHTML = selectedProduct.toDetailHtml()