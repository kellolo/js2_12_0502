<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <form action="#" class="search-form">
                    <input type="text" class="search-field">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button class="btn-cart" type="button" @click="btnCart">Корзина</button>
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

export default {
    data() {
        return {
            API: 'https://raw.githubusercontent.com/azazel87/js2_12_0502/master/students/Vladimir_Suschev/Project/wpk_vue/src/server'
        }
    },
    components: {
        catalog,
        cart,
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