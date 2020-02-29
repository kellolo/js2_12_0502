<template>    
    <div class="cart-block">
        <element v-for="item of items" :key="item.id_product" :item="item" />
    </div>
</template>

<script>
import item from './basketItem.vue'
export default {
    data() {
        return {
            url: '/basket.json',
            items: []            
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
            let find = this.items.find (element => element.id_product == item.id_product)                    
            if (!find) {
                item.quantity = 1
                this.items.push (item)                            
            }  else {
                find.quantity++
            }
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