<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
        </header>
        <main>
            <catalog />
        </main>
    </div>    
</template>

<script>
import catalog from '../components/catalog.vue'
import search from '../components/search.vue'
import cart from '../components/cart.vue'

export default {
    data() {
        return {
            API: 'https://raw.githubusercontent.com/Siellph/JSshop_DB/master/db'
        }
    },
    components: {
        catalog,
        search,
        cart
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