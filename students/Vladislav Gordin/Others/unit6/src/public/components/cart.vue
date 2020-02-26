<template>
    <div id="cart" v-if="visible">
        <div class="cart-block">
            <p v-if="items.length === 0">Корзина пуста.</p>
            <item v-for="item of items" :key="item.product_id" :cart_item="item"/>
            <div v-if="this.items.length > 0">
                <hr>
                Товаров в корзине: {{ quantity }} (стаков: {{ items.length }})<br>
                Общая стоимость: {{ price }}$
                <button name="wipe" class="btn" @click="wipe()">Очистить корзину</button>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    
}
</script>

<style>

</style>