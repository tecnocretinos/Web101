class Product {
    constructor(id, title, description, price, images, categoryName) {
        this.id = id
        this.title = title
        this.description = description
        this.price = price
        this.images = images
        this.categoryName = categoryName
        this.active = true
    }

    toCardHtml(position) {
        return `
        <div class="product" onclick='productSelected(${position})'>
            <h2>${this.title}</h2>
            <img 
            height="120"
            alt="product" 
            src="${this.images[0]}"/>
            <div class="images">
                <img 
            height="40"
            alt="product" 
            src="${this.images[0]}"/>
            <img 
            height="40"
            alt="product" 
            src="${this.images[1]}"/>
            <img 
            height="40"
            alt="product" 
            src="${this.images[2]}"/>
            </div>
            <label>${this.categoryName}</label>
            <p>${this.description}</p>
            <label>$ ${this.price}</label>
        </div>
        `
    }

    toDetailHtml() {
        return `
        <div class="product detail">
            <h2>${this.title}</h2>
            <img 
            height="120"
            alt="product" 
            src="${this.images[0]}"/>
            <div class="images">
                <img 
            height="40"
            alt="product" 
            src="${this.images[0]}"/>
            <img 
            height="40"
            alt="product" 
            src="${this.images[1]}"/>
            <img 
            height="40"
            alt="product" 
            src="${this.images[2]}"/>
            </div>
            <label>${this.categoryName}</label>
            <p>${this.description}</p>
            <label>$ ${this.price}</label>
        </div>
        `
    }
}