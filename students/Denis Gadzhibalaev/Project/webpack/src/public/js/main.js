'use strict';
class GoodItem {
    constructor(name, price, id, image) {
        this.name = name;
        this.price = price;
        this.id = id;
        this.image = image;
    }

    render() {
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
    </div>`;
    }
}

class Catalog {
    constructor(container) {
        this.container = container;
        this.goodsList = [];
    }

    init() {
        this.goodsList = [  {name: 'Notebook',price: 1000,id: 1,image: 'https://placehold.it/200x150',},
                            {name: 'Display',price: 200,id: 2,image: 'https://placehold.it/200x150',},
                            {name: 'Keyboard',price: 20,id: 3,image: 'https://placehold.it/200x150',},
                            {name: 'Mouse',price: 10,id: 4,image: 'https://placehold.it/200x150',},
                            {name: 'Phones',price: 25,id: 5,image: 'https://placehold.it/200x150',},
                            {name: 'Router',price: 30,id: 6,image: 'https://placehold.it/200x150',},
                            {name: 'USB-camera',price: 18,id: 7,image: 'https://placehold.it/200x150',},
                            {name: 'Gamepad',price: 24,id: 8,image: 'https://placehold.it/200x150',},
];
        this._render();
    }
    _fetchData() {
        
    }
    _render() {
        let goodItem = '';
        this.goodsList.forEach(el => {
            goodItem += new GoodItem(el.name, el.price, el.id, el.image).render();
        });
        document.querySelector(this.container).innerHTML = goodItem;
    }
}

class BasketItem {
    constructor(name, price, id, image, quantity) {
        this.name = name;
        this.price = price;
        this.id = id;
        this.image = image;
        this.quantity = quantity;
    }

    render() {
        return `<div class="cart-item" data-id="${this.id}">
        <div class="product-bio">
             <img class = "product-basket-image"src="${this.image}" alt="Some image">
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
     </div>`;
    }
}
class Basket {
    constructor(container) {
        this.basketList = [];
        this.container = container;
        this.totalSum = 0;
        this._controlModalWindow();
    }
    init() {
        this.basketList = [];
        this._addProductToBasket();
        this._removeProductFromBasket();
    }
    _render() {
        let basketItem = '';
        this.basketList.forEach(el => {
            basketItem += new BasketItem(el.name, el.price, el.id, el.image, el.quantity).render();
        });
        document.querySelector(this.container).innerHTML = basketItem;
    }

    _controlModalWindow() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block-wrapper').classList.toggle('invisible');
        });
        
    }

    _addProductToBasket() {
        document.querySelector('.products').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                this._addProduct(evt.target);
                this._render();
            }
        });
    }

    _removeProductFromBasket() {
        document.querySelector('.cart-block').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('del-btn')) {
                this._removeProduct(evt.target);
                this._render();
            }
        })
    }

    _addProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.basketList.find(element => element.id === productId);
        if (!find) {
            this.basketList.push({
                name: product.dataset['name'],
                id: productId,
                image: product.dataset['image'],
                price: +product.dataset['price'],
                quantity: 1
            });
        } else {
            find.quantity++

        }
        this._increaseTotalSum(+product.dataset['price']);
    }
    _removeProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.basketList.find(element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.basketList.splice(this.basketList.indexOf(find), 1);
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this._reduceTotalSum(+find.price);
    }

    _increaseTotalSum(sum) {
        this.totalSum += sum;
        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
    }

    _reduceTotalSum(sum) {
        this.totalSum -= sum ;
        if (this.totalSum == 0) {
            return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum}`;
        } else {
        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
        }
    
    }
}
let catalog = new Catalog('.products');
catalog.init();
let basket = new Basket('.cart-block');
basket.init();