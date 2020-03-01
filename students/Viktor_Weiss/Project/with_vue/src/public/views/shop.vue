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
                    <div v-for="item of cartItems" class="cart-item" :key="item.id_product">
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
            API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses'
        }
    },
    components: {
        catalog,
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