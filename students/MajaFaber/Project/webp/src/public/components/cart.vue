<template>
                <div class="cart-block">
                        <item v-for="item of items" :key="item.id" :prod="item" />   
                     <!--    <item v-for="item of items" :key="item.id" :prod="item" @remove="removeProduct" /> 
                        <p>Итого: {{getTotalPrice}} $</p> -->
                </div>


</template>

<script>
import item from './cartItem.vue'
export default{
    data() {
        return {
            url: 'api/cart',
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
                let id = prod.id
                let find = this.items.find(item => +item.id === +id)
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
                /* console.log('Куплен ' + prod.product_name)
                        let find = this.items.find (element => element.id == prod.id);
                        if (!find) {
                            this.items.push (
                                {
                                    title: prod.title,
                                    id: prod.id,
                                    price: +prod.price,
                                    quantity: 1
                                }
                            )
                        }  else {
                            find.quantity++
                        } */
             },
            removeProduct(val) {
                let id = +val.id
                let find = this.items.find (element => element.id == val.id);
                if (find.quantity > 1) {
                      this.$parent.putData(`/api/cart/${id}`, {delta: -1})
                     .then(d => {
                           d.result ? find.quantity-- : console.log('error')
                    })
                }  else {
                    this.$parent.deleteData(`/api/cart/${id}`, {delta: 1})
                    .then(d => {
                        d.result ?  this.items.splice (this.items.indexOf(find), 1) : console.log('error')
                    })
                }
/*                 let find = this.items.find (element => element.id == val.id);
                if (find.quantity > 1) {
                    find.quantity--
                }  else {
                    this.items.splice (this.items.indexOf(find), 1)
                } */
            }
        }
}
</script> 