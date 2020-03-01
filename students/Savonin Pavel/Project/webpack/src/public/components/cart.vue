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
        
        removeProduct(val) {
            let find = this.items.find (element => element.id_product == val.id_product);
            if (find.quantity > 1) {
                find.quantity--
            }  else {
                this.items.splice (this.items.indexOf(find), 1)
            }
        },
        makePOSTRequest(url, data) {
            let xhr;

            if (window.XMLHttpRequest) {
            xhr = new XMLHttpRequest();
            } else if (window.ActiveXObject) { 
            xhr = new ActiveXObject("Microsoft.XMLHTTP");
            }

            /* xhr.onreadystatechange = function () {
                if (xhr.readyState === 4) {
                    callback(xhr.responseText);
                }
            } */

            xhr.open('POST', url, true);
            xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8');

            xhr.send(data);
        },
        addProduct(prod) {
            this.makePOSTRequest("api/addToCart", prod);
            console.log(prod);
            //console.log(this.api/cart)
        },
    }
}
</script>