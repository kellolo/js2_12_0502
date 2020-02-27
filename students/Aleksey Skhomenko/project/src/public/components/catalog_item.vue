<template>
    <div class="product-item">
        <img :src="prod.img+'?225x311'" :alt="prod.product_name">
        <div class="desc">
            <h3>{{prod.product_name}}</h3>
            <p>{{prod.price ? prod.price+"$" : "бесплатно"}}</p>
            <button class="btn" name="buy" @click="addProduct(prod)">{{prod.price ? "Купить" : "Получить"}}</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prod: {
            type: Object
        }
    },
    methods: {
        addProduct(prod) {
            this.$parent.addProduct(prod)
        }
    }
}
</script>