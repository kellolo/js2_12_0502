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
                let newProd = {...prod, quantity: 1}
                this.$parent.postData(this.url, newProd)
                .then(d => {
                    if (d.result) {
                        this.items.push(newProd)
                        console.log(`${prod.product_name} успешно добавлен в корзину.`)
                    } else {
                        console.log('Не удалось добавить товар '+prod.product_name, err)
                    }
                })
                .catch(console.log.bind(console))
            } else {
                this.$parent.putData(`${this.url}/${prod.product_id}`, {set: find.quantity+1})
                .then(d => {
                    if (d.result) {
                        find.quantity++
                        console.log(`Увеличено количество ${prod.product_name} до ${find.quantity}`)
                    } else {
                        console.log('Не удалось увеличить количество товара '+prod.product_name, err)
                    }
                })
                .catch(console.log.bind(console))
            }
        },
        setCount(item, count = 0) {
            if (count) {
                this.$parent.putData(`${this.url}/${item.product_id}`, {set: +count})
                .then(d => {
                    if (d.result) {
                       item.quantity = +count
                        console.log(`Количество ${item.product_name} изменено и теперь равно ${item.quantity}.`)
                    } else {
                        console.log('Не удалось изменить количество товара '+item.product_name, err)
                    }
                })
                .catch(console.log.bind(console))
            } else {
                this.$parent.deleteData(`${this.url}/${item.product_id}`)
                .then(d => {
                    if (d.result) {
                        this.items.splice (this.items.indexOf(item), 1)
                        console.log(`${item.product_name} удалён из корзины.`)
                    } else {
                        console.log('Не удалось удалить товар '+item.product_name, err)
                    }
                })
                .catch(console.log.bind(console))
            }
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
            this.$parent.deleteData(`${this.url}/all`)
                .then(d => {
                    if (d.result) {
                        this.items = []
                        console.log('Корзина очищена.')
                    } else {
                        console.log('Не удалось очистить корзину.', err)
                    }
                })
                .catch(console.log.bind(console))

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
    }
}
</script>