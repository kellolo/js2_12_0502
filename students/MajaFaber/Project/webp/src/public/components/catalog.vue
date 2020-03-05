<template>
    <div class="products">
     <!--   <item v-for="item of items" :key="item.id" :prod="item"  />      -->
         <item v-for="item of search" :key="item.id" :prod="item"  />
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
    computed: {
        search: function () {return this.items.filter(x => x.title.toLowerCase().indexOf(this.filter) >= 0)}
    },
    props: {
        filter: {
            type: String
        }
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {this.items = data})
    }
}
</script>