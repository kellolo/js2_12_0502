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
                <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
                <cart v-show="showCart" ref="cartReference" />
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
            //API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
            showCart: false
        }
    },
    components: {
        catalog, cart
    },
    methods: {
        getQuantity(items){
            items.forEach (item => {
                item.quantity = 0
            })
        },
        getData(url) {
            return fetch(url).then(d => d.json())
        }
    }
}
</script>

<style>

</style>