<template>
  <div>
    <bottom-bar :type="barName"></bottom-bar>
    <!-- 这里要做成道具背包的样子
      上面放上tab进行切换
      所需要的功能：
      1、入仓库和出仓库（入库在右上角的navbar上面，出库在点击食材后弹出）
          入仓库的操作形式：点击入库，弹出窗口，输入名字自动匹配名字，
            匹配成功显示对应的正确图片和对应正确的量词（一斤、一条等），并要求输入数量，PS鸡蛋还是论个吧
            成功入一个弹出一次成功，但入库窗口不关闭
          出仓库的操作形式：点击出库，弹出窗口，图片和量词自动对应，要求输入出库数量
            出库数量要小于等于已有数量
      2、根据tab切换，并展示不同分类
      3、点击食材，弹出详细信息
        包含：名称、当前数量、两个按钮查找有关的菜、出库功能
      4、仓库下边list显示我现在能做的菜，和推荐地方的列表一样的
      5、（之后可以考虑加入，缺少材料的菜，也做成tab切换，缺一种材料、两种三种）

     -->
    <span>warehouse</span>
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
  name: "warehouse",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      barName: "warehouse"
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
