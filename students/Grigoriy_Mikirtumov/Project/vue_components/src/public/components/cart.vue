<template>
    <div class="cart-wrp">
        <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
        <div class="cart-block" v-show="showCart"> 
            <itemcart v-for="itemcart of items" :key="itemcart.id_product" :prodCart="itemcart"></itemcart>
        </div>
    </div>
</template>

<script>
import itemcart from './cartItem.vue'
export default {
    data(){
        return {
            url:'/getBasket.json',
            items: [],
            showCart: false
        }
    },
     components: {
        itemcart
    },
    methods: {
        removeItem(item){
            console.log("товар удалён")
            this.items.splice(this.findIndexItem(item), 1)
        },
        findIndexItem(elItem){
            return this.items.findIndex(el=>el.id_product==elItem.id_product)
        },
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data.contents})
    }
}
</script>