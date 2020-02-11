//заглушки (имитация базы данных)

const cartImage = 'https://placehold.it/100x80';
var list;

const goods = [
    {id:1, title: 'Notebook', price: 1000, img:'https://via.placeholder.com/200x150'},
    {id:2, title: 'Display', price: 200, img:'https://via.placeholder.com/200x150' },
    {id:3, title: 'Keyboard', price: 20, img:'https://via.placeholder.com/200x150' },
    {id:4, title: 'Mouse', price: 10, img:'https://via.placeholder.com/200x150' },
    {id:5, title: 'Phones', price: 25, img:'https://via.placeholder.com/200x150'},
    {id:6, title: 'Router', price: 30, img:'https://via.placeholder.com/200x150' },
    {id:7, title: 'USB-camera', price: 18, img:'https://via.placeholder.com/200x150' },
    {id:8, title: 'Gamepad', price: 24, img:'https://via.placeholder.com/200x150' },
]

// //кнопка скрытия и показа корзины
// document.querySelector('.btn-cart').addEventListener('click', () => {
//     document.querySelector('.cart-block').classList.toggle('invisible');
// });
// //кнопки удаления товара (добавляется один раз)
// document.querySelector('.cart-block').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('del-btn')) {
//         removeProduct (evt.target);
//     }
// })
// //кнопки покупки товара (добавляется один раз)
// document.querySelector('.products').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('buy-btn')) {
//         addProduct (evt.target);
//     }
// })


// товар
class GoodsItem {
    constructor(id,title, price, img) {
      this.id = id;
      this.title = title;
      this.price = price;
      this.img = img;

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
    fetchGoods() {
        this.goods = goods;
    }  

    render () {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.id, good.title, good.price, good.img);
          listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
  }


function init () {
    console.log ('init start')
  //  list = fetchData ();
  //  renderProducts ();
  const products = new GoodsList();
  products.fetchGoods();
  products.render();
}

init ()

//CART

/* // Добавление продуктов в корзину
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