function renderAllProducts(products) {
    let container = document.getElementById("container")
    container.innerHTML = ""
    for(let i = 0; i < products.length; i++) {
        const product = products[i]
        container.innerHTML += `
        <div class="product">
            <h2>${product.title}</h2>
            <img 
            height="120"
            alt="product" 
            src="${product.images[0]}"/>
            <div class="images">
                <img 
            height="40"
            alt="product" 
            src="${product.images[0]}"/>
            <img 
            height="40"
            alt="product" 
            src="${product.images[1]}"/>
            <img 
            height="40"
            alt="product" 
            src="${product.images[2]}"/>
            </div>
            <p>${product.description}</p>
            <label>$ ${product.price}</label>
        </div>
        `
    }
}

function search() {
    const value = document.getElementById("search").value
    let list = []
    for(let i = 0; i < data.length; i++) {
        const product = data[i]
        if(product.title.toLowerCase().includes(value.toLowerCase()) || 
        product.description.toLowerCase().includes(value.toLowerCase()) ||
        product.category.name.toLowerCase().includes(value.toLowerCase())) {
            list.push(product)
        }
    }
    renderAllProducts(list)
}

function searchByCategory(category) {
    let list = []
    for(let i = 0; i < data.length; i++) {
        const product = data[i]
        if(product.category.name.toLowerCase() === category.toLowerCase()) {
            list.push(product)
        }
    }
    renderAllProducts(list)
}   

renderAllProducts(data)
