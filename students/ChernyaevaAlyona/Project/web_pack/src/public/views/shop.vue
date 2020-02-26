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
                <div class="cart-block" v-show="showCart">
                    <div v-for="item of catalogItems" class="cart-item" :key="item.id_product" v-show="item.quantity > 0">
                        <div class="product-bio">
                            <img :src="cartImg" :alt="item.product_name">
                            <div class="product-desc">
                                <p class="product-title">{{item.product_name}}</p>
                                <p class="product-quantity">Quantity: {{item.quantity}}</p>
                                <p class="product-single-price">$ {{item.price}} each</p>
                            </div>
                        </div>
                        <div class="right-block">
                            <p class="product-price">{{ item.quantity * item.price }}</p>
                            <button class="del-btn" name="del-btn"
                            @click="removeProduct(item)">&times;</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <main>
            <catalog />
        </main>
    </div>
</template>

<script>
import catalog from '../components/catalog.vue'

export default {
    data() {
        return {
            showCart: false,
            API: 'https://raw.githubusercontent.com/AlyonaCh/js2_12_0502/master/students/ChernyaevaAlyona/Others/bd_project',
            catalogItems: [],
            url: '/index.json',
            cartImg: 'https://placehold.it/100x80'
        }
    },
    components: {
        catalog
    },
    methods: {
        getQuantity(arrItems){
            arrItems.forEach (item => {
                item.quantity = 0
            })
        },
        getData(url) {
            return fetch(this.API + url).then(d => d.json())
        },
        removeProduct(item) {
            this.$set(item, 'quantity', item.quantity-1)
            this.showCart = false;
        }
    },
    mounted() {
         //событие, когда vue-компонент встроился в ДОМ-модель
        this.getData(this.url)
        .then(data => {this.catalogItems = data})
        .then(() => { this.getQuantity(this.catalogItems) })
    }
}
</script>

<style>

</style>