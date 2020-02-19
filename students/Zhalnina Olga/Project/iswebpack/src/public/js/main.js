const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const imgURL = 'https://raw.githubusercontent.com/OlgaZh-UX/js2_12_0502/master/students/Zhalnina%20Olga/Project/iswebpack/src/public/img/';
const API = 'https://raw.githubusercontent.com/OlgaZh-UX/js2_12_0502/master/students/Zhalnina%20Olga/Project/iswebpack/src/server/db/'
//общий родительский класс списка товаров
class List {
    constructor (url, container) {
        this.url = url
        this.container = container
        this.items = []
        this._init ()
    }
    _init () {
        return false //проще переопределить далее
    }
    getData (url) {
        return fetch(API + url).then(d => d.json())
    }
    render () {
        let block = document.querySelector(this.container)
        let htmlStr = ''
        this.items.forEach(item => {            
            //создает класс товара в зависимости от вызываемого класса
            let newProd = new classesDependency[this.constructor.name](item)            
            htmlStr += newProd.getTemplate ()
        })
        block.innerHTML = htmlStr
    }
}
//общий родительский класс товаров
class Item {
    constructor (obj, img = image) {
        this.product_name = obj.product_name
        this.price = obj.price
        this.id_product = obj.id_product
        this.img = imgURL + obj.img
    }
    getTemplate () {
        return `<div class="product-item" data-id="${this.id_product}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.product_name}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" 
                        name="buy-btn"
                        data-id_product="${this.id_product}"
                        data-product_name="${this.product_name}"
                        data-img="${this.img}"
                        data-price="${this.price}">Купить</button>
                    </div>
                </div>`
    }    
}

//класс каталога товаров
class Catalog extends List {
    constructor (linkToCart, url = '/catalog.json', container = '.products') {
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
//класс корзины товаров
class Cart extends List {
    constructor (url = '/basket.json', container = '.cart-block') {
        super (url, container)
    }
    _init () {
        this.getData(this.url)
        .then (parsedData => { this.items = parsedData.contents })
        .then (() => { this.render() })
        .finally (() => {
            document.querySelector(this.container).addEventListener ('click', evt => {
                if (evt.target.name === 'del-btn') {
                    this.removeProduct (evt.target.dataset.id_product)
                }
            })

            document.querySelector('.btn-cart').addEventListener ('click', () => {
                document.querySelector(this.container).classList.toggle('invisible')
            })
        })
    }

    addProduct (item) {
        let find = this.items.find (element => element.id_product == item.dataset.id_product);
        if (!find) {
            this.items.push (
                new CartItem ({
                    product_name: item.dataset.product_name,
                    id_product: item.dataset.id_product,
                    price: +item.dataset.price,
                    quantity: 1
                })
            )
        }  else {
            find.quantity++
        }
        this.render ()
    }
    removeProduct (id) {
        let find = this.items.find (element => element.id_product == id);
        if (find.quantity > 1) {
            find.quantity--
        }  else {
            this.items.splice (this.items.indexOf(find), 1)
        }
        this.render ()
    }
}

//класс товара в каталоге
class CatalogItem extends Item {}
//класс товара в корзине
class CartItem extends Item {
    constructor (obj, img = cartImage) {
        super(obj, img)
        this.quantity = obj.quantity
    }
    getTemplate () {
        return `<div class="cart-item" data-id_product="${this.id_product}">
            <div class="product-bio">
                <img src="${this.img}" alt="Some image">
                <div class="product-desc">
                    <p class="product-title">${this.product_name}</p>
                    <p class="product-quantity">Quantity: ${this.quantity}</p>
                    <p class="product-single-price">$${this.price} each</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">${this.quantity * this.price}</p>
                <button class="del-btn" name="del-btn" data-id_product="${this.id_product}">&times;</button>
            </div>
        </div>`
    }
}

//объект, который содержит соответствие классов списков и классов элементов
let classesDependency = {
    Catalog: CatalogItem,
    Cart: CartItem
}

let cart = new Cart ()
let catalog = new Catalog (cart)

