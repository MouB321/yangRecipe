<template>
  <div 
    class="food-item-content"
    @click="showFoodDetail">
    <!-- 食材对应的图片 -->
    <img :src="dataObj.imgUrl" alt="">
    <!-- 右下角数字部分 -->
    <div class="food-item-number">
      <span>{{dataObj.number}}</span>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Toast} from "vant";
export default {
  name: "HelloWorld",
  props: ["dataObj"],
  /*
    dataObj: {
      id //食材id
      name //食材名称
      number //食材现存数量
      imgUrl // 食材对应的图片url

    }
  */
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      // dataObj: {},
    };
  },
  created(){

  },
  methods: {
    // 弹出窗口方法
    // 详情窗口
    showFoodDetail(){
      Toast("testToast");
    },
    // 出库窗口
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
.food-item-content{
  width: 50px;
  height: 50px;
  border-radius: 5px;
  border: 1px #333 solid;
  // background-color:orange;
  margin: 0 8px;
  position: relative;  //子绝父相
  // 设置图片部分
  img{
    // 让图片自动适应盒子
    width: inherit;
    height: inherit;
    border-radius: inherit;
  }
  // 右下数字白色部分
  .food-item-number{
    width: 13px;
    height: 13px;
    background-color: #f5f5f5;
    // 边框部分
    border: 1px #999 solid;
    border-bottom: none;
    border-right: none;
    border-radius: 5px 0 5px 0;
    box-sizing: border-box;
    // 绝对定位部分
    position: absolute; // 子绝父相
    bottom: 0px;
    right: 0px;
    // 文字部分
    line-height: 11px;
    font-size: 11px;
    span{
      text-align: center;
    }
  }
}
</style>
