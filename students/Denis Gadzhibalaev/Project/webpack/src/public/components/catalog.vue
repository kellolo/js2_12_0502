<template>
    <div class="products">
        <item v-for="item of filterCatalogItems" :key="item.id_product" :prod="item"/>     
    </div>
</template>

<script>
import item from './item.vue'
export default {
    data() {
        return {
            url: 'api/catalog',
            catalogItems: [],
            filterCatalogItems: [], 
        }    
    },
    components: {
        item
    },
    methods: {
        
    },
    mounted() {
        this.$parent.getData(this.url)
        .then(data => {
            this.catalogItems = data;
            this.filterCatalogItems = data;
            console.log(this.catalogItems);
            })
        .catch(errorData => {
            this.$parent.showError = true;
            this.$parent.errorMessage = 'УПС, произошла ошибка!!! Повторите попытку позднее.';
            });

    }
}
</script>