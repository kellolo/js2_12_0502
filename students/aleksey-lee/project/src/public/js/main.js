// Запрос к серверу
function makeGETRequest(url, resolve, reject) {
    var xhr;
  
    if (window.XMLHttpRequest) {
      xhr = new XMLHttpRequest();
    } else if (window.ActiveXObject) { 
      xhr = new ActiveXObject("Microsoft.XMLHTTP");
    }
  
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
            if (xhr.status === 200) {
                resolve (xhr.responseText)
            } else {
                reject ('error')
            }
        }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
}

//Общий класс для единицы товара
class Item {
    constructor(id, name, price, img, cartImage) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.img = img;
        this.cartImage = cartImage;
    }
}

//Класс Вывода единицы товара в каталоге
class GoodsItem extends Item {

    //Вывод единицы товара в каталоге
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
                    data-cartimage="${this.cartImage}"
                    data-price="${this.price}">Купить</button>
                </div>
            </div>`;
    }
}

//Класс вывода единицы товара в корзине
class CartItem extends Item {
    constructor(id, name, price, img, cartImage, quantity) {
      super(id, name, price, img, cartImage);
      this.quantity = quantity;
    }

    //Вывод товара в корзине
    render() {
      return `<div class="cart-item" data-id="${this.id}">
                    <div class="product-bio">
                        <img src="${this.cartImage}" alt="Some image">
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

//Общий класс для списка товаров
class List{
    constructor(container) {
        this.goods = [];
        this.container = document.querySelector(container);
    }

    //Вывод каталога
    render() {
        this.container.innerHTML = this.goods.map(product => {
            const productItem = new GoodsItem(product.id_product, product.product_name, product.price, product.img, product.cartImage);
            return productItem.render();
        }).join('');
    }

    promiseReq (url) {
        return new Promise ((res, rej) => {
            makeGETRequest(url, res, rej)
        })
    }

}

//Класс каталога
class GoodsList extends List {
    fetchGoods() {
        let response = this.promiseReq('https://raw.githubusercontent.com/aleksey-lee/js2_12_0502/master/students/aleksey-lee/project/src/public/json/catalog.json')
        response
            .then(dataJSON => {
                return JSON.parse(dataJSON);
            })
            .then( goods => {
                this.goods = goods
                this.render() 
            })
    }
}

//Класс корзины
class Cart extends List {
    constructor(container){
        super(container);

        this.totalPrice = 0;
        this.countGoods = 0;

        this._bindHandlers();
    }

    //Вывод корзины
    render() {
        this.container.innerHTML = this.goods.map(product => {
            const productItem = new CartItem(product.id_product, product.product_name, product.price, product.img, product.cartImage, product.quantity);
            return productItem.render();
        }).join('');
    }

    fetchGoods() {
        let response = this.promiseReq('https://raw.githubusercontent.com/aleksey-lee/js2_12_0502/master/students/aleksey-lee/project/src/public/json/getBasket.json')
        response
            .then(dataJSON => {
                return JSON.parse(dataJSON);
            })
            .then( basket => {
                console.log(basket)
                this.goods = basket.contents
                this.totalPrice = basket.amount
                this.countGoods = basket.countGoods
                this.render()
                this._renderTotalWrap()
            })
    }

    // Добавление продуктов в корзину
    addProduct (product) {
        let productId = +product.dataset['id'];
        let find = this.goods.find(element => element.id_product === productId);

        
        if (!find) {
            this.goods.push ({
                product_name: product.dataset['name'],
                id_product: productId,
                img: product.dataset['image'],
                cartImage: product.dataset['cartimage'],
                price: +product.dataset['price'],
                quantity: 1
            })
        }  else {
            find.quantity++
        }

        this.render()
        this._renderFooterCart()
    }

    //удаление товаров
    removeProduct (product) {
        let productId = +product.dataset['id'];
        let find = this.goods.find (element => element.id_product === productId);
        if (find.quantity > 1) {
            find.quantity--;
        } else {
            this.goods.splice(this.goods.indexOf(find), 1);
        }
        this.render ();
        this._renderFooterCart()
    }

    _renderFooterCart(){
        this.getTotalPrice()
        this.getCountGoods()
        this._renderTotalWrap()
    }

    //Общая цена товаров в корзине
    getTotalPrice(){
        this.totalPrice =  this.goods.reduce((sum, product) => sum + (product.price * product.quantity), 0)
    }

    //Общая количество товаров в корзине
    getCountGoods(){
        this.countGoods = this.goods.reduce((sum, product) => sum + product.quantity, 0)
    }

    _renderTotalWrap() {
        this.container.innerHTML += `<p>Общая сумма товаров: ${this.totalPrice} $</p>
                                     <p>Всего товаров: ${this.countGoods}</p>`
    }

    _bindHandlers(){

        //кнопка скрытия и показа корзины
        document.querySelector('.btn-cart').addEventListener('click', () => {
            document.querySelector('.cart-block').classList.toggle('invisible');
        });

        //кнопки удаления товара (добавляется один раз)
        document.querySelector('.cart-block').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('del-btn')) {
                userCart.removeProduct (evt.target);
            }
        });

        //кнопки покупки товара (добавляется один раз)
        document.querySelector('.products').addEventListener ('click', (evt) => {
            if (evt.target.classList.contains ('buy-btn')) {
                userCart.addProduct (evt.target);
            }
        });
    }
}




const list = new GoodsList('#goods-list');
list.fetchGoods()

const userCart = new Cart('#cart-block');
userCart.fetchGoods()

