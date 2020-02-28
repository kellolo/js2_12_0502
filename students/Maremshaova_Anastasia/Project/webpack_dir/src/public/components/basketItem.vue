<template>
    <div class="cart-item" :key="prod.id_product">
        <div class="product-bio">
            <img :src="prod.img" :alt="prod.product_name">
                <div class="product-desc">
                    <p class="product-title">{{prod.product_name}}</p>
                    <p class="product-quantity">Quantity:
                        {{prod.quantity}}</p>
                    <p class="product-single-price">$
                        {{prod.price}}
                        each</p>
                </div>
            </div>
            <div class="right-block">
                <p class="product-price">{{ prod.quantity * prod.price }}</p>
                <button class="del-btn" name="del-btn" @click="removeProduct(prod)">&times;</button>
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
    methods:{
        removeProduct(prod){
            this.$parent.removeProduct(prod);
        } 
    }
}
</script>