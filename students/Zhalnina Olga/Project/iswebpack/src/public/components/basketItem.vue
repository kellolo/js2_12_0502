<template>
    <div class="cart-item">
        <div class="product-bio">
            <img :src="cartImage" :alt="cart.product_name">
            <div class="product-desc">
                <p class="product-title">{{cart.product_name}}</p>
                <p class="product-quantity">Quantity: {{cart.quantity}}</p>
                <p class="product-single-price">${{cart.price}} each</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{cart.quantity * cart.price}}</p>
            <button class="del-btn" 
            @click="removeProduct(cart)"
            name="del-btn">&times;</button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        cartImage: {
            type: String,
            default: 'https://placehold.it/100x80'
        },
        cart: {
            type: Object
        }
    }
}
</script>