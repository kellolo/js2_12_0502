// https://jsonplaceholder.typicode.com/comments
const API_URL = 'https://raw.githubusercontent.com/okkey45/js2_12_0502/master/students/VitaliyChalin/Project/with_webpack/src/server/dataBase'
let app = new Vue ({
	el: '#app',
	data: {
		items: [],
		cartItems: [],
		url: API_URL + '/catalogData.json',
		urlCart: API_URL + '/cartData.json',
		cartImg: 'https://placehold.it/100x80',
		showCart: false
	},
	methods: {
		getData (url) {
			return fetch(url)
					.then(d => d.json())
		},
		getCartData (urlCart) {
			return fetch(urlCart)
					.then(d => d.json())
		},
		addToCart (el) {
			let find = undefined
			this.cartItems.find (element => {
				if(element.id == el.id) {
					find = element
				}
				
			})
	        if (!find) {
	            this.cartItems.push (
	                {
	                    name: el.name,
	                    id: el.id,
	                    price: +el.price,
	                    quant: 1
	                }
	            )
	        }  else {
	            find.quant++
	        }
		},
		removeProduct (el) {
			 if (el.quant > 1) {
	            el.quant--
	        }  else {
	            this.cartItems.splice (this.cartItems.indexOf(find), 1)
	        }
		}
	},
	computed: {

	},
	mounted () {
		this.getData(this.url)
			.then(prods => {
				this.items = prods
			}),
		this.getCartData(this.urlCart)
			.then(cartProds => {
				this.cartItems = cartProds.contents
			})
	}
})