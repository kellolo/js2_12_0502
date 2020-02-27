<template>
    <div>
        <header>
            <a href="#" class="logo">E-shop</a>
            <div class="cart">
                <form action="#" class="search-form">
                    <input v-model="inputValue" type="text" class="search-field">
                    <button @click="filterProducts" class="btn-search" type="submit">
                        <i class="fas fa-search"></i>
                    </button>
                </form>
                <button @click="controlModalWindow" class="btn-cart" type="button">Корзина</button>
                    <basket v-show="showBasket" />
            </div>
        </header>
        <main>
            <catalog />
        </main>
    </div>
</template>

<script>
import catalog from '../components/catalog.vue'
import basket from '../components/cart.vue'
export default {
    data() {
        return {
            showBasket: false,
            inputValue: ''
        }
    },
    components: {
        catalog,
        basket
    },
    methods: {
        getData(url) {
            return fetch(url).then(d => d.json())
        },
        filterProducts() {
                this.$children[1].filterCatalogItems = this.$children[1].catalogItems.filter(el => el.product_name.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1);
        },
        controlModalWindow() {
            this.showBasket == false ? this.showBasket = true : this.showBasket = false;
        }
    },
    computed: {
        
    },
}
</script>

<style>
</style>