const params = new URLSearchParams(window.location.search)
const nameFromUrl = params.get("name")

function getProduct() {
    for(let i = 0; i < data.length; i++) {
        let map = data[i]
        if(map["title"] === nameFromUrl) {
            let product = new Product(map["id"], map["title"], map["price"], map["description"], map["images"], map["category"]["name"])
            return product
        }
    }
}

function renderProduct() {
    let product = getProduct()

    let h1Title = document.getElementById("title")
    h1Title.innerHTML = product.title

    let pDescription = document.getElementById("description")
    pDescription.innerHTML = product.description

    let h3Price = document.getElementById("price") 
    h3Price.innerHTML = "$ " + product.price

    let mainImg = document.getElementById("main-img")
    mainImg.src = product.images[0]
}

renderProduct()