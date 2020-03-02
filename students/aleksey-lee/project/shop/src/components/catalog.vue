<template>
    <div class="products">
        <item v-for="item of founds" :key="item.id_product" :prod="item" :isCatalog="true"/>
    </div>
</template>

<script>
import item from './item.vue'

export default {
    data() {
        return {
            url: '/api/catalog',
            items: [],
            founds: []
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {
            this.items = this.founds = data
            
        })
    },
    methods: {
        filterGoods(search) {
            let reg = new RegExp(search, 'i')
            this.founds = this.items.filter(item => reg.test(item.product_name))
        }
    }
}
</script>