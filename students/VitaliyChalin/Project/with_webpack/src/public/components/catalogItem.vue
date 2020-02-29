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
</template>

<script>
	export default {
		props: {
			catalogImg: {
				type: String,
				default: 'https://placehold.it/200x150'
			},
			prod: {
				type: Object
			}
		},
	}
</script>