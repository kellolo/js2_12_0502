<template>    
    <div class="cart-block">
        <element v-for="item of elements" :key="item.id_product" :item="item" />
    </div>
</template>

<script>
import item from './basketItem.vue'
export default {
    data() {
        return {
            url: '/basket.json',
            elements: [],
            
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.elements = data.contents})        
    }
}
</script>