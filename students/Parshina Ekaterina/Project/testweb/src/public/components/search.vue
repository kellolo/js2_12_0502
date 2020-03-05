<template>
    <form action="#" class="search-form">
        <input type="text" class="search-field" v-model="search_text">
        <button class="btn-search" type="submit">
            <i class="fas fa-search"></i>
        </button>
    </form>
</template>

<script>
export default {
    data() {
        return {
            search_text: ""
        }
    },
    watch: {
        search_text: function (val) {            
            this.$parent.update_search(val)   
        }
    }
}
</script>