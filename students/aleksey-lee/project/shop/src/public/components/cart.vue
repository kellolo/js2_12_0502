<template>
    <div class="cart-block">
        <item v-for="item of items" :key="item.id_product" :prod="item" @remove="removeProduct"/>     
    </div>
</template>

<script>
import item from './item.vue'
export default {
    data() {
        return {
            url: '/api/cart',
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
        },
        removeProduct(val) {
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
        }
    }
}
</script>