const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const goods = [
    { id: 1, title: 'Shirt', price: 150, img:'https://via.placeholder.com/200x150' },
    { id: 2, title: 'Socks', price: 50, img:'https://via.placeholder.com/200x150' },
    { id: 3, title: 'Jacket', price: 350, img:'https://via.placeholder.com/200x150' },
    { id: 4, title: 'Shoes', price: 250, img:'https://via.placeholder.com/200x150' },
];

//класс списка товаров
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchData () {
        this.goods = goods;
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good);
          listHtml += goodItem.render();
        });
        document.querySelector('.products').innerHTML = listHtml;
    }
    totalSumGoods () {
        let goodsSum = 0;
        this.goods.forEach(good => {
            goodsSum += good.price;
        });
        document.querySelector('.products-sum').textContent = `Стоимость всех товаров: ${goodsSum} $`;
    }
    initListeners() {
        const buttons = document.querySelectorAll('.buy-btn');
        buttons.forEach((button)=>{
            button.addEventListener('click', (evt)=>{
                this.addToCart (this.findElement(parseInt(evt.target.dataset.id, 10)))
            })
        })
    }
    findElement(goodId){
        return this.goods.find(el=>el.id===goodId)  
     }
    //Добавление продуктов в корзину
    addToCart (product) {
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
}

//товар каталога
class GoodsItem {
    constructor(good) {        
        this.id = good.id;
        this.title = good.title;
        this.price = good.price;
        this.img = good.img;
    }
    render() {
        return  `<div class="product-item" data-id="${this.id}">
                    <img src="${this.img}" alt="Some img">
                    <div class="desc">
                        <h3>${this.title}</h3>
                        <p>${this.price} $</p>
                        <button class="buy-btn" 
                        data-id="${this.id}"
                        data-title="${this.title}"
                        data-image="${this.img}"
                        data-price="${this.price}">Купить</button>
                    </div>
                </div>`
    }    
}


const list = new GoodsList();
list.fetchData();
list.render();
list.totalSumGoods();


// класс корзины товаров
class GoodCart extends GoodsList {
    constructor () {

    }
}

//товары корзины
class GoodItemCart extends GoodsItem{
    constructor () {

    }

}

//кнопка скрытия и показа корзины
// document.querySelector('.btn-cart').addEventListener('click', () => {
//     document.querySelector('.cart-block').classList.toggle('invisible');
// });
//кнопки удаления товара (добавляется один раз)
// document.querySelector('.cart-block').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('del-btn')) {
//         removeProduct (evt.target);
//     }
// })
//кнопки покупки товара (добавляется один раз)
// document.querySelector('.products').addEventListener ('click', (evt) => {
//     if (evt.target.classList.contains ('buy-btn')) {
//         addProduct (evt.target);
//     }
// })

//CART

// Добавление продуктов в корзину
// function addProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (!find) {
//         userCart.push ({
//             name: product.dataset ['name'],
//             id: productId,
//             img: cartImage,
//             price: +product.dataset['price'],
//             quantity: 1
//         })
//     }  else {
//         find.quantity++
//     }
//     renderCart ()
// }

// //удаление товаров
// function removeProduct (product) {
//     let productId = +product.dataset['id'];
//     let find = userCart.find (element => element.id === productId);
//     if (find.quantity > 1) {
//         find.quantity--;
//     } else {
//         userCart.splice(userCart.indexOf(find), 1);
//         document.querySelector(`.cart-item[data-id="${productId}"]`).remove()
//     }
//     renderCart ();
// }

// //перерендер корзины
// function renderCart () {
//     let allProducts = '';
//     for (el of userCart) {
//         allProducts += `<div class="cart-item" data-id="${el.id}">
//                             <div class="product-bio">
//                                 <img src="${el.img}" alt="Some image">
//                                 <div class="product-desc">
//                                     <p class="product-title">${el.name}</p>
//                                     <p class="product-quantity">Quantity: ${el.quantity}</p>
//                                     <p class="product-single-price">$${el.price} each</p>
//                                 </div>
//                             </div>
//                             <div class="right-block">
//                                 <p class="product-price">${el.quantity * el.price}</p>
//                                 <button class="del-btn" data-id="${el.id}">&times;</button>
//                             </div>
//                         </div>`
//     }

//     document.querySelector(`.cart-block`).innerHTML = allProducts;
// }
