<template>
    <div class="cart-block">
        <item v-for="item of items" :key="item.id_product" :item="item" @remove="removeProduct"/>     
    </div>
</template>

<script>
import item from './cartItem.vue'
export default {
    data() {
        return {
            url: 'api/basket',
            items: [],
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data.contents})
    },
    methods: {
        addProduct(prod) {
            console.log('Куплен ' + prod.product_name)
        },
        removeProduct(val) {
            let find = this.items.find (element => element.id_product == val.id_product);
            if (find.quantity > 1) {
                find.quantity--
            }  else {
                this.items.splice (this.items.indexOf(find), 1)
            }
        }
    }
}
</script>