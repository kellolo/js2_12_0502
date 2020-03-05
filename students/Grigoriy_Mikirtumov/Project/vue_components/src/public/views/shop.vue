<template>
     <div id="app">
        <header>
            <div class="logo">E-shop</div>
            <div class="cart">
                <search ref="searchReference"/>
                <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
                <cart v-show="showCart" ref="cartReference"/>
            </div>
        </header>
        <main>
            <catalog ref="catalogReference"/>
            <callback/>
        </main>
    </div>
</template>

<script>
import catalog from '../components/catalog.vue'
import cart from '../components/cart.vue'
import search from '../components/search.vue'
import callback from '../components/callback.vue'
export default {
    data() {
        return {
            //API: 'https://raw.githubusercontent.com/GrigoRASH6000v/js2_12_0502/master/students/Grigoriy_Mikirtumov/Project/src/public/Data%20base',
            showCart: false
        }
    },
    components:{
         catalog,
         cart,
         search,
         callback
    },
    methods: {
        getData(url) {
            return fetch(url).then(d => d.json())
        },
        postData(url, data) {
            return fetch(url, {
                method: 'POST',
                headers:{
                    "content-Type": "aplication/json"
                },
                body: JSON.stringify(data) //Новый обьект с товаром который нужно добавить
            }).then(d => d.json())
        },
        deleteData(url) {
            return fetch(url, {
                method: 'DELETE',
                headers:{
                    "content-Type": "aplication/json"
                }  
            }).then(d => d.json())
        },
        putData(url, data) {
            return fetch(url, {
                method: 'PUT',
                headers:{
                    "content-Type": "aplication/json"
                },
                body: JSON.stringify(data) //Дельта изменения товара
            }).then(d => d.json())
        },
        
    },
}

</script>

<style>
    
</style>