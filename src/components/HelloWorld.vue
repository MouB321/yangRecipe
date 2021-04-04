<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <h2>Ecosystem</h2>

    <!-- testCode -->
    <div>
      <van-cell-group>
        <van-cell title="单元格" value="内容"></van-cell>
        <van-cell title="单元格" value="内容"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Toast} from "vant";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name] :CellGroup,
    [Toast.name]:Toast,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
h1,
h2 {
  font-weight: normal;
}
</style>
