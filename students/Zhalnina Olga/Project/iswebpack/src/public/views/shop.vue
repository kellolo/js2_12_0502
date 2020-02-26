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
                <button class="btn-cart" @click="showBasket = !showBasket" type="button">Корзина</button>
                <basket />                
            </div>
        </header>
        <main>        
            <catalog />               
        </main>
    </div>
</template>

<script>
import catalog from '../components/catalog.vue'
import basket from '../components/basket.vue'

export default {
    data() {
        return {
            API: 'https://raw.githubusercontent.com/OlgaZh-UX/js2_12_0502/master/students/Zhalnina%20Olga/Project/iswebpack/src/server/db/'
        }
    },
    components: {
        catalog, // 'catalog': catalog
        basket
    },
    methods:{
        getData (url) {
            return fetch(this.API + url).then(d => d.json())                    
        },
    }
}
</script>

<style>

</style>