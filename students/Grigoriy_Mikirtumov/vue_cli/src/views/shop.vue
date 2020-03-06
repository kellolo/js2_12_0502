<template>
     <div id="app">
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <search ref="searchReference"/>
                <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
                <cart v-show="showCart" ref="cartReference"/>
            </div>
        </header>
        <main>
            <catalog ref="catalogReference"/>
            <callback/>
        </main>
    </div>
</template>

<script>
import catalog from '../components/catalog.vue'
import cart from '../components/cart.vue'
import search from '../components/search.vue'
import callback from '../components/callback.vue'
export default {
    data() {
        return {
            showCart: false
        }
    },
    components: {
        catalog, cart, search, callback
    },
    methods: {
        getData(url) {
            return fetch(url).then(d => d.json())
        },
        postData(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data) //новый объект с товаром, который нужно добавить
            }).then(d => d.json())
        },
        putData(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data) //дельта-изменение товара +1/-1
            }).then(d => d.json())
        },
        deleteData(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(d => d.json())
        }
    }
}

</script>

<style lang="less">
    
</style>