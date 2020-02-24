//заглушки (имитация базы данных)

const cartImage = 'https://placehold.it/100x80';
const goodImg = 'https://via.placeholder.com/200x150';
var list;

/* const goods = [
    {id:1, title: 'Notebook', price: 1000},
    {id:2, title: 'Display', price: 200},
    {id:3, title: 'Keyboard', price: 20},
    {id:4, title: 'Mouse', price: 10},
    {id:5, title: 'Phones', price: 25},
    {id:6, title: 'Router', price: 30},
    {id:7, title: 'USB-camera', price: 18},
    {id:8, title: 'Gamepad', price: 24},
] */


// товар
class GoodsItem {
    constructor(id,title, price) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.img = goodImg;

    }
    render() {
        return `<div class="product-item" data-id="${this.id}">
        <img src="${this.img}" alt="Some img">
          <div class="desc">
                <h3>${this.title}</h3>
                <p>${this.price} $</p>
                <button class="buy-btn" 
                data-id="${this.id}"
                data-name="${this.title}"
                data-image="${this.img}"
                data-price="${this.price}">Купить</button>
            </div>
        </div>`
    }
  }

  // список товаров
  class GoodsList {
    constructor() {
      this.goods = [];
    }
/*     fetchGoods() {
        this.goods = goods;
    }   */

    fetchData() {
        let url = 'https://raw.githubusercontent.com/qimitau/js2_12_0502/master/students/MajaFaber/Project/webp/src/public/db/catalogData.json';
        this.promiseReq (url)
            .then (dataJSON => {
                return JSON.parse(dataJSON);
            })
            .then (dataParsedFromJSON => {
                this.goods = dataParsedFromJSON;
                this.render();
            })
    }

    makeGETRequest(url, resolve, reject) {
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

    promiseReq (url) {
        return new Promise ((res, rej) => {
            this.makeGETRequest(url, res, rej);
        });
    }


    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.id, good.title, good.price, good.img);
          listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
    //Добавьте для GoodsList метод, определяющий суммарную стоимость всех товаров.
    countSum() {
        let sum = 0;
        this.goods.forEach(good => {
            sum += good.price;
          });
          console.log (sum)
    }
    init () {
     console.log ('init start')
    // this.fetchGoods();
    // this.render();
    // this.countSum();
    this.fetchData();
    }
  }


class Cart {
    constructor() {   
        this.goods = [];
        this.sum = 0;
      }

      fetchData() {
        let url = 'https://raw.githubusercontent.com/qimitau/js2_12_0502/master/students/MajaFaber/Project/webp/src/public/db/getBasket.json';
        this.basketList = [];
        this.promiseReq (url)
            .then (dataJSON => {
                this.goods =  JSON.parse(dataJSON);
                this.sum = this.goods.amount; // to do: пока нигде не отображается
                this.render();    
            })
    }

    makeGETRequest(url, resolve, reject) {
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

    promiseReq (url) {
        return new Promise ((res, rej) => {
            this.makeGETRequest(url, res, rej);
        });
    }

    addProduct(product) {
        let productId = +product.dataset['id'];
        let find = this.goods.contents.find (element => element.id === productId);
        if (!find) {
            this.goods.contents.push ({
                id: productId,
                title: product.dataset ['name'],
                price: +product.dataset['price'],
                img: cartImage,
                quantity: 1
            })
            this.goods.countGoods +=1;
        }  
        else {
            find.quantity++
            this.goods.countGoods +=1;
        }
        this.render();
      }

    removeProduct(product) {  
        let productId = +product.dataset['id'];
        let find = this.goods.contents.find (element => element.id === productId);
        if (find.quantity > 1) {
            find.quantity--;
            this.goods.countGoods -=1;
        } else {
            this.goods.contents.splice(this.goods.contents.indexOf(find), 1);
            this.goods.countGoods +=1;
            document.querySelector(`.cart-item[data-id="${productId}"]`).remove();
        }
        this.render();
      }

    render() {
        let oneCartItem = ' ';
        this.goods.contents.forEach(el => {
            oneCartItem += new CartItem( el.id, el.title, el.price, el.quantity).render();
        });
        document.querySelector(`.cart-block`).innerHTML = oneCartItem;
        
       }

    makeButtons() {
          document.querySelector('.btn-cart').addEventListener('click', () => {
          document.querySelector('.cart-block').classList.toggle('invisible');
          });
            document.querySelector('.cart-block').addEventListener ('click', (evt) => {
                if (evt.target.classList.contains ('del-btn')) {
                    this.removeProduct (evt.target);
                }
            });
            document.querySelector('.products').addEventListener ('click', (evt) => {
                if (evt.target.classList.contains ('buy-btn')) {
                    this.addProduct(evt.target);
                }
            }); 
      }

    init() {    
        this.makeButtons();    
      //  this.render();
        this.fetchData();
    }
}

class CartItem  { 
    constructor(id, title, price, quantity) {  
        this.id = id;
        this.title = title;
        this.price = price;
        this.img = cartImage;
        this.quantity = quantity;
        }
    render() {  
        return `<div class="cart-item" data-id="${this.id}">
                                <div class="product-bio">
                                    <img src="${this.img}" alt="Some image">
                                    <div class="product-desc">
                                        <p class="product-title">${this.title}</p>
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

const customList = new GoodsList();
customList.init();
const customCart = new Cart();
customCart.init();