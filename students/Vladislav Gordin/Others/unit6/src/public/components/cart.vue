<template>
    <div class="product-item" :key="item.id_product">
        <img :src="catalogImg" :alt="item.product_name">
        <div class="desc">
            <h3>{{item.product_name}}</h3>
            <p>{{item.price}} $</p>
            <button class="buy-btn" name="buy-btn" @click="addProduct(item)">Купить</button>
        </div>
    </div>
</template>

<script>
import item from './cartItem.vue'
export default {
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
        .then(data => {this.items = data})
        //console.log(this)
    }
}
</script>