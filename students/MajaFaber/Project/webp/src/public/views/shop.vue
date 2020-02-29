<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <search />
                <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
                <cart />
            </div>
        </header>
        <main>
            <catalog />
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
            API: 'https://raw.githubusercontent.com/qimitau/js2_12_0502/master/students/MajaFaber/Project/webp/src/public/db/'
        }
    },
    components: {
        'catalog': catalog,
        'cart': cart,
        'search': search
    },
    methods: {
        getData(url) {
            return fetch(this.API + url).then(d => d.json())
        }
    }
}
</script>

<style>

</style>