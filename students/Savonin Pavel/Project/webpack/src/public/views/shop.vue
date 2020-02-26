<template>
    <div>
        <header>
            <div class="logo">E-shop</div>
            <search />
            <cart />
        </header>
        <main>
            <catalog />
        </main>
    </div>
</template>

<script>
import cart from '../components/cart.vue'
import catalog from '../components/catalog.vue'
import search from '../components/search.vue'
import error from '../components/error.vue'

export default {
    data() {
        return {
            API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    components: {
        cart,
        catalog,
        search,
        error,
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