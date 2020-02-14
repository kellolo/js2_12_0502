const products = [
    {id: 1, name: 'AteloCollagen - Коллагеновый очищающий гель с ателоколлагеном и морскими минералами', price: 990, img: 'https://via.placeholder.com/200x150'},
    {id: 2, name: 'AteloCollagen - Коллагеновый тоник с ателоколлагеном и морскими минералами', price: 935, img: 'https://via.placeholder.com/200x150'},
    {id: 3, name: 'AteloCollagen – Разглаживающий морщины коллагеновый крем с ателоколлагеном и морскими минералами', price: 2030, img: 'https://via.placeholder.com/200x150'},
    {id: 4, name: 'Hyaluron Plus - Активно увлажняющий крем для области вокруг глаз', price: 996, img: 'https://via.placeholder.com/200x150'},
    {id: 5, name: 'Hyaluron Plus - Очищающее молочко с гиалуроновой кислотой', price: 880, img: 'https://via.placeholder.com/200x150'},
    {id: 6, name: 'MultiVitamin — Питательная витаминная маска', price: 1265, img: 'https://via.placeholder.com/200x150'},
    {id: 7, name: 'Антибактериальный тоник Acne - Antibacterial tonic', price: 880, img: 'https://via.placeholder.com/200x150'},
    {id: 8, name: 'Гиалуроновая маска для активного увлажнения кожи / Hyaluron Plus - Hyaluronic mask active moisturizing', price: 1200, img: 'https://via.placeholder.com/200x150'}
]

class Item {
    constructor(element) {
        this.id = element.id
        this.name = element.name
        this.price = element.price
        this.img = element.img
    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.name}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" 
                            data-id="${this.id}"
                            data-name="${this.name}"
                            data-image="${this.img}"
                            data-price="${this.price}">Купить</button>
                    </div>
                </div>`
    }
}

class CartItem  {
    constructor(element) {
        this.id = element.id
        this.name = element.name
        this.price = element.price
        this.img = element.img
        this.quant = element.quant
    }
    render() {
        return `<div class="cart-item" data-id="${this.id}">
                    <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.name}</p>
                            <p class="product-quantity">Quantity: ${this.quant}</p>
                            <p class="product-single-price">$${this.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <p class="product-price">${this.quant * this.price}</p>
                        <button class="del-btn" data-id="${this.id}">&times;</button>
                    </div>
                </div>`
    }
}

class List {
    constructor(container) {
        this.container = document.querySelector(container)
        this.products = []
        this._init()
    }
    _init() {
        this.products = products
        this._render()
    }
    _render() {
        let listHtml = ''
        this.products.forEach(element => {
            const prod = new Item (element)
            listHtml += prod.render()
        })
        this.container.innerHTML = listHtml
        this.totalCoast()
    }
    totalCoast() {
        let sum = 0
        this.products.forEach(element => sum += element.price)
        return sum
    }
}

class Catalog extends List {
    addToCart(elem) {
        cart.checkQuant(elem)
    }
}

class Cart extends List {
    constructor(...attrs) {
        super(attrs)
    }

}

const list = new List('.products')