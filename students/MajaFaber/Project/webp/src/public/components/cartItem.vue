<template>
                    <div class="cart-item">
                        <div class="product-bio">
                            <img :src="cartImg">
                            <div class="product-desc">
                                <p class="product-title">{{prod.title}}</p>
                                <p class="product-quantity">Quantity: {{prod.quantity}}</p>
                                <p class="product-single-price">$ {{prod.price}} each</p>
                            </div>
                        </div>
                        <div class="right-block">
                            <p class="product-price">{{ prod.quantity * prod.price }}</p>
                            <button class="del-btn" name="del-btn"
                            @click="removeProduct(prod)">&times;</button>
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
  },
      methods: {
        removeProduct(prod) {
            this.$parent.removeProduct(prod)
            //this.$parent.$emit('remove', prod)
        }
    }
}
</script> 