let app = new Vue ({
	el: '#app',
	data:{
			products: [],
			url: 'https://raw.githubusercontent.com/EdwardLeks/database/master/goodsData.json',
			img: 'https://placehold.it/200x150'
	},
	methods:{
			getData(url){
					return fetch(url)
							.then(d => d.json())
			},
			isVisibleCart(){
				let cart = document.querySelector('.cart-block')
				cart.classList.toggle('invisible')
			},
			filterGoods(){
				let searchLine  = document.querySelector('.search-field').value
				let filtered = this.products.filter(item => {
					if(item['name'].toLowerCase().includes(searchLine.toLowerCase())){
						return item
					}
				})
				console.log(filtered)
				if(filtered.length != 0 && searchLine != ''){
					this.products = filtered
				} else if(filtered.length == 0 && searchLine){
					// alert('No Items')
				} else{
					this.getData(this.url).then(item => {this.products = item})
				}
			}
	},
	computed:{
	},
	mounted(){
		this.getData(this.url)
				.then(item => {
						this.products = item
				})
	}
})