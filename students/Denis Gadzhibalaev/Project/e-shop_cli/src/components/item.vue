<template>
<div class="item_wrapper">
    <div v-if="$parent.basketItems" class="cart-item">
        <div class="product-bio">
            <img class="product-basket-image" :src="basketImg" :alt="prod.product_name">
            <div class="product-desc">
                <p class="product-title">{{ prod.product_name }}</p>
                <p class="product-quantity">Quantity: {{ prod.quantity }}</p>
                <p class="product-single-price">{{ prod.price }} each</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{ prod.price * prod.quantity }}</p>
            <button @click="removeProduct(prod)" class="del-btn">&times;</button>
        </div>
    </div>
    <div v-if="!$parent.basketItems" class="product-item">
        <img :src="catalogImg" :alt="prod.product_name">
        <div class="desc">
            <h3>{{prod.product_name}}</h3>
            <p>{{prod.price}} $</p>
            <button class="buy-btn" 
            name="buy-btn"
            @click="addProduct(prod)"
            >Купить</button>
        </div>
</div>
    </div>
</template>

<script>
export default {
     props: {
        basketImg: {
            type: String,
            default: 'https://placehold.it/200x150'
        },
        catalogImg: {
            type: String,
            default: 'https://placehold.it/200x150'
        },
        prod: {
            type: Object
        }
    },
    methods: {
        removeProduct(el) {
            this.$emit('remove', el);
        },
        addProduct(el) {
            this.$parent.$parent.$refs.basket.addProduct(el);
        }
    },
}
</script>