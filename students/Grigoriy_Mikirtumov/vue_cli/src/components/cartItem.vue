<template>
    <div  class="cart-item" >
        <div class="product-bio">
            <img :src="cartImg" :alt="prodCart.product_name">
            <div class="product-desc">
                <p class="product-title">{{prodCart.product_name}}</p>
                <p class="product-quantity">Quantity: {{prodCart.quantity}}</p>
                <p class="product-single-price">$ {{prodCart.price}} each</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{ prodCart.quantity * prodCart.price }}</p>
            <button class="del-btn" @click="$parent.removeItem(prodCart)">&times;</button>
        </div>
    </div>
</template>


<script>
export default {
   
    props:{
        cartImg:{
            type: String,
            default:'https://placehold.it/200x150'
        },
        prodCart:{
            type: Object
        },
       
    }
}
</script>