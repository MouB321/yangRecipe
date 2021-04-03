<template>
  <div id="app">
    <router-view/>
    <bottom-bar />
  </div>
</template>

<script>
import bottomBar from "./components/BottomBar.vue"
export default {
  name: 'App',
  components: {
    bottomBar,
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;

  background: #f5f5f5;
}
</style>
