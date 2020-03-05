<template>

    <div class="product-item" v-if="isCatalog">
        <img :src="catalogImg" :alt="prod.product_name">
        <div class="desc">
            <h3>{{prod.product_name}}</h3>
            <p>{{prod.price}} $</p>
            <button class="buy-btn" 
            name="buy-btn"
            @click="$root.$children[0].$children[0].$refs.cartReference.addProduct(prod)"
            >Купить</button>
        </div>
    </div>

    <div class="cart-item" v-else>
        <div class="product-bio">
            <img :src="img" :alt="prod.product_name">
            <div class="product-desc">
                <p class="product-title">{{prod.product_name}}</p>
                <p class="product-quantity">Quantity: {{prod.quantity}}</p>
                <p class="product-single-price">$ {{prod.price}} each</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{ prod.quantity * prod.price }}</p>
            <button class="del-btn" name="del-btn" @click="$parent.removeProduct(prod)">&times;</button>
        </div>
    </div>

</template>

<script>
export default {
  props: {
    prod: {
      type: Object
    },
    img: {
      type: String,
      default: 'https://placehold.it/100x80'
    },
    catalogImg: {
      type: String,
      default: 'https://placehold.it/200x150'
    },
    isCatalog: {
      type: Boolean,
      default: false
    }
  }
}
</script>