<template>
     <div id="app">
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <form action="#" class="search-form">
                    <input type="text" class="search-field">
                    <button class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <!-- <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button> -->
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
            API: 'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base'
        }
    },
    components:{
         catalog,
         cart
    },
    methods: {
        getData(url) {
            return fetch(this.API + url).then(d => d.json())
        },
    },
}

</script>

<style>
    
</style>