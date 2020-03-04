//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'
const API = 'https://raw.githubusercontent.com/qimitau/js2_12_0502/master/students/MajaFaber/Project/webp/src/public/db/'
//parents abstract

let app = new Vue({
    el: '#app',
    data: {
        catalogItems: [],
        cartItems: [],
        catalogUrl: '/catalogData.json',
        cartUrl: '/getBasket.json',
        showCart: false,
        catalogImg: 'https://placehold.it/200x150',
        cartImg: 'https://placehold.it/100x80',
        searchLine: ''
    },
    methods: {
        getData(url) {
            return fetch(API + url).then(d => d.json())
        },
        addProduct(item) {
            console.log('Куплен')
            console.log(item.title)
        },
        removeProduct(item) {
            console.log('Удален')
            console.log(item.title)
        }
    },
    mounted() {
        this.getData(this.catalogUrl)
        .then(data => {this.catalogItems = data})

        this.getData(this.cartUrl)
        .then(data => {this.cartItems = data.contents})
    }
})