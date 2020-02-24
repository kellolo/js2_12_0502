// https://jsonplaceholder.typicode.com/comments
let app = new Vue ({
	el: '#app',
	data: {
		items: [],
		url: 'https://jsonplaceholder.typicode.com/comments'
	},
	methods: {
		getData (url) {
			return fetch(url)
					.then(d => d.json())
		},
		toggle (el) {
			el.hidden !== undefined ? el.hidden = !el.hidden : this.$set(el, 'hidden', true)
		} 
	},
	computed: {

	},
	mounted () {
		this.getData(this.url)
			.then(posts => {
				this.items = posts
			})
	}
})