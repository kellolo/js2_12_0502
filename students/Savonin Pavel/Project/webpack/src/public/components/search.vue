<template>
    <form action="#" class="search-form">
        <input type="text" class="search-field">
        <button @click="filterGoods(searchLine)" class="btn-search">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
    export default {
    data () {
        return {
            filterGoods(searchLine) {
            let filteredGoods = [];
            console.log("filtered");
            console.log(this.searchLine.toLowerCase());
            this.goods.forEach(good => {
                if (good.product_name.toLowerCase().indexOf(searchLine.toLowerCase()) + 1) {
                    filteredGoods.push(good);
                }
            })
            this.filteredGoods = filteredGoods;
            this.searchRequest = searchLine;
            if (filteredGoods.length == 0) {
                errShow = true
            } else {
                errShow = false
            }
        }}
         
    },
    components: {
        
    },
    mounted() {
        
    }
}
</script>

<style>

</style>