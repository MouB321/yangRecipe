<template>
  <div>
    <bottom-bar :type="'feast'"></bottom-bar>
    <span>feast</span>
    <!-- feast要做什么功能
      概述：像是在美团外卖上面的侧导航栏：根据对菜品进行分类
            底下做上一个购物车的功能，最终完成差价的计算。
            右下侧点击结算，跳转到另外一个页面上
            
            另一页面，分成两个部分：已有的部分做折叠操作
            未有的部分展开操作，便于查看，
            另外考虑生成一个报表形式：按照仓库中的分类方式，对所需食材进行分类

        什么时候清空这个购物车：
          生成过图表之后，肯定要回看的功能，
          对，就在这个生成好的图表界面，下方两个按钮：
            回看购物车（跳转至feast原初界面）
            买好啦，清空购物车，去仓库看看（跳转至仓库原初界面，进行入库出库操作）
     -->
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
