<template>
    <div>
        <template v-if="item.quantity">
            <div class="cart-item">
                <img :src="item.img+'?69x93'" :alt="item.product_name">
                <div class="product-bio">
                    <p class="cart-item-name">{{ item.product_name }}</p>
                    <p class="product-price right-block">{{ item.price }}$</p>
                    <div class="quantity">
                        <button name="count-modifier" @click="$parent.setCount(item, item.quantity-1)" class="btn">-</button>
                        <input name="quantity" type="number" v-on:change="$parent.setCount(item, item.quantity)" v-model.lazy="item.quantity" onclick="event.target.select()">
                        <button name="count-modifier" @click="$parent.setCount(item, item.quantity+1)" class="btn">+</button>
                    </div><br>
                <button name="remove" class="btn" @click="$parent.setCount(item)"></button>
                </div>
            </div>
        </template>
        <template v-if="!item.quantity">
            <div class="product-item">
                <img :src="item.img+'?225x311'" :alt="item.product_name">
                <div class="desc">
                    <h3>{{item.product_name}}</h3>
                    <p>{{item.price ? item.price+"$" : "бесплатно"}}</p>
                    <button class="btn" name="buy" @click="addProduct(item)">{{item.price ? "Купить" : "Получить"}}</button>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
    methods: {
        addProduct(prod) {
            this.$root.$children[0].$children[3].$refs.cart.addProduct(prod)
        }
    }
}
</script>