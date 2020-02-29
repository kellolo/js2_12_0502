<template>
  <div class="cart-item">
      <div class="product-bio">
          <img :src="cartImg" :alt="prod.product_name">
          <div class="product-desc">
              <p class="product-title">{{prod.product_name}}</p>
              <p class="product-quantity">Quantity: {{prod.quantity}}</p>
              <p class="product-single-price">$ {{prod.price}} each</p>
          </div>
      </div>
      <div class="right-block">
          <p class="product-price">{{ prod.quantity * prod.price }}</p>
          <button class="del-btn" name="del-btn" @click="delProduct(prod)">&times;</button>
      </div>
  </div>
</template>

<script>
export default {
  props: {
    cartImg: {
      type: String,
      default: 'https://placehold.it/100x80'
    }, 
    prod: {
      type: Object
    }
  }
}
</script> 