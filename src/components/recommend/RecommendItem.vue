<template>
  <div class="recommend-item-container">
    <div class="item-left-content">
      <img :src="dataObj.imgUrl" alt="">
    </div>
    <div class="item-right-content">
      <div class="item-right-top-content ellipsis_2">
        <span>{{dataObj.name}}</span>
      </div>
      <div class="item-right-bottom-content">
        <span>
          <van-icon name="eye-o" size="14"></van-icon>
          {{dataObj.viewTimes}}
        </span>
        <span>
          <van-icon name="fire-o" size="12"></van-icon>
          {{dataObj.thumbTimes}}
        </span>
      </div>
    </div>

  </div>
</template>

<script>
import { Cell, CellGroup, Icon} from "vant";
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      
    };
  },
  props: [
    "dataObj", // 传入数据对象
  ],
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.recommend-item-container{
  width: calc(100% - 25px); // 调整使得宽度进行自适应
  height: 109px;
  background: #FFFFFF;
  box-shadow: 0px 3px 8px 0px rgba(181,181,181,0.15);
  border-radius: 8px;
  margin: 8px auto 0;
  display: flex;
  align-items: center;
  justify-content: space-around;
  .item-left-content{
    width: 129px;
    height: 88px;
    // background: rgba(0, 0, 0, 0.39);
    box-shadow: 0px 3px 8px 0px rgba(181,181,181,0.15);
    border-radius: 8px;
    opacity: 0.8;
    img{
      width: 129px;
      height: 88px;
    }
  }
  .item-right-content{
    width: 182px;
    height: 78px;
    // background: rgba(0, 0, 0, 0.39);
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: space-around;
    .item-right-top-content{
      height: 28px;
      font-size: 14px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #333333;
      line-height: 14px;
      text-shadow: 0px 3px 8px rgba(181, 181, 181, 0.15);
    }
    .item-right-bottom-content{
      align-self: flex-end;
      font-size: 12px;
      font-family: PingFangSC-Regular, PingFang SC;
      font-weight: 400;
      color: #999999;
      line-height: 14px;
      text-shadow: 0px 3px 8px rgba(181, 181, 181, 0.15);
      span{
        margin-right: 10px;
      }

    }
  }
}
</style>
