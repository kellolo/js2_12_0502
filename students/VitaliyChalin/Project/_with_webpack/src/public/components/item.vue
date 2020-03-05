<template>
	<div class="product-item">
        <img :src="prod.img" :alt="prod.name">
        <div class="desc">
            <h3>{{ prod.name }}</h3>
            <p>{{ prod.price }}</p>
            <button
            	@click="$root.$children[0].$refs.cartReference.addToCart(prod)"
            	class="buy-btn"
            	name="buy-btn">Купить</button>
        </div>
    </div>
    <!-- <div class="cart-item">
        <div class="product-bio">
            <img :src="cartImg" :alt="prod.name">
            <div class="product-desc">
                <p class="product-title">{{ prod.name }}</p>
                <p class="product-quantity">Quantity: {{ prod.quant }}</p>
                <p class="product-single-price">${{ prod.price }} each</p>
            </div>
        </div>
        <div class="right-block">
            <p class="product-price">{{ prod.quant * prod.price }}</p>
            <button class="del-btn" name="del-btn" :data-id="prod.id" @click="$parent.removeProduct(prod)">&times;</button>
        </div>
    </div> -->
</template>

<script>
	export default {
		props: {
			catalogImg: {
				type: String,
				default: 'https://placehold.it/200x150'
			},
			cartImg: {
				type: String,
				default: 'https://placehold.it/80x100'
			},
			prod: {
				type: Object
			}
		},
	}
</script>