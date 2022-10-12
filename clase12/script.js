// Supose to get this from the API
data = [
    {
        "id": 18,
        "title": "Sleek Fresh Sausage",
        "price": 350,
        "description": "The slim & simple Maple Gaming Keyboard from Dev Byte comes with a sleek body and 7- Color RGB LED Back-lighting for smart functionality",
        "category": {
            "id": 1,
            "name": "Clothes",
            "image": "https://api.lorem.space/image/fashion?w=640&h=480&r=9765"
        },
        "images": [
            "https://api.lorem.space/image/fashion?w=640&h=480&r=2868",
            "https://api.lorem.space/image/fashion?w=640&h=480&r=847",
            "https://api.lorem.space/image/fashion?w=640&h=480&r=4496"
        ]
    },
    {
        "id": 21,
        "title": "Ergonomic Steel Soap",
        "price": 143,
        "description": "New ABC 13 9370, 13.3, 5th Gen CoreA5-8250U, 8GB RAM, 256GB SSD, power UHD Graphics, OS 10 Home, OS Office A & J 2016",
        "category": {
            "id": 5,
            "name": "Others",
            "image": "https://api.lorem.space/image?w=640&h=480&r=7388"
        },
        "images": [
            "https://api.lorem.space/image?w=640&h=480&r=2881",
            "https://api.lorem.space/image?w=640&h=480&r=7522",
            "https://api.lorem.space/image?w=640&h=480&r=5717"
        ]
    },
    {
        "id": 22,
        "title": "Handcrafted Cotton Mouse",
        "price": 630,
        "description": "The beautiful range of Apple Naturalé that has an exciting mix of natural ingredients. With the Goodness of 100% Natural Ingredients",
        "category": {
            "id": 5,
            "name": "Others",
            "image": "https://api.lorem.space/image?w=640&h=480&r=7388"
        },
        "images": [
            "https://api.lorem.space/image?w=640&h=480&r=4915",
            "https://api.lorem.space/image?w=640&h=480&r=9914",
            "https://api.lorem.space/image?w=640&h=480&r=4147"
        ]
    },
    {
        "id": 24,
        "title": "Small Steel Mouse",
        "price": 381,
        "description": "Andy shoes are designed to keeping in mind durability as well as trends, the most stylish range of shoes & sandals",
        "category": {
            "id": 3,
            "name": "Furniture",
            "image": "https://api.lorem.space/image/furniture?w=640&h=480&r=1192"
        },
        "images": [
            "https://api.lorem.space/image/furniture?w=640&h=480&r=2761",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=459",
            "https://api.lorem.space/image/furniture?w=640&h=480&r=612"
        ]
    }
]

// Create Product Class
class Product {
    constructor(id, title, price, description, images) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.images = images
    }

    getFirstImage() {
        if (this.images.length > 0) {
            return this.images[0]
        } else {
            return "https://www.xgroup.com.co/wp-content/uploads/woocommerce-placeholder.png"
        }
    }
}

// Add product to the view
const productsContainerDiv = document.getElementById("products-container")
var productListHtml = ""

function addProductToView(product) {
    productListHtml += `
    <div class="product-card">
        <img alt="product" width="120" height="120" 
        src="${product.getFirstImage()}" />
        <div>
            <h3>${product.title}</h3>
            <p>${product.price} USD</p>
        </div>
    </div>
    `
    productsContainerDiv.innerHTML += productListHtml
}

function parseMapToProduct(map) {
    return new Product(map.id, map.title, map.price, map.description, map.images)
}

function showAllProducts() {
    data.forEach( productMap => {
        const product = parseMapToProduct(productMap)
        addProductToView(product)
    });
}

showAllProducts()

