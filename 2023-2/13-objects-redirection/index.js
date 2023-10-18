function renderAllProducts(products) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    for(let i = 0; i < products.length; i++) {
        const product = products[i]
        container.innerHTML += product.toCardHtml(i)
    }
}

function search() {
    const value = document.getElementById("search").value
    let list = []
    for(let i = 0; i < products.length; i++) {
        const product = products[i]
        if(product.title.toLowerCase().includes(value.toLowerCase()) || 
        product.description.toLowerCase().includes(value.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(value.toLowerCase())) {
            list.push(product)
        }
    }
    renderAllProducts(list)
}

function searchByCategory(category) {
    let list = []
    for(let i = 0; i < products.length; i++) {
        const product = products[i]
        if(product.categoryName.toLowerCase() === category.toLowerCase()) {
            list.push(product)
        }
    }
    renderAllProducts(list)
}   

function productSelected(position) {
    const product = products[position]
    window.location.href = `./detail.html?id=${product.id}`
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

renderAllProducts(products)
