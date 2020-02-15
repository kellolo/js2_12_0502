




class ItemBasket{
    constructor(name, id, img, price, count){       
        this.name = name;
        this.price = price;
        this.img = img;
        this.id = id;
        this.quantity = count;
    }

    render(){
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
            <p class="product-price">${this.quantity * this.price}</p>
            <button class="del-btn" data-id="${this.id}">&times;</button>
        </div>
                    </div>`;
    }
 
}

class Basket {
    constructor() {
        this.userCarts = [];
        this.URL ="https://raw.githubusercontent.com/amaremshaova/data_db/master/getBasket.json";
        this._init();
        this.getData();
        //this.renderCart();
        this.activateDelBtn(); 
    }

    _init() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
                document.querySelector('.cart-block').classList.toggle('invisible');
            });
    }
    makeGETRequest(url, resolve, reject) {
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                   // console.log(xhr.responseText); 
                    resolve (xhr.responseText)
                } else {
                    reject ('error')
                }
            }
        }

        xhr.open('GET', url, true);
        xhr.send(null);
    }


    promiseReq (url) {
        return new Promise ((res, rej) => {
            this.makeGETRequest(url, res, rej)
        })
    }

    getData(){
        this.promiseReq (this.URL)
            .then (dataJSON => {
                console.log (dataJSON); // String
                return JSON.parse(dataJSON);
            })
            .then (dataParsedFromJSON => {
               // console.log (dataParsedFromJSON); //Object/Array
                this.userCarts = dataParsedFromJSON;
                this.renderCart();
            })
            .catch (errorData => {
                console.log (errorData + ' ERROR');
            })
            .finally (() => {
                console.log (this.userCarts); // catch+ -> [] / -catch -> [{}, {}]
            });
    }


     //Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
     totalCostGoods(){
        let totalCost = 0; 
        let el; 
        for ( el of this.userCart) {
            totalCost += el.price * el.quantity; 
        }
        return totalCost; 
    }

    renderCart() {
        let allProductsHtml = '';
        let el; 
        //for (let product in this.userCarts['contents']) {
        this.userCarts['contents'].forEach(function(product, index, array) {
                console.log(product, index);
        let itemBasket = new ItemBasket(product['product_name'], product['product_id'], product['image'], product['price'], product['quantity']); 
            allProductsHtml += itemBasket.render(); 
        }); 


        document.querySelector(`.cart-block`).innerHTML = allProductsHtml;
        var totalCost = document.createElement('p');
        totalCost.innerHTML = 'Общая сумма:' + this.totalCostGoods(); 

        document.querySelector(`.cart-block`).appendChild(totalCost);
    }


    addProduct (product) {
        let productId = +product.dataset['id'];
        let find = this.userCart.find (element => element.id === productId);
        if (!find) {
            this.userCart.push (new ItemBasket(product.dataset ['name'], productId, product.dataset ['cartimage'], +product.dataset['price'], 1)); 
        }  else {
            find.quantity++
        }
        this.renderCart();
    }
    
    removeProduct (product) {
            let productId = +product.dataset['id'];
            let find = this.userCart.find (element => element.id === productId);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
                this.userCart.splice(this.userCart.indexOf(find), 1);
                document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
            }
            this.renderCart ();
        }

        activateDelBtn(){
            document.querySelector('.cart-block').addEventListener('click', (evt) => {
                if (evt.target.classList.contains('del-btn')) {
                    this.removeProduct(evt.target);
                }
            });
        }
}



class Item {
    constructor(name, price, img, id) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.id = id;

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
          data-cartImage ="${this.img}"
          data-image="${this.img}"
          data-price="${this.price}">Купить</button>
      </div>
  </div>`;
    }
}

class Catalog {
    constructor() {
        this.items =[];
        this.URL = 'https://raw.githubusercontent.com/amaremshaova/data_db/master/catalogData.json';
        this.getData(); 
        this.activateBuyBtn();
        this.basket = new Basket(); 


    }

    makeGETRequest(url, resolve, reject) {
        let xhr = new XMLHttpRequest()

        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                   // console.log(xhr.responseText); 
                    resolve (xhr.responseText)
                } else {
                    reject ('error')
                }
            }
        }

        xhr.open('GET', url, true);
        xhr.send(null);
    }


    promiseReq (url) {
        return new Promise ((res, rej) => {
            this.makeGETRequest(url, res, rej)
        })
    }

    getData(){
        this.promiseReq (this.URL)
            .then (dataJSON => {
                console.log (dataJSON); // String
                return JSON.parse(dataJSON);
            })
            .then (dataParsedFromJSON => {
               // console.log (dataParsedFromJSON); //Object/Array
                this.items = dataParsedFromJSON;
                this.render();
            })
            .catch (errorData => {
                console.log (errorData + ' ERROR');
            })
            .finally (() => {
                console.log (this.items); // catch+ -> [] / -catch -> [{}, {}]
            });
    }


    render() {
        let listHtml = [];
        let product;

        for (let i = 0; i < this.items.length; i++) {
            const item = new Item(this.items[i]['product_name'], this.items[i]['price'], this.items[i]['image'], this.items[i]['id_product']);
            listHtml.push(item.render());
        }
        document.querySelector('.products').innerHTML = listHtml.join();
       
        
    }

    activateBuyBtn(){
        document.querySelector('.products').addEventListener('click', (evt) => {
            if (evt.target.classList.contains('buy-btn')) {
                this.basket.addProduct(evt.target);
            }
        });
    }



   
}
const list = new Catalog();

