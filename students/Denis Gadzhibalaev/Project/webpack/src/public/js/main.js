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
        this._fetchData();
       
    }
    _fetchData() {
        let url = 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/db/catalogData.json';
        this.goodsList = [];
        this._promiseReq (url)
            .then (dataJSON => {
                return JSON.parse(dataJSON);
            })
            .then (dataParsedFromJSON => {
                this.goodsList = dataParsedFromJSON;
                this._render();
            })
            .catch (errorData => {
                console.log (errorData + ' ERROR');
            })
            .finally (() => {
                console.log('Catalog:');
                console.log (this.goodsList);
            })
    }

    _makeGETRequest(url, resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve (xhr.responseText);
                } else {
                    reject ('error');
                }
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    }

    _promiseReq (url) {
        return new Promise ((res, rej) => {
            this._makeGETRequest(url, res, rej);
        });
    }

    _render() {
        let goodItem = '';
        this.goodsList.forEach(el => {
            goodItem += new GoodItem(el.product_name, el.price, el.id_product, el.image).render();
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
        this._controlModalWindow();
    }
    init() {
        this._fetchData();
        this._addProductToBasket();
        this._removeProductFromBasket();
    }

    _fetchData() {
        let url = 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/db/getBasket.json';
        this.basketList = [];
        this._promiseReq (url)
            .then (dataJSON => {
                this.basketList =  JSON.parse(dataJSON);
                this.totalSum = this.basketList.amount;
                document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
                this._render();    
            })
            .catch (errorData => {
                console.log (errorData + ' ERROR');
            })
            .finally (() => {
                console.log('Basket:');
                console.log (this.basketList.contents);
            })
    }

    _makeGETRequest(url, resolve, reject) {
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    resolve (xhr.responseText);
                } else {
                    reject ('error');
                }
            }
        }

        xhr.open('GET', url, true);
        xhr.send();
    }

    _promiseReq (url) {
        return new Promise ((res, rej) => {
            this._makeGETRequest(url, res, rej);
        });
    }

    _render() {
        let basketItem = '';
        this.basketList.contents.forEach(el => {
            basketItem += new BasketItem(el.product_name, el.price, el.id_product, el.image, el.quantity).render();
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
        let find = this.basketList.contents.find(element => element.id_product === productId);
        if (!find) {
            this.basketList.contents.push({
                product_name: product.dataset['name'],
                id_product: productId,
                image: product.dataset['image'],
                price: +product.dataset['price'],
                quantity: 1
            });
            this.basketList.countGoods += 1;
        } else {
            find.quantity++
            this.basketList.countGoods += 1;
        }
        this._increaseTotalSum(+product.dataset['price']);
    }
    _removeProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.basketList.contents.find(element => element.id_product === productId);
        if (find.quantity > 1) {
            find.quantity--;
            this.basketList.countGoods -= 1;
        } else {
            this.basketList.contents.splice(this.basketList.contents.indexOf(find), 1);
            this.basketList.countGoods -= 1;
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
        }
        this._reduceTotalSum(+find.price);
    }

    _increaseTotalSum(sum) {
        this.totalSum += sum;
        this.basketList.amount = this.totalSum;
        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
    }

    _reduceTotalSum(sum) {
        this.totalSum -= sum ;
        this.basketList.amount = this.totalSum;
        if (this.totalSum == 0) {
            return document.querySelector('.total-sum').innerText = ``;
        } else {
        return document.querySelector('.total-sum').innerText = `Total price: ${this.totalSum} $`;
        }
    
    }
}
let catalog = new Catalog('.products');
catalog.init();
let basket = new Basket('.cart-block');
basket.init();