<template>
  <!-- 加上clearfix防止高度塌陷问题 -->
  <div id="app" class="clearfix">
    <router-view/>
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
  margin-top: 0px;
  background: #f5f5f5;
  /* 设置最小高度，令背景颜色填充满 */
  min-height: calc(100vh - 50px);
}
</style>
