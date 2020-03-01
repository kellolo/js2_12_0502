//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'
const API = 'https://raw.githubusercontent.com/Barinulka/js2_12_0502/master/students/Barinov%20Aleksey/Project/wp_init/src/database'

let app = new Vue({
    el: #app,
    data:{
        catalogItems: [],
        cartItems: [],
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        showCart: false,
        catalogImg: 'https://placehold.it/200x150',
        cartImg: 'https://placehold.it/100x80'
    }
    methods:{
        getData (url) {
            return fetch(API + url).then(d => d.json())
        }
        init(){
            this.getData(API + this.catalogUrl)
            .then (parsedData => { this.catalogItems = parsedData })
            this.getData(API + this.cartUrl)
            .then (parsedData => {this.cartItems = parsedData.contents})
        }
        addProduct (item) {
            let find = this.cartItems.find (element => element.id_product == item.dataset.id_product);
            if (!find) {
                this.cartItems.push (
                    new CartItem ({
                        product_name: item.dataset.product_name,
                        id_product: item.dataset.id_product,
                        price: +item.dataset.price,
                        quantity: 1
                    })
                )
            }  else {
                find.quantity++
            }
        }
        removeProduct (id) {
            let find = this.cartItems.find (element => element.id_product == id);
            if (find.quantity > 1) {
                find.quantity--
            }  else {
                this.cartItems.splice (this.cartItems.indexOf(find), 1)
            }
        }
        toggleCart() {
            this.showCart = !this.showCart
        }
    }
    computed:{}
    mounted (){}
})
