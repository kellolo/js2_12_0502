<template>
    <div class="products">
        <item v-for="item of filtered" :key="item.product_id" :prod="item"/>
    </div>
</template>

<script>
import item from './catalog_item.vue'
export default {
    data() {
        return {
            url: '/catalogDataResponse.json',
            items: [],
            cart: this.$parent.$refs.cart
        }
    },
    computed: {
        filtered: function () {return this.items.filter(x => x.product_name.toLowerCase().indexOf(this.filter) >= 0)}
    },
    components: {
        item
    },
    props: {
        filter: {
            type: String
        }
    },
    methods: {
        addProduct(prod) {
            let find = this.cart.items.find(x => x.product_id === prod.product_id)
            if (!find) {
                this.cart.items.push({...prod, quantity: 1})
            } else {
                find.quantity++
            }
            console.log(`${prod.product_name} добавлен в корзину.`)
        }
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data})
        .catch(console.log.bind(console))
        
    }
}
</script>