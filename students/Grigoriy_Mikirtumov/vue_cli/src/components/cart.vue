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
        removeItem(val) {
            let id = +val.id_product
            let find = this.items.find (element => +element.id_product === +id);
            if (find.quantity > 1) {
                this.$parent.putData(`/api/cart/${id}`, {delta: -1})
                .then(d => {
                    d.result ? find.quantity-- : console.log('error')
                })
            }  else {
                this.$parent.deleteData(`/api/cart/${id}`)
                .then(d => {
                    d.result ? this.items.splice (this.items.indexOf(find), 1) : console.log('error')
                })
            }
        },
        findIndexItem(elItem){
            return this.items.findIndex(el=>el.id_product==elItem.id_product)
        },
        addProduct(prod) {
            let id = prod.id_product
            let find = this.items.find(item => +item.id_product === +id)

            if (find) {
                this.$parent.putData(`/api/cart/${id}`, {delta: 1})
                .then(d => {
                    d.result ? find.quantity++ : console.log('error')
                })
            } else {
                let newProd = Object.assign({}, prod, {quantity: 1})
                this.$parent.postData(`/api/cart`, newProd)
                .then(d => {
                    d.result ? this.items.push(newProd) : console.log('error')
                })
            }
        }
    },
    
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data.contents})
    }
}
</script>