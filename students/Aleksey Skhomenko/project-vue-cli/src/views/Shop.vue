<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart_area">
                <search/>
                <button class="btn-cart" type="button" @click="cart_visible = !cart_visible">Корзина</button>
                <cart v-show="cart_visible" ref="cart"/>
            </div>
        </header>
        <main>
            <catalog :filter="search_text"/>
        </main>
    </div>
</template>

<script>
console.log('%c  https://github.com/awesomesk1ll', 'font-size: 52px; background:url(https://avatars2.githubusercontent.com/u/9019369) no-repeat; background-size: 60px 60px')
import catalog from '../components/catalog.vue'
import cart from '../components/cart.vue'
import search from '../components/search.vue'

export default {
    data() {
        return {
            cart_visible: false,
            search_text: ""
        }
    },
    components: {
        search,
        cart,
        catalog   
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
        },
        update_search(val = '') {
            this.search_text = val.toLowerCase()
        }
    }
}
</script>

<style>

</style>