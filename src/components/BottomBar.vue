<template>
  <div>
    <div class="bottom-bar-container">
      <div 
        class="column-flex-container" 
        v-for="(item, index) in itemList" 
        :key="index"
        :class="{'is-active': item.isActive}"
        @click="routerChange(index)"
      >
        <van-icon :name="item.icon" :size="item.size" />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon} from "vant";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentIndex: 0,
      // 标题数组
      itemList: [
        {name: "推荐", icon:"wap-home-o", size: 20, isActive: false},
        {name: "仓库", icon:"cart-o", size: 20, isActive: false},
        {name: "待定", icon:"like-o", size: 20, isActive: false},
        {name: "我的", icon:"manager-o", size: 20, isActive: false},
      ],
    };
  },
  created(){
    this.activeSwitch(this.currentIndex);
  },
  methods: {
    routerChange(index){
      // this.$router.go("");
      console.log("index："+index);
      // 切换active状态
      this.activeSwitch(index);
    },
    // 切换active状态函数
    activeSwitch(index){
      this.itemList[this.currentIndex].isActive = false;
      this.currentIndex = index;
      this.itemList[this.currentIndex].isActive = true;
    }
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
  }
};
</script>

<style lang="scss" scoped>
.bottom-bar-container{
  width: 375px;
  height: 49px;
  background: #fff;
  color: #888888;
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0px;
  box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.50);
  .column-flex-container{
    display: flex;
    flex-flow: column;
    flex-wrap: nowrap;
    font-size: 13px;
  }
  .is-active{
    color: #35d6b6;
  }
}
</style>
