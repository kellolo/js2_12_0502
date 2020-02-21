const cartImage = 'https://placehold.it/100x80';
let URL_CATALOG = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/dataBase/catalogData.json'
let URL_CART = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/dataBase/cartData.json'

// Запрос данных
function makeGETRequest(url, resolve, reject) {
    let xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if(xhr.status === 200) {
                resolve (xhr.responseText)
            } else {
                reject ('error')
            }
        }
    }

    xhr.open('GET', url, true)
    xhr.send()
}

function promiseReq (url) {
    return new Promise ((res, rej) => {
        makeGETRequest(url, res, rej)
    })
}

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
                            data-price="${this.price}"
                            data-value="addToCart">Купить</button>
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
        promiseReq (URL_CATALOG)
            .then (dataJSON => {
                this.products = JSON.parse(dataJSON)
            })
            .then (() => {
                this._render()
            })
            .catch (dataError => {
                console.log(dataError)
            })
    }
    _render() {
        let listHtml = ''
        this.products.forEach(element => {
            listHtml += new Item (element).render()
        })
        this.container.innerHTML = listHtml
        this.initListeners()
        this.totalCoast()
    }
    initListeners(){//Универсальный листенер, будет работать как в каталоге так и вкорзине
        const buttons = [...this.container.querySelectorAll('button')];
        buttons.forEach((button)=>{
            button.addEventListener('click', (evt)=>{
                if(evt.target.dataset.value==='addToCart'){
                    this.addToCart(this.findElement(parseInt(evt.target.dataset.id, 10)))
                }else if(evt.target.dataset.value==='removeToCart'){
                    this.deleteProduct(this.findElement(parseInt(evt.target.dataset.id, 10)))
                }
            })
        })
    }
    findElement(prodId){
        console.log(prodId)
        console.log(this.products)
        console.log(this.products.contents)
        if(this.products.find(el => el.id)) {
            return this.products.find(el => el.id === prodId)
        } else {
            return this.products.contents.find(el => el.id === prodId)
        }
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

const catalog = new Catalog('.products')

class CartItem  {
    constructor(element) {
        this.id = element.id
        this.name = element.name
        this.price = element.price
        this.img = cartImage
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
                        <button class="del-btn"
                            data-id="${this.id}"
                            data-value="removeToCart">&times;</button>
                    </div>
                </div>`
    }
}

class Cart extends List {
    constructor(...attrs) {
        super(attrs)
    }
    _init() {
        promiseReq (URL_CART)
            .then (dataJSON => {
                this.products = JSON.parse(dataJSON)
            })
            .then (() => {
                this.render()
            })
            .catch (dataError => {
                console.log(dataError)
            })
    }
    checkQuant(elem) {
        console.log(elem.id)
        if(this.findElement(elem.id)) {
            this.products[this.findIndexProduct(elem)].quant++
            this.render()
        } else {
            elem.quant = 1
            this.products.push(elem)
            this.render()
        }
    }
    findIndexProduct(element){
        return this.products.findIndex(el => el === element)
    }
    deleteProduct(removeProdId) {
        this.products.splice(this.findIndexProduct(removeProdId), 1)
        this.render()
    }
    render() {
        let listHtml = ''
        this.products.contents.forEach(element => {
            listHtml += new CartItem(element).render()
        })
        this.container.innerHTML = listHtml
        this.initListeners()
    }
}

const cart = new Cart('.cart-block')

document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});