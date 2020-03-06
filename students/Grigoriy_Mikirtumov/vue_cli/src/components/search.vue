<template>
    <form action="#" class="search-form" @keydown="filtredItem">
        <input type="text" class="search-field" v-model="search">
        <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    data(){
        return {
            url:'api/cart',
            search:'',
            filterdElements:[],
            catalogItems:[]
        }
    },
    methods: {
        filtredItem(){
            let regexp = new RegExp(this.search, 'i')
            this.filterdElements = this.catalogItems.filter((el)=>{
                return regexp.test(el.product_name)
            }) 
            
            this.$root.$children[0].$children[0].$children[2].items = this.filterdElements
            //console.log(this.$root.$children[0].$children[3].$children[2])
        },
    },
}
</script>