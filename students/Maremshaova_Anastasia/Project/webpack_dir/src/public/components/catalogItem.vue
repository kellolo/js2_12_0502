<template>
    <div class="product-item">
        <img :src="prod.img" :alt="prod.product_name">
        <div class="desc">
            <h3>{{prod.product_name}}</h3>
            <p>{{prod.price}} $</p>
            <button class="buy-btn" 
            name="buy-btn"
            @click="add(prod)"
            >Купить</button>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        prod: {
            type: Object
        }
    },
    methods:{
        add(prod){
            this.$parent.$parent.getItem(prod)
        }
    }
}
</script>