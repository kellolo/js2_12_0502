//заглушки (имитация базы данных)
const image = 'https://placehold.it/200x150'
const cartImage = 'https://placehold.it/100x80'
const API = 'https://raw.githubusercontent.com/AlyonaCh/js2_12_0502/master/students/ChernyaevaAlyona/Others/bd_project'
//parents abstract

let app = new Vue({
    el: '#app',
    data: {
        //данные, создаваемые и изменяемые внутри vue-компонента
        catalogItems: [],
        cartItems: [],
        catalogUrl: '/index.json',
        cartUrl: '/getBasket.json',
        showCart: false,
        catalogImg: 'https://placehold.it/200x150',
        cartImg: 'https://placehold.it/100x80'
    },
    methods: {
         //функции, которые изменяют объект или данные data

        getQuantity(){
            this.catalogItems.forEach (item => {
                item.quantity = 0
            })
        },
        getData(url) {
            return fetch(API + url).then(d => d.json())
        },
        addProduct(item) {
            this.$set(item, 'quantity', item.quantity+1)
        },
        removeProduct(item) {
            this.$set(item, 'quantity', item.quantity-1)
            this.showCart = false;
        }
    },
    computed: {
        //функции, должные возвращать значения
    },
    mounted() {
         //событие, когда vue-компонент встроился в ДОМ-модель
        this.getData(this.catalogUrl)
        .then(data => {this.catalogItems = data})
        .then(() => { this.getQuantity() })
    }
})