'use strict';
const img = 'https://placehold.it/200x150';
const API = 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/server/db';

class Item {
    constructor(obj, image = img) {
        this.name = obj.product_name;
        this.price = obj.price;
        this.id = obj.id_product;
        this.image = image;
    }

    getTemplate() {
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

class List {
    constructor(listName, url, container) {
        this.listName = listName;
        this.url = url;
        this.list = [];
        this.container = container;
    }

    _fetchData(url) {
        return fetch(API + url).then(DataJson => DataJson.json());
    }

    _render(list) {
        let htmlItem = '';
        list.forEach(el => {
            htmlItem += new classesDependency[this.constructor.name](el).getTemplate();
        });
        document.querySelector(this.container).innerHTML = htmlItem;
    }

}

class CatalogItem extends Item {}

class Catalog extends List {
    constructor(listName, url = '/catalogData.json', container = '.products') {
        super(listName, url, container);
    }

    init() {
        this._fetchData(this.url)
            .then((parsedJson) => {
                this.list = parsedJson;
                this._render(this.list);
            })
            .finally(() => {
                console.log(this.listName);
                console.log(this.list);
            })

    }
}
class BasketItem extends Item {
    constructor(obj) {
        super(obj);
        this.quantity = obj.quantity;
    }

    getTemplate() {
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
class Basket extends List {
    constructor(listName, url = '/getBasket.json', container = '.cart-block') {
        super(listName, url, container);
        this._controlModalWindow();
    }
    init() {
        this._fetchData(this.url)
            .then((parsedJson) => {
                this.list = parsedJson;
                this.totalSum = this.list.amount;
                document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
                this._render(this.list.contents);
            })
            .finally(() => {
                console.log(this.listName);
                console.log(this.list.contents);
            });
        this._addProductToBasket();
        this._removeProductFromBasket();
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
                this._render(this.list.contents);
            }
        });
    }

    _removeProductFromBasket() {
        document.querySelector('.cart-block').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('del-btn')) {
                this._removeProduct(evt.target);
                this._render(this.list.contents);
            }
        })
    }

    _addProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.list.contents.find(element => element.id_product === productId);
        if (!find) {
            this.list.contents.push({
                product_name: product.dataset['name'],
                id_product: productId,
                price: +product.dataset['price'],
                quantity: 1
            });
            this.list.countGoods += 1;
        } else {
            find.quantity++
            this.list.countGoods += 1;
        }
        this._increaseTotalSum(+product.dataset['price']);
    }
    _removeProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.list.contents.find(element => element.id_product === productId);
        if (find.quantity > 1) {
            find.quantity--;
            this.list.countGoods -= 1;
        } else {
            this.list.contents.splice(this.list.contents.indexOf(find), 1);
            this.list.countGoods -= 1;
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this._reduceTotalSum(+find.price);
    }

    _increaseTotalSum(sum) {
        this.totalSum += sum;
        this.list.amount = this.totalSum;
        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
    }

    _reduceTotalSum(sum) {
        this.totalSum -= sum;
        this.list.amount = this.totalSum;
        if (this.totalSum == 0) {
            return document.querySelector('.total-sum').innerText = ``;
        } else {
            return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
        }

    }
}

let classesDependency = {
    Catalog: CatalogItem,
    Basket: BasketItem
}

let catalog = new Catalog('Catalog');
catalog.init();
let basket = new Basket('Basket');
basket.init();