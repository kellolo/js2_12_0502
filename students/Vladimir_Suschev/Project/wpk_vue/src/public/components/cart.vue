<template>
  <div class="cart-block" v-show="this.viewCart">
    <item v-for="item of items" class="cart-item" :key="item.id_product" :cart='item'>
    </item>
  </div>
</template> 
<script>
import item from "./cartitem.vue";
export default { 
  data() {
    return {
      url: "/getBasket.json",
      items: [],
      viewCart: true,
    };
  },
  components: {
    item
  },
  mounted() {
    this.$parent.getData(this.url).then(data => {
      this.items = data.contents;
      // console.log(this)
      console.log(items)
    });
    
  }
};
</script>