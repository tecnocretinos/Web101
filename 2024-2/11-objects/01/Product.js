class Product {
    constructor(id, title, price, description, images, categoryName) {
        this.id = id
        this.title = title
        this.price = price
        this.description = description
        this.images = images
        this.categoryName = categoryName
    }

    htmlCard() {
        return `
            <div class="product-item">
                <img src="${this.images[0]}" alt="">
                <div class="product-item-info">
                    <label>${this.categoryName}</label>
                    <p>${this.title}</p>
                    <br>
                    <br>
                    <br>
                    <br>
                    <br>
                    <h3>$ ${this.price}</h3>
                </div>
            </div>
        `
    }
}