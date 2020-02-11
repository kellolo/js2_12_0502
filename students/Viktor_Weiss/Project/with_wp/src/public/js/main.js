//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150';
const cartImage = 'https://placehold.it/100x80';
const goods = [
	{ name: 'Notebook', price: 1000, ids : 1},
	{ name: 'Display', price: 200, ids : 2},
	{ name: 'Keyboard', price: 20, ids : 3},
	{ name: 'Mouse', price: 10, ids : 4},
	{ name: 'Phones', price: 25, ids : 5},
	{ name: 'Router', price: 30, ids : 6},
	{ name: 'USB-camera', price: 18, ids : 7},
	{ name: 'Gamepad', price: 24, ids : 8},
];

//глобальные сущности корзины и каталога (ИМИТАЦИЯ! НЕЛЬЗЯ ТАК ДЕЛАТЬ!)
var userCart = [];
// var list = fetchData ()

//кнопка скрытия и показа корзины
document.querySelector('.btn-cart').addEventListener('click', () => {
		document.querySelector('.cart-block').classList.toggle('invisible');
});
//кнопки удаления товара (добавляется один раз)
document.querySelector('.cart-block').addEventListener ('click', (evt) => {
		if (evt.target.classList.contains ('del-btn')) {
				removeProduct (evt.target);
		}
})
//кнопки покупки товара (добавляется один раз)
document.querySelector('.products').addEventListener ('click', (evt) => {
		if (evt.target.classList.contains ('buy-btn')) {
				addProduct (evt.target);
		}
})

class Products {
	constructor(container){
		this.items = []
		this.container = '.products'
		this._init()
	}
	_init(){
		this.items = goods
		this._render()
	}
	_render(){
		let str = ''
		this.items.forEach(el => {
			str += 
			`<div class="product-item" data-id="${el.id}">
				<img src="${image}" alt="Some img">
				<div class="desc">
						<h3>${el.name}</h3>
						<p>${el.price} $</p>
						<button class="buy-btn" 
						data-id="${el.id}"
						data-name="${el.name}"
						data-image="${el.img}"
						data-price="${el.price}">Купить</button>
				</div>
			</div>`
		})
		document.querySelector(this.container).innerHTML = str
	}
}

new Products

//CART

class Cart {

}

// Добавление продуктов в корзину
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