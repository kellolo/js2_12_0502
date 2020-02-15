//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const items = ['Notebook', 'Display', 'Keyboard', 'Mouse', 'Phones', 'Router', 'USB-camera', 'Gamepad'];
const prices = [1000, 200, 20, 10, 25, 30, 18, 24];
const ids = [1, 2, 3, 4, 5, 6, 7, 8];

let products = [];
let urlProducts = 'https://raw.githubusercontent.com/AlyonaCh/js2_12_0502/master/students/ChernyaevaAlyona/Others/bd_project/index.json';

class GoodsItem {
    constructor(title, price, id, img, quantity) {
      this.title = title
      this.price = price
      this.id = id
      this.img = img
      this.quantity = quantity
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
            </div>`;
    }
}

class CardItem extends GoodsItem{
  render() {
    return `<div class="cart-item" data-id="${this.id}">
                                    <div class="product-bio">
                                        <img src="${this.img}" alt="Some image">
                                        <div class="product-desc">
                                            <p class="product-title">${this.title}</p>
                                            <p class="product-quantity">Кол-во: ${this.quantity}</p>
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

class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      promiseReq(urlProducts)
          .then(dataJSON => {
          this.goods = JSON.parse(dataJSON);
          })
          .then(() => {
            this.render();
          })
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.product_name, good.price, good.id_product,  image, 0);
          listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
    sumItems() {
        let sum = 0;
        this.goods.forEach(good => {
          sum += parseInt(good.price);
        });
        console.log('sum: '+sum);
    }
    
  }

  class Cart{
    constructor() {
      this.cart = [];
    }
    addProduct(product){
        let productId = +product.dataset['id'];
        let find = this.cart.find (element => element.id === productId);
        if (!find) {
          this.cart.push(new CardItem(product.dataset ['name'], +product.dataset['price'], productId,  cartImage, 1))
        }  else {
            find.quantity++
        }
        this.renderCart ()
    }
    removeProduct (product) {
            let productId = +product.dataset['id'];
            let find = this.cart.find (element => element.id === productId);
            if (find.quantity > 1) {
                find.quantity--;
            } else {
              this.cart.splice(this.cart.indexOf(find), 1);
                document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
            }
            this.renderCart ();
    }
    renderCart () {
      let listHtml = '';
      this.cart.forEach(item => {
        listHtml += item.render();
      });
        document.querySelector(`.cart-block`).innerHTML = listHtml;
            
    }
  }

  const list = new GoodsList();
  list.fetchGoods();
  list.sumItems();

  var userCart = new Cart();

  // кнопка скрытия и показа корзины
document.querySelector('.btn-cart').addEventListener('click', () => {
  document.querySelector('.cart-block').classList.toggle('invisible');
});
// кнопки удаления товара (добавляется один раз)
document.querySelector('.cart-block').addEventListener ('click', (evt) => {
  if (evt.target.classList.contains ('del-btn')) {
    userCart.removeProduct (evt.target);
  }
})
// кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener ('click', (evt) => {
  if (evt.target.classList.contains ('buy-btn')) {
    userCart.addProduct (evt.target);
  }
})

  
  function makeGETRequest(url, resolve, reject) {
    let xhr = new XMLHttpRequest();
  
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        if(xhr.status === 200){
          resolve(xhr.responseText);
        }else{
          reject ('error');
        }
        
      }
    }
  
    xhr.open('GET', url, true);
    xhr.send();
  }

  function promiseReq(url) {
      return new Promise ((res, rej) =>{
          makeGETRequest(url, res, rej);
      })
  }
