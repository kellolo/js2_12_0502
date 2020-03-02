<template>
    <div>
        <header>
            <a href="#" class="logo">E-shop</a>
            <div class="cart">
                <div class="search-form">
                    <input @keyup.enter="filterProducts" v-model="inputValue" type="text" class="search-field">
                    <button @click="filterProducts" class="btn-search" >
                        <i class="fas fa-search"></i>
                    </button>
                </div>
                <button @click="showBasket = !showBasket" :disabled="basketBtnDisable" class="btn-cart" type="button">Корзина</button>
                    <basket v-show="showBasket" ref="basket"/>
            </div>
        </header>
        <main>
            <div style="font-size: 30px" v-if="showError" >{{ errorMessage }}</div>
            <catalog ref="catalog" />
        </main>
    </div>
</template>

<script>
import catalog from '../components/catalog.vue'
import basket from '../components/basket.vue'

export default {
    data() {
        return {
            basketBtnDisable: false,
            showBasket: false,
            showError: false,
            errorMessage: '',
            inputValue: ''
        }
    },
    components: {
        catalog,
        basket
    },
    methods: {
        getData(url) {
            return fetch(url).then(d => d.json());
        },
        postData(url, data) {
            return fetch(url, {
                method: 'POST',
                 headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(d => d.json());
        },
        putData(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            }).then(d => d.json());
        },
        deleteData(url) {
            return fetch(url, {
                method: 'DELETE',
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(d => d.json());
        },
        filterProducts() {
                this.$refs.catalog.filterCatalogItems = this.$refs.catalog.catalogItems.filter(el => el.product_name.toLowerCase().indexOf(this.inputValue.toLowerCase()) !== -1);
        },
    },
    computed: {},
}
</script>

<style>

</style>