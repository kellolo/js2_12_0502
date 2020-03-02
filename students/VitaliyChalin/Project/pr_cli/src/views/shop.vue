<template>
	<div>
		<header>
	        <div class="logo">E-shop</div>
	        <div class="cart">
	            <form action="#" class="search-form">
	                <input type="text" class="search-field">
	                <button class="btn-search" type="submit">
	                    <i class="fas fa-search"></i>
	                </button>
	            </form>
	            <button class="btn-cart" type="button" @click="shown = !shown">Корзина</button>
	            <cart v-show="shown" ref="cartReference" />
	        </div>
	    </header>
	    <main>
	        <catalog />
	    </main>
	</div>
</template>

<script>
	import catalog from '../components/catalog.vue'
	import cart from '../components/cart.vue'

	export default {
		data() {
			return {
				shown: false
			}
		},
		components: {
			catalog,
			cart
		},
		methods: {
			getData (url) {
				return fetch(url).then(d => d.json())
			},
			postData (url, data) {
				return fetch(url, {
					method: 'POST',
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(data)
				}).then(d => d.json())
			},
			putData(url, data) {
	            return fetch(url, {
	                method: 'PUT',
	                headers: {
	                    "Content-Type": "application/json"
	                },
	                body: JSON.stringify(data)
	            }).then(d => d.json())
	        },
	        deleteData(url) {
	            return fetch(url, {
	                method: 'DELETE',
	                headers: {
	                    "Content-Type": "application/json"
	                }
	            }).then(d => d.json())
	        }
		}
	}
</script>

<style>

</style>