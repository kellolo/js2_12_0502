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
				url: 'api/cart',
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
				let find = undefined
				this.items.find (element => {
					if(element.id == prod.id) {
						find = element
					}
				})
		        if (!find) {
		            this.items.push (
		                {
		                    name: prod.name,
		                    id: prod.id,
		                    price: +prod.price,
		                    quant: 1
		                }
		            )
		        }  else {
		            find.quant++
		        }
			},
            removeProduct (prod) {
                if (prod.quant > 1) {
                    prod.quant--
                } else {
                    this.items.splice (this.items.indexOf(prod), 1)
                }
            }
        }
	}
</script>