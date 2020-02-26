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
                <basket :cartItem="cartItem" />
            </div>
        </header>
        <main>
            <catalog />
        </main>
    </div>
</template>

<script>

import basket from '../components/basket.vue'
import catalog from '../components/catalog.vue'
export default {
    data() {
        return {
            API: 'https://raw.githubusercontent.com/amaremshaova/data_db/master',
            showCart: false,
            cartItem: {}
        }
    },
    components: {
        catalog,
        basket
    },
    methods: {
        getData(url) {
            return fetch(this.API + url).then(d => d.json())
        },
        getItem(item){
            this.cartItem = item;
        }
    }
}
</script>

<style>
</style>