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
                <button class="btn-cart" type="button" @click="showCart = !showCart">Корзина</button>
                <basket ref="basketReference" v-show="showCart"/>
            </div>
        </header>
        <main>
            <catalog />
        </main>
    </div>
</template>

<script>

import basket from '../components/basket.vue'
import catalog from '../components/catalog.vue'

export default {
    data() {
        return {
            //API: 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses',
            showCart: false
        }
    },
    components: {
        catalog, basket
    },
    methods: {
        getData(url) {
            return fetch(url).then(d => d.json())
        },
        postData(url, data) {
            return fetch(url, {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data) //новый объект с товаром, который нужно добавить
            }).then(d => d.json())
        },
        putData(url, data) {

            console.log(data); 
            return fetch(url, {method: 'PUT',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data) //дельта-изменение товара +1/-1
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