<template>
    <div id="cart">
        <div class="cart-block">
            <p v-if="items.length === 0">Корзина пуста.</p>
            <item v-for="item of items" :key="item.product_id" :item="item"/>
            <div v-if="this.items.length > 0">
                <hr>
                Товаров в корзине: {{ quantity }} (стаков: {{ items.length }})<br>
                Общая стоимость: {{ price }}$
                <button name="wipe" class="btn" @click="wipe()">Очистить корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
import item from './item.vue'
export default {
    data() {
        return {
            url: 'api/cart',
            items: []
        }
    },
    components: {
        item
    },
    methods: {
        addProduct(prod) {
            let find = this.items.find(x => x.product_id === prod.product_id)
            if (!find) {
                this.items.push({...prod, quantity: 1})
            } else {
                find.quantity++
            }
            console.log(`${prod.product_name} добавлен в корзину.`)
        },
        setCount(item, count = 0) {
            item.quantity = +count
            if (item.quantity === 0) {
                console.log(`${item.product_name} удалён из корзины.`)
                this.items.splice(this.items.indexOf(item), 1)
            } else console.log(`Количество ${item.product_name} изменено и теперь равно ${item.quantity}.`)
        },
        _calc(flag) {
            let p = 0, q = 0
            this.items.forEach(elem => {
                p += elem.price * elem.quantity
                q += elem.quantity
            })
            return flag ? p : q // если флаг возвращаем цену иначе количество
        },
        wipe() {
            this.items = []
            console.log('Корзина очищена.')
        }
    },
    computed: {
        price: function() {return this._calc(true)},
        quantity: function() {return this._calc()}
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data.items})
        .catch(console.log.bind(console))
        .finally(console.timeEnd('Loading'))
    }
}
</script>