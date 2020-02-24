<template>
<div class="cart-block-wrapper">
    <div class="cart-block">
        <item v-for="basketItem of basketItems.contents" :key="basketItem.id_product" :prod="basketItem" />
    </div>
    <div v-show= "seenTotalsum" class="total-sum">Total price: {{ basketItems.amount }} $</div>
    </div>
</template>

<script>
import item from './basketItem.vue'
export default {
    data() {
        return {
            url: 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/server/db/getBasket.json',
            basketItems: [],
            seenTotalsum: true
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
            .then(data => {
                this.basketItems = data;
                console.log(this.basketItems);
                if (this.basketItems.contents.length == 0) {
                    this.seenTotalsum = false;
                }
            });
    }
}
</script>