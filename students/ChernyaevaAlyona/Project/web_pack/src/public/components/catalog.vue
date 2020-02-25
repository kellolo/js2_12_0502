<template>
    <div class="products">
        <item v-for="item of this.$parent.catalogItems" :key="item.id_product" :prod="item"/>  
    </div>
</template>

<script>
import item from './catalogItem.vue'
export default {
    data() {
        return {
            // url: '/index.json',
            // items: [],
        }
    },
    components: {
        item
    // },
    // mounted() {
    //     this.$parent.getData(this.url)
    //     .then(data => {this.items = data})
    //     .then(() => { this.$parent.getQuantity(this.items) })
    //     //console.log(this)
    }
}
</script>