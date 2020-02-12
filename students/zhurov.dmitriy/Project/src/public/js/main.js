const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

document.querySelector('.btn-cart').addEventListener('click', () => {
    document.querySelector('.cart-block').classList.toggle('invisible');
});

document.querySelector('.cart-block').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('del-btn')) userCart.remove(evt.target);
});

document.querySelector('.products').addEventListener('click', (evt) => {
    if (evt.target.classList.contains('buy-btn')) userCart.add(evt.target);
});

function fetchData() {
    let arr = [];
    items.forEach(el => {
        arr.push(new CatalogItem(items.indexOf(el)));
    });
    return arr;
}

class CatalogItem {
    constructor(i) {
        this.id = ids[i];
        this.name = items[i];
        this.price = prices[i];
        this.img = image;
        this.quantity = 0;
    }

    toDOM() {
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
                </div>`;
    }
}

class Catalog {
    constructor(container) {
        this.items = [];
        this.container = container;
        this._init();
    }

    _init() {
        this.items = fetchData();
        this._render();
    }

    _render() {
        let str = '';
        this.items.forEach(el => {
            str += this.items[this.items.indexOf(el)].toDOM();
        });
        document.querySelector(this.container).innerHTML = str;
    }
}

let catalog = new Catalog('#products');

class CartItem {
    constructor(product) {
        this.id = +product.dataset['id'];
        this.name = product.dataset ['name'];
        this.price = +product.dataset['price'];
        this.img = cartImage;
        this.quantity = 1;
    }

    toDOM() {
        return `<div class="cart-item" data-id="${this.id}">
                    <div class="product-bio">
                        <img src="${this.img}" alt="Some image">
                        <div class="product-desc">
                            <p class="product-title">${this.name}</p>
                            <p class="product-quantity">Quantity: ${this.quantity}</p>
                            <p class="product-single-price">$${this.price} each</p>
                        </div>
                    </div>
                    <div class="right-block">
                        <button class="del-btn" data-id="${this.id}" data-price="${this.price}">&times;</button>
                        <p class="product-price">Total: $${this.quantity * this.price}</p>
                    </div>
                </div>`;
    }
}

class Cart {
    constructor(container) {
        this.items = [];
        this.container = container;
        this.totalCost = 0;
        this.totalQty = 0;
        this.itemsCounter = document.querySelector('.items-count');
    }

    _find(product) {
        return userCart.items.find(element => element.id === +product.dataset['id']);
    }

    add(product) {
        !this._find(product) ?
            userCart.items.push(new CartItem(product)) :
            this._find(product).quantity++;
        this.totalCost += +product.dataset['price'];
        this.totalQty++;
        this._render();
    }

    remove(product) {
        if (this._find(product).quantity > 1) {
            this._find(product).quantity--;
        } else {
            userCart.items.splice(userCart.items.indexOf(this._find(product)), 1);
            document.querySelector(`.cart-item[data-id="${+product.dataset['id']}"]`).remove()
        }
        this.totalCost -= +product.dataset['price'];
        this.totalQty--;
        this._render();
    }

    _render() {
        let allProducts = '';
        for (this.el of userCart.items) {
            allProducts += userCart.items[userCart.items.indexOf(this.el)].toDOM();
        }
        if (this.totalQty <= 0) {
            allProducts += `<p class="total-cost">Cart is empty!</p>`;
            this.itemsCounter.textContent = '';
            this.itemsCounter.style.display = 'none';
        } else {
            allProducts += `<p class="total-cost">Total qty: ${this.totalQty} Total cost: $${this.totalCost}</p>`;
            this.itemsCounter.textContent = this.totalQty;
            this.itemsCounter.style.display = 'block';
        }
        document.querySelector(this.container).innerHTML = allProducts;
    }
}

let userCart = new Cart('.cart-block');