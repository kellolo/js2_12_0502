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
        update_search(val = '') {
            this.search_text = val.toLowerCase()
        }
    }
}
</script>

<style>

</style>