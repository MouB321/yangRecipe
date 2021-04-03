<template>
  <div>
    <bottom-bar :type="'feast'"></bottom-bar>
    <span>feast</span>
    <div>
      <van-cell-group>
        <van-cell title="单元格" value="内容"></van-cell>
        <van-cell title="单元格" value="内容"></van-cell>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup} from "vant";
import bottomBar from "../../components/BottomBar";
export default {
  name: "feast",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
    };
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name] :CellGroup,
    bottomBar,
  }
};
</script>
<style lang="scss" scoped>
</style>
