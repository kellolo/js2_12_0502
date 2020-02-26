<template>
    <div class="cart-item">
        <img :src="cart_item.img+'?69x93'" :alt="cart_item.product_name">
        <div class="product-bio">
            <p class="cart-item-name">{{ cart_item.product_name }}</p>
            <p class="product-price right-block">{{ cart_item.price }}$</p>
            <div class="quantity">
                <button name="count-modifier" @click="setCount(cart_item, cart_item.quantity-1)" class="btn">-</button>
                <input name="quantity" type="number" v-on:change="setCount(cart_item, cart_item.quantity)" v-model.lazy="cart_item.quantity" onclick="event.target.select()">
                <button name="count-modifier" @click="setCount(cart_item, cart_item.quantity+1)" class="btn">+</button>
            </div><br>
        <button name="remove" class="btn" @click="setCount(cart_item)"></button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        cart_item: {
            type: Object
        }
    },
    methods: {
        setCount(item, count = 0) {
            item.quantity = +count
            if (item.quantity === 0) {
                console.log(`${item.product_name} удалён из корзины.`)
                this.$parent.items.splice(this.$parent.items.indexOf(item), 1)
            } else console.log(`Количество ${item.product_name} изменено и теперь равно ${item.quantity}.`)
        }
    }
}
</script>