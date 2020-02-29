<template>
    <div class="cart-block" >
            <basketItem v-for="item of cartItems" :key="item.id_product" :prod="item"/>     
    </div>
</template>


<script>
import basketItem from './basketItem.vue'
export default {
    data() {
        return {
            url: 'api/basket',
            cartItems: [],
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
        });

        
    }
}
</script>