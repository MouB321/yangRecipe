<template>
  <div>
    <bottom-bar :type="'my'"></bottom-bar>
    <span>my</span>
    <!-- 我的页面所需要的功能
      1、喜欢功能：用来收藏菜谱
      2、笔记功能：
        查看对于菜谱做的笔记，会显示在（做笔记功能坐在菜谱的富文本当中，进行编辑）
      3、创作并发布菜谱功能：用来发布自己制作的菜谱
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
  name: "my",
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
