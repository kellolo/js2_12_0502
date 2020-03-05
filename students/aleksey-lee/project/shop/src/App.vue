<template>
  <div id="app">
    <Shop />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Shop from './views/shop.vue'

export default {
  name: 'App',
  components: {
    Shop
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
