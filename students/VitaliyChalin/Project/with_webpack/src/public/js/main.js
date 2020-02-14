//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

var userCart = []; // типа localStorage
var list = fetchData ();

function fetchData () {
    let arr = [];
    for (let i = 0; i < items.length; i++) {
        arr.push ({
            id: ids[i],
            name: items[i],
            price: prices[i],
            img: image,
            quantity: 0
        });
    }
    return arr;
};

//кнопка скрытия и показа корзины
document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});
//кнопки удаления товара (добавляется один раз)
document.querySelector('.cart-block').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('del-btn')) {
        let cartItem = new CartItem (evt.target).removeItem ();
    }
})
//кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener ('click', (evt) => {
    if (evt.target.classList.contains ('buy-btn')) {
        let cartItem = new CartItem (evt.target).addItem ();
    }
})

class Products {
    constructor (container) {
        this.products = [];
        this.container = container;
        this._init ();
    }

    _init () {
        this.products = list;
        this._render ();
    }

    _render () {
        let product = '';
        this.products.forEach( el => {
            product += `<div class="product-item" data-id="${el.id}">
                            <img src="${el.img}" alt="Some img">
                            <div class="desc">
                                <h3>${el.name}</h3>
                                <p>${el.price} $</p>
                                <button class="buy-btn" 
                                data-id="${el.id}"
                                data-name="${el.name}"
                                data-image="${el.img}"
                                data-price="${el.price}">Купить</button>
                            </div>
                        </div>`
        });
        document.querySelector(this.container).innerHTML = product;
    }
}

//CART
class Cart {
    constructor (container) {
        this.items = [];
        this.container = container;
        this._init ();
    }

    _init () {
        this.items = userCart;
        this._render ();
    }

    _render () {
        let item = '';
        let total = 0;
        if (this.items.length > 0) {
            this.items.forEach( el => {
                let totalEl = +el.quant * +el.price;
                item += `<div class="cart-item" data-id="${el.id}">
                            <div class="product-bio">
                                <img src="${el.img}" alt="Some image">
                                <div class="product-desc">
                                    <p class="product-title">${el.name}</p>
                                    <p class="product-quantity">Quantity: ${el.quant}</p>
                                    <p class="product-single-price">$${el.price} each</p>
                                </div>
                            </div>
                            <div class="right-block">
                                <p class="product-price">${totalEl}</p>
                                <button class="del-btn" data-id="${el.id}">&times;</button>
                            </div>
                        </div>`
                total += totalEl;
            });
            item += `<div class="cart-total">Total: $${total}</div>`
        } else {
            item += `<div class="cart-item cart-empty">Ваша корзина пуста</div>`
        }
        document.querySelector(this.container).innerHTML = item;
    }
}

class CartItem {
    constructor(element) {
        this.el = element;
        this.sum = 0;
        this.cartItems = [];
        this._init ();
    }

    _init () {
        this.cartItems = userCart;
        userCart = this.cartItems;
    }

    addItem () {
        let prId = this.el.dataset.id;
        let price = this.el.dataset.price;
        let find = this.cartItems.find (element => element.id === prId);

        if (!find) {
            this.cartItems.push({
                id: prId,
                name: this.el.dataset.name,
                img: cartImage,
                price: price,
                quant: 1
            })
        } else {
            find.quant++;
            find.sum = find.quant * find.price;
        }
        let cart = new Cart ('.cart-block');
    }
    
    removeItem () {
        let prId = this.el.dataset.id;
        let find = this.cartItems.find (element => element.id === prId);
        if (find.quant > 1) {
            find.quant--;
        } else {
            userCart.splice(userCart.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${prId}"]`).remove();
        }
        let cart = new Cart ('.cart-block');
    }
}

function init () {
    list;
    let catalog = new Products ('.products');
    let cart = new Cart ('.cart-block');
}

init ();

/*
// Добавление продуктов в корзину
function addProduct (product) {
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
    if (!find) {
        userCart.push ({
            name: product.dataset ['name'],
            id: productId,
            img: cartImage,
            price: +product.dataset['price'],
            quantity: 1
        })
    }  else {
        find.quantity++
    }
    renderCart ()
}

//удаление товаров
function removeProduct (product) {
    let productId = +product.dataset['id'];
    let find = userCart.find (element => element.id === productId);
    if (find.quantity > 1) {
        find.quantity--;
    } else {
        userCart.splice(userCart.indexOf(find), 1);
        document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
    }
    renderCart ();
}

//перерендер корзины
function renderCart () {
    let allProducts = '';
    for (el of userCart) {
        allProducts += `<div class="cart-item" data-id="${el.id}">
                            <div class="product-bio">
                                <img src="${el.img}" alt="Some image">
                                <div class="product-desc">
                                    <p class="product-title">${el.name}</p>
                                    <p class="product-quantity">Quantity: ${el.quantity}</p>
                                    <p class="product-single-price">$${el.price} each</p>
                                </div>
                            </div>
                            <div class="right-block">
                                <p class="product-price">${el.quantity * el.price}</p>
                                <button class="del-btn" data-id="${el.id}">&times;</button>
                            </div>
                        </div>`
    }

    document.querySelector(`.cart-block`).innerHTML = allProducts;
}
*/