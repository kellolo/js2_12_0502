<template>
  <form class="search-form" @submit="filter">
      <input type="text" class="search-field" v-model="searchLine">
      <button class="btn-search" type="submit">
          <i class="fas fa-search"></i>
      </button>
  </form>
</template>

<script>
export default {
  data(){
    return {
      searchLine: '',
    }
  },
  methods:{
    filter(e){
      e.preventDefault()
      this.$root.$children[0].$refs.catalogReference.filterGoods(this.searchLine)
    }
  }
}
</script>