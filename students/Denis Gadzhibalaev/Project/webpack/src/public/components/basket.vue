<template>
<div class="cart-block-wrapper">
    <div class="cart-block">
        <item v-for="basketItem of basketItems.contents" :key="basketItem.id_product" :prod="basketItem" @remove="removeProduct"/>
    </div>
    <div v-show= "seenTotalsum" class="total-sum">Total price: {{ basketItems.amount }} $</div>
    </div>
</template>

<script>
import item from './item.vue'
export default {
    data() {
        return {
            url: 'api/basket',
            basketItems: [],
            seenTotalsum: true
        }
    },
    components: {
        item
    },
    methods: {
        addProduct(el) {
            let find = this.basketItems.contents.find(element => element.id_product === el.id_product);
            if (!find) {
                this.basketItems.contents.push({
                    product_name: el.product_name,
                    id_product: el.id_product,
                    price: +el.price,
                    quantity: 1
                });
                this.basketItems.countGoods += 1;
                this.basketItems.amount += el.price;
            } else {
                find.quantity++
                this.basketItems.countGoods += 1;
                this.basketItems.amount += el.price;
            }
            if (this.basketItems.contents.length > 0) {
                this.seenTotalsum = true;
                 this.$parent.basketBtnDisable = false;
            }
        },
        removeProduct(el) {
            let find = this.basketItems.contents.find(element => element.id_product === el.id_product);
            if (find.quantity > 1) {
                find.quantity--;
                this.basketItems.countGoods -= 1;
                this.basketItems.amount -= el.price;
            } else {
                this.basketItems.contents.splice(this.basketItems.contents.indexOf(find), 1);
                this.basketItems.countGoods -= 1;
                this.basketItems.amount -= el.price;
            }
            if (this.basketItems.contents.length == 0) {
                this.seenTotalsum = false;
                this.$parent.showBasket = false;
                this.$parent.basketBtnDisable = true;
            }
        }
    },
    mounted() {
        this.$parent.getData(this.url)
            .then(data => {
                this.basketItems = data;
                console.log(this.basketItems);
                if (this.basketItems.contents.length == 0) {
                    this.seenTotalsum = false;
                    this.$parent.basketBtnDisable = true;
                }
            });
    }
}
</script>