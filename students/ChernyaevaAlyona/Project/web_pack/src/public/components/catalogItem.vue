<template>
    <div class="product-item">
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
</template>

<script>
export default {
    props: {
        catalogImg: {
            type: String,
            default: 'https://placehold.it/200x150'
        },
        prod: {
            type: Object
        }
    },
    methods: {
        addProduct (prod) {
            this.$root.$children[0].$refs.cartReference.addProduct(prod)
        }
    },
}
</script>