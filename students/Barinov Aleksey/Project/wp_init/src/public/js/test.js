// Массив с товарами
const goods = [
    { name: 'Notebook', price: 1000, ids: 1, image: 'https://placehold.it/200x150' },
    { name: 'Display', price: 200, ids: 2, image: 'https://placehold.it/200x150' },
    { name: 'Keyboard', price: 20, ids: 3, image: 'https://placehold.it/200x150' },
    { name: 'Mouse', price: 10, ids: 4, image: 'https://placehold.it/200x150' },
    { name: 'Phones', price: 25, ids: 5, image: 'https://placehold.it/200x150' },
    { name: 'Router', price: 30, ids: 6, image: 'https://placehold.it/200x150' },
    { name: 'USB-camera', price: 18, ids: 7, image: 'https://placehold.it/200x150' },
    { name: 'Gamepad', price: 24, ids: 8, image: 'https://placehold.it/200x150' },
]
const cartImage = 'https://placehold.it/100x80'
// Класс товара
class Product {
    constructor (good) {
        this.name = good.name
        this.price = good.price
        this.id = good.ids
        this.image = good.image
    }

    render () {
        return `<div class="product-item" data-id="${this.id}">
                    <img src="${this.image}" alt="Some img">
                        <div class="desc">
                            <h3>${this.name}</h3>
                            <p>${this.price} $</p>
                            <button class="buy-btn"
                            data-id="${this.id}"
                            data-name="${this.name}"
                            data-image="${this.image}"
                            data-price="${this.price}">Купить</button>
                        </div>
                </div>`
    }
}

// Класс каталога товаров
class Catalog {
    constructor (container) {
        this.goods = []
        this.container = container
    }

    init () {
        this.goods = goods
        this._render ()
    }
    _render () {
        let strCat = ''
        this.goods.forEach (good => {
            strCat += new Product(good).render ()
        })
        document.querySelector(this.container).innerHTML = strCat
    }

}
// Создаем каталог и выводим в div с классом "products"
const catalog = new Catalog('.products')
catalog.init()


// Элемент карзины

class CartProduct {
    constructor (good) {
        this.name = good.name
        this.price = good.price
        this.id = good.ids
        this.image = good.image
        this.quantity = good.quantity
    }
    render (){
        return `<div class="cart-item" data-id="${this.id}">
                    <div class="product-bio">
                        <img src="${this.image}" alt="Some image">
                            <div class="product-desc">
                                <p class="product-title">${this.name}</p>
                                <p class="product-quantity">Quantity: ${this.quantity}</p>
                                <p class="product-single-price">$${this.price} each</p>
                                </div>
                    </div>
                            <div class="right-block">
                                <p class="product-price">${this.quantity * this.price}</p>
                                <button class="del-btn" data-id="${this.id}">&times;</button>
                            </div>
                </div>`
    }
}

// Класс корзины

class Cart {
    constructor (container){
        this.cartGoods = []
        this.container = container
    }

    init () {
        this.cartGoods = []
        this.cartAdd ()
        this.cartRemove ()
        this.cartHidden ()
        this.render ()
    }

    render () {
        let strCart = ''
        this.cartGoods.forEach (good => {
            strCart += new CartProduct(good).render ()
        })
        document.querySelector(this.container).innerHTML = strCart
    }
    cartHidden () {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible');
        });
    }
    cartAdd () {
        document.querySelector('.products').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('buy-btn')) {
                this.addProduct (evt.target);
            }
        })
    }
    cartRemove () {
        document.querySelector('.cart-block').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('del-btn')) {
                this.removeProduct (evt.target);
            }
        })
    }
    addProduct (product) {
        let productId = +product.dataset['id'];
        let find = this.cartGoods.find (element => element.id === productId);
        if (!find) {
            this.cartGoods.push ({
                name: product.dataset ['name'],
                price: +product.dataset ['price'],
                id: productId,
                image: cartImage,
                quantity: 1
            })
        }  else {
            find.quantity++
        }
        this.render ()
    }
    removeProduct (product) {
        let productId = +product.dataset['id'];
        let find = this.cartGoods.find (element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.cartGoods.splice(this.cartGoods.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this.render ()
    }
}

const cart = new Cart ('.cart-block')
cart.init ()
