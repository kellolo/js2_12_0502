<template>
    <div class="cart-block" >
            <basketItem v-for="item of cartItems" :key="item.id_product" :prod="item"/>     
    </div>
</template>


<script>
//const api = 'http://localhost:8080';
import basketItem from './basketItem.vue'
export default {
    data() {
        return {
            url: '/api/basket',
            cartItems: [],
        }
    },
    components: {
        basketItem
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.cartItems = data.contents})
    },
    methods: {
        addProduct(prod) {
            let id = prod.id_product
            let find = this.cartItems.find(item => +item.id_product === +id)
            if (find) {
                this.$parent.putData(`/api/basket/${id}`, {delta: 1})
                .then(d => {
                    d.result ? find.quantity++ : console.log('error')
                })
            } else {
                let newProd = Object.assign({}, prod, {quantity: 1})
                this.$parent.postData(`/api/basket`, newProd)
                .then(d => {
                    d.result ? this.cartItems.push(newProd) : console.log('error')
                })
            }
        },
        removeProduct(val) {
            let id = +val.id_product
            let find = this.cartItems.find (element => +element.id_product === +id);
            if (find.quantity > 1) {
                this.$parent.putData(`/api/basket/${id}`, {delta: -1})
                .then(d => {
                    d.result ? find.quantity-- : console.log('error')
                })
            }  else {
                this.$parent.deleteData(`/api/basket/${id}`)
                .then(d => {
                    d.result ? this.cartItems.splice (this.cartItems.indexOf(find), 1) : console.log('error')
                })
            }
        }
    }
}
</script>