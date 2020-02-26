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
        flagAdd: 
        {
            type: Boolean
        }
    },
    components: {
        basketItem
    },

    methods: {
        addProduct(cartItem){
            console.log(this.flagAdd);
            if (this.flagAdd){
                let find = this.cartItems.find (element => element.id_product == prod.id_product);
                let item = {
                        product_name: cartItem.product_name,
                        id_product: cartItem.id_product,
                        img: cartItem.img,
                        price: +cartItem.price,
                        quantity: 1
                    };

                if (!find) {
                this.cartItems.push (item)
                }  else {
                find.quantity++
                }
                this.flagAdd = false; 
                console.log(this.flagAdd);
            }
        },

        removeProduct(cartItem){
            let find = this.cartItems.find (element => element.id_product == cartItem.id_product);
        if (find.quantity > 1) {
            find.quantity--
        }  else {
            this.cartItems.splice (this.cartItems.indexOf(find), 1)
        }
        }

    },
    mounted() {
        //this.addProduct(this.cartItem); 
        
        this.$parent.getData(this.url)
        .then(data => {this.cartItems = data.contents})
        
        //console.log(this)
    }
}
</script>