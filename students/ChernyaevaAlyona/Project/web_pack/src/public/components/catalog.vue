<template>
    <div class="products">
        <item v-for="item of items" :key="item.id_product" :prod="item"/>     
    </div>
</template>

<script>
import item from './catalogItem.vue'
export default {
    data() {
        return {
            url: 'api/catalog',
            items: [],
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data})
    }
}
</script>