let app = new Vue ({
    el: '#app',
    data: {
        API: 'https://raw.githubusercontent.com/awesomesk1ll/js2_12_0502/master/students/Aleksey%20Skhomenko/project/src/public/json',
        catalog_items: [],
        catalog_url: '/catalogDataResponse.json',
        catalog_container: '.products',
        cart_items: [],
        cart_url: '/cartDataResponse.json',
        cart_container: '.cart-block',
        cart_btn: '.btn-cart',
        cart_visible: false
    },
    methods: {
        getData(url) {
            return fetch(url)
                .then(d => {return d.json()})
        },
        addProduct(prod) {
            let find = this.cart_items.find(x => x.product_id === prod.product_id)
            if (!find) {
                this.cart_items.push({...prod, quantity: 1})
            } else {
                find.quantity++
            }
            console.log(`${prod.product_name} добавлен в корзину.`)
         },
        // меняет quantity товара в корзине на переданное во втором параметре (по умолчанию удаляет товар из корзины)
        setCount(item, count = 0) {
            item.quantity = +count
            if (item.quantity === 0) {
                console.log(`${item.product_name} удалён из корзины.`)
                this.cart_items.splice(this.cart_items.indexOf(item), 1)
            } else console.log(`Количество ${item.product_name} изменено и теперь равно ${item.quantity}.`)
        },
        // очищает корзину
        wipe() {
            this.cart_items = []
            console.log('Корзина очищена.')
        },
        // считает кол-во и стоимость корзины
        _calc(flag) {
            let p = 0, q = 0
            this.cart_items.forEach(elem => {
                p += elem.price * elem.quantity
                q += elem.quantity
            })
            return flag ? p : q // если флаг возвращаем цену иначе количество
        }
    },
    computed: {
        cart_price: function() {return this._calc(true)},
        cart_quantity: function() {return this._calc()}
    },
    mounted() {
        // Загрузка корзины
        this.getData(this.API + this.cart_url)
            .then(Data => {this.cart_items = Data.items})
            .catch(console.log.bind(console))
        // Загрузка каталога          
        this.getData(this.API + this.catalog_url)
            .then(Data => {this.catalog_items = Data})
            .catch(console.log.bind(console))
            .finally(console.timeEnd('Loading'))
    }
})