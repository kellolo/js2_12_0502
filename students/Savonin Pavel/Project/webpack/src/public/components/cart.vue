<template>
    <div class="cart">
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
</template>
<script>
export default {
    data:  {
        showCart: false,
    },
}
</script>