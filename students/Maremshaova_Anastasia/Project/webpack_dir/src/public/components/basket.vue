<template>
    <div class="cart-block" v-show="this.$parent.showCart">
            <basketItem  class="cart-item"  v-for="item of cartItems" :key="item.id_product" :prod="item"/>     
    </div>
</template>


<script>
import basketItem from './basketItem.vue'
export default {
    data() {
        return {
            url: '/getBasket.json',
            cartItems: [],
        }
    },
     props: {
        cartItem: {
            type: Object
        },
        flagAdd: { 
            type: Boolean
        }
    },
    components: {
        basketItem
    },

    methods: {
        addProduct(cartItem){
                let find = this.cartItems.find (element => element.id_product == cartItem.id_product);
                let item = {
                        product_name: cartItem.product_name,
                        id_product: cartItem.id_product,
                        img: cartItem.img,
                        price: +cartItem.price,
                        quantity: 1
                    };

                    console.log(item); 

                if (!find) {
                this.cartItems.push(item)
                }  else {
                find.quantity++
                }
                this.$parent.flagAdd = false; 
        },

        removeProduct(cartItem){
            let find = this.cartItems.find (element => element.id_product == cartItem.id_product);
            if (find.quantity > 1) {
            find.quantity--
            }  else {
            this.cartItems.splice (this.cartItems.indexOf(find), 1)
            }
        },
},
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.cartItems = data.contents; 
        })
        .then(() => {
            if (this.flagAdd){
                console.log(this.flagAdd)
                this.addProduct(this.cartItem)
            }      
        })

        
    }
}
</script>