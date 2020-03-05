import './public/style/normalize.css';
import './public/style/style.css';
import Vue from 'vue';
import app from './public/views/shop.vue'

new Vue ({
	render: h => h(app)
}).$mount('#app')