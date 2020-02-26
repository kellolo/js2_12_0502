<template>
    <div class="products">
        <item v-for="item of filterCatalogItems" :key="item.id_product" :prod="item"/>     
    </div>
</template>

<script>
import item from './catalogItem.vue'
export default {
    data() {
        return {
            url: 'https://raw.githubusercontent.com/Diger134/js2_12_0502/master/students/Denis%20Gadzhibalaev/Project/webpack/src/server/db/catalogData.json',
            catalogItems: [],
            filterCatalogItems: []
        }
    },
    components: {
        item
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {
            this.catalogItems = data;
            this.filterCatalogItems = data;
            console.log(this.catalogItems);
            });
    }
}
</script>