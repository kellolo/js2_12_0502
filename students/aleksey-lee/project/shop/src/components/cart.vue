<template>
  <div class="cart-block" >
    <item v-for="item of items" :key="item.id_product" :prod="item" />
  </div>
</template>

<script>
import item from './item.vue'

export default{
  data() {
        return {
            url: '/api/cart',
            items: []
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => { this.items = data.contents })
    },
    methods: {
      addProduct(prod) {
        let find = this.items.find (element => element.id_product == prod.id_product);
        if (!find) {
            this.items.push (
                {
                    product_name: prod.product_name,
                    id_product: prod.id_product,
                    price: +prod.price,
                    quantity: 1
                }
            )
        }  else {
            find.quantity++
        }
      },
      removeProduct(prod) {
        let find = this.items.find (element => element.id_product == prod.id_product);
        if (find.quantity > 1) {
            find.quantity--
        }  else {
            this.items.splice (this.items.indexOf(find), 1)
        }
      }
    }
}
</script>