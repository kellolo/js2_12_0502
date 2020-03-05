<template>
	<div class="cart-item">
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
    </div>
</template>

<script>
	export default {
		props: {
			cartImg: {
				type: String,
				default: 'https://placehold.it/80x100'
			},
			prod: {
				type: Object
			}
		}
	}
</script>