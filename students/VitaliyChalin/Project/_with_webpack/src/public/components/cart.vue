<template>
	<div class="cart-block">
		<item v-for="item of items" :key="item.id" :prod="item" />
	</div>
</template>

<script>
	import item from './cartItem.vue'
	export default {
		data() {
			return {
				url: '/api/cart',
				items: []
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
			addToCart (prod) {
				let id = prod.id
				let find = this.items.find(item => +item.id === +id)

				if(find) {
					this.$parent.putData(`/api/cart/${id}`, {delta: 1})
					.then(d => {
						d.result ? find.quant++ : console.log('error')
					})
				} else {
					let newProd = Object.assign({}, prod, {quant: 1})
					this.$parent.postData(`/api/cart`, newProd)
					.then(d => {
						d.result ? this.items.push(newProd) : console.log('error')
					})
				}
			},
            removeProduct(prod) {
	            let id = +prod.id
	            let find = this.items.find (element => +element.id === +id);
	            if (find.quant > 1) {
	                this.$parent.putData(`/api/cart/${id}`, {delta: -1})
	                .then(d => {
	                    d.result ? find.quant-- : console.log('error')
	                })
	            }  else {
	                this.$parent.deleteData(`/api/cart/${id}`)
	                .then(d => {
	                    d.result ? this.items.splice(this.items.indexOf(find), 1) : console.log('error')
	                })
	            }
	        }
        }
	}
</script>