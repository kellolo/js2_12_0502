<template>
    <div id="cart" v-if="visible">
        <div class="cart-block">
            <p v-if="items.length === 0">Корзина пуста.</p>
            <item v-for="item of items" :key="item.product_id" :cart_item="item"/>
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
import item from './cart_item.vue'
export default {
    data() {
        return {
            url: '/cartDataResponse.json',
            items: []
        }
    },
    components: {
        item
    },
    props: {
        visible: {
            type: Boolean
        }
    },
    methods: {
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
        },
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