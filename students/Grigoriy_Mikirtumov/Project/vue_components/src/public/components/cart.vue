<template>
        <div class="cart-block"> 
            <span v-if="items.length===0" class="empty_cart_maessage">Корзина пуста</span>
            <itemcart v-for="itemcart of items" :key="itemcart.id_product" :prodCart="itemcart"></itemcart>
        </div>
</template>

<script>
import itemcart from './cartItem.vue'
export default {
    data(){
        return {
            url:'api/cart',
            items: [],
        }
    },
     components: {
        itemcart
    },
    methods: {
        emptyCart(){
            if(this.items.length === 0){

            }
            
        },
        removeItem(item){
            this.items[this.findIndexItem(item)].quantity>1 ? this.items[this.findIndexItem(item)].quantity-- : this.items.splice(this.findIndexItem(item), 1)
        },
        findIndexItem(elItem){
            return this.items.findIndex(el=>el.id_product==elItem.id_product)
        },
        check(elItem){
           return  this.items.find(el=>el.id_product==elItem.id_product)
        },
        addProductToCart(product){
            if(this.check(product)){
                this.items[this.findIndexItem(product)].quantity++
                
            }else{
                this.$set(product, 'quantity', 1)
                this.items.push(product)
            }
        }
    },
    
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data.contents})
    }
}
</script>