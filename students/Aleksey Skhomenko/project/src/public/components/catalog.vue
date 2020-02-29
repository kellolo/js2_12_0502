<template>
    <div class="products">
        <item v-for="item of filtered" :key="item.product_id" :item="item"/>
    </div>
</template>

<script>
import item from './item.vue'
export default {
    data() {
        return {
            url: 'api/catalog',
            items: []
        }
    },
    computed: {
        filtered: function () {return this.items.filter(x => x.product_name.toLowerCase().indexOf(this.filter) >= 0)}
    },
    components: {
        item
    },
    props: {
        filter: {
            type: String
        }
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data})
        .catch(console.log.bind(console))
    }
}
</script>