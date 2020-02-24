<template>
  <div class="cart-block" >
    <item v-for="item of items" :key="item.id_product" :prod="item" />
  </div>
</template>

<script>
import item from './cartItem.vue'

export default{
  data() {
        return {
            url: '/getBasket.json',
            items: [],
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data.contents})
    }
}
</script>