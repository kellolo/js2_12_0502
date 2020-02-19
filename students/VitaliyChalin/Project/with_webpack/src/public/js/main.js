const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80';
const URL_CATALOG = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/dataBase/catalogData.json'
const URL_CART = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/dataBase/cartData.json'
const API = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/dataBase'

class List { 
    constructor (url, container) {
        this.url = url
        this.container = container
        this.items = []
        this._init ()
    }
    _init () {
        return false
    }
    getData (url) {
        return fetch(API + url).then(d => d.json())
    }
    render () {
        let block = document.querySelector(this.container)
        let htmlStr = ''
        this.items.forEach (item => {
            let newProd = new classesDependency[this.constructor.name](item)
            htmlStr += newProd.getTemplate ()
        })
        block.innerHTML = htmlStr
    }
}

class Item {
    constructor (obj, img = image) {
        this.name = obj.name
        this.price = obj.price
        this.id = obj.id
        this.img = img
    }
    getTemplate () {
        return `<div class="product-item" data-id="${this.id}">
            <img src="${this.img}" alt="Some img">
            <div class="desc">
                <h3>${this.name}</h3>
                <p>${this.price} $</p>
                <button class="buy-btn" 
                name="buy-btn"
                data-id="${this.id}"
                data-name="${this.name}"
                data-img="${this.img}"
                data-price="${this.price}">Купить</button>
            </div>
        </div>`
    }
}

class Catalog extends List {
    constructor (linkToCart, url = '/catalogData.json', container = '.products') {
        super (url, container)
        this.cart = linkToCart
    }
    _init () {
        this.getData(this.url)
        .then (parsedData => { this.items = parsedData })
        .then (() => { this.render() })
        .finally (() => {
            document.querySelector(this.container).addEventListener ('click', evt => {
                if (evt.target.name === 'buy-btn') {
                    this.cart.addProduct (evt.target)
                }
            })
        })
    }
}

class Cart extends List {
    constructor (url = '/cartData.json', container = '.cart-block') {
        super (url, container)
    }
    _init () {
        this.getData(this.url)
        .then (parsedData => { this.items = parsedData.contents })
        .then (() => { this.render() })
        .finally (() => {
            document.querySelector(this.container).addEventListener ('click', evt => {
                if (evt.target.name === 'del-btn') {
                    this.removeProduct (evt.target.dataset.id)
                }
            })

            document.querySelector('.btn-cart').addEventListener ('click', () => {
                document.querySelector(this.container).classList.toggle('invisible')
            })
        })
    }

    addProduct (item) {
        let find = this.items.find (element => element.id == item.dataset.id);
        if (!find) {
            this.items.push (
                new CartItem ({
                    name: item.dataset.name,
                    id: item.dataset.id,
                    price: +item.dataset.price,
                    quant: 1
                })
            )
        }  else {
            find.quant++
        }
        this.render ()
    }
    removeProduct (id) {
        let find = this.items.find (element => element.id == id);
        if (find.quant > 1) {
            find.quant--
        }  else {
            this.items.splice (this.items.indexOf(find), 1)
        }
        this.render ()
    }
}

class CatalogItem extends Item {}
class CartItem extends Item {
    constructor (obj, img = cartImage) {
        super (obj, img)
        this.quant = obj.quant
    }
    getTemplate () {
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
                <button class="del-btn" name="del-btn" data-id="${this.id}">&times;</button>
            </div>
        </div>`
    }
}

let classesDependency = {
    Catalog: CatalogItem,
    Cart: CartItem
}

let cart = new Cart ()
let catalog = new Catalog (cart)