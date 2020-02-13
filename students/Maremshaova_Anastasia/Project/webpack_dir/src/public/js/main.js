

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
        this.userCart = [];
        this._init();
        this.renderCart();
        this.activateDelBtn(); 
    }

    _init() {
        document.querySelector('.btn-cart').addEventListener('click', () => {
                document.querySelector('.cart-block').classList.toggle('invisible');
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
        for ( el of this.userCart) {
        let itemBasket = new ItemBasket(el.name, el.id, el.img, el.price, el.quantity); 
            allProductsHtml += itemBasket.render(); 
        }


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
    constructor(name, price, img, cartImage, id) {
        this.name = name;
        this.price = price;
        this.img = img;
        this.cartImage = cartImage; 
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
          data-cartImage ="${this.cartImage}"
          data-image="${this.img}"
          data-price="${this.price}">Купить</button>
      </div>
  </div>`;
    }
}

class Catalog {
    constructor() {
        this.prices = [];
        this.image = '';
        this.cartImage = '';
        this.names = [];
        this.ids = [];
        this.fetchGoods();
        this.render(); 
        this.activateBuyBtn();
        this.basket = new Basket(); 
    }

    fetchGoods() {
        this.image = 'https://placehold.it/200x150';
        this.cartImage = 'https://placehold.it/100x80';
        this.names = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
        this.prices = [1000, 200, 20, 10, 25, 30, 18, 24];
        this.ids = [1, 2, 3, 4, 5, 6, 7, 8];
  }

    render() {
        let listHtml = [];

        for (let i = 0; i < this.names.length; i++) {
            const item = new Item(this.names[i], this.prices[i], this.image, this.cartImage, this.ids[i]);
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

