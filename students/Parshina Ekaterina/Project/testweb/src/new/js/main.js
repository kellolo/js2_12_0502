let app = new Vue ({
    el: '#app',
    data: {
        API: 'https://raw.githubusercontent.com/EkaterinaWeb/js2_12_0502/master/students/Parshina%20Ekaterina/Project/testweb/src/database',
        catalog_items: [],
        catalog_url: '/catalogData.json',
        catalog_container: '.products',
        cart_items: [],
        cart_url: '/getBasket.json',
        cart_container: '.cart-block',
        cart_btn: '.btn-cart',
        cart_visible: false,
    },
    methods: {
        getData(url) {
            return fetch(API + url).then(d => d.json())
        },
        addProduct(item) {
            let find = this.items.find(element => element.id == item.dataset.id);
            if (!find) {
                this.items.push({
                    title: item.dataset.title,
                    id: item.dataset.id,
                    price: +item.dataset.price,
                    quantity: 1
                })
            } else {
                find.quantity++
            }
         },
        _calc() {
            let p = 0, q = 0
            this.cart_items.forEach(elem => {
                p += elem.price * elem.quantity
                q += elem.quantity
            })
            return {price: p, quantity: q}
        }
    },
    computed: {
        cart_price: function () {
                return this._calc().price
        },
        cart_quantity: function () {
                return this._calc().quantity
        }
    },
    mounted () {
        // Загрузка корзины
        this.getData(this.API + this.cart_url)
        // Загрузка каталога          
        this.getData(this.API + this.catalog_url)
    }
})
