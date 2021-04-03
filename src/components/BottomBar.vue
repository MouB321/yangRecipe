<template>
  <div>
    <!-- 没使用vant自己手写的，在router-link那边的样式除了问题 -->
    <!-- <div class="bottom-bar-container">
      <div 
        class="column-flex-container" 
        v-for="(item, index) in itemList" 
        :key="index"
        :class="{'is-active': item.isActive}"
        @click="routerChange(index)"
      >
          <van-icon :name="item.icon" :size="item.size" />
        <router-link :to="item.path">
          <span>{{item.name}}</span>
        </router-link>
      </div>
    </div> -->


    <van-tabbar 
      v-model="currentIndex"
      active-color="#35d6b6" 
      inactive-color="#888888">
      <van-tabbar-item 
        v-for="(item, index) in itemList" 
        :key="index" 
        :icon="item.icon"
        :to="item.path">
        {{item.name}}
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
import { Cell, CellGroup, Icon, Tabbar, TabbarItem} from "vant";
export default {
  name: "tabbar",
  props: [ // 还就那个父子组件传值
    "type", // 在使用时传入type参数，获得当前应该使谁处于active状态
  ],
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      currentIndex: "",
      // 标题数组
      itemList: [
        {name: "推荐", icon:"wap-home-o", size: 20, isActive: false, path: "recommend"},
        {name: "仓库", icon:"cart-o", size: 20, isActive: false, path: "warehouse"},
        {name: "待定", icon:"like-o", size: 20, isActive: false, path: "feast"},
        {name: "我的", icon:"manager-o", size: 20, isActive: false, path: "my"},
      ],
    };
  },
  created(){
    // 若存在type则，将index进行转换
    // if(this.type){
      this.typeToCurrentIndex();
      // this.itemList[this.currentIndex].isActive = true;
    // }
    // 在进行currentIndex的active调整
    // this.activeSwitch(this.currentIndex);
  },
  methods: {
    // 将传入type转换为currentIndex
    typeToCurrentIndex(){
      console.log("this.type");
      console.log(this.type);
      // this.currentIndex = 
      //   this.type=="recommend" ? 0 :
      //   this.type=="warehouse" ? 1 :
      //   this.type=="feast" ? 2 : 3;
      
      switch (this.type) {
        case "recommend":
          this.currentIndex = 0;
          break;
        case "warehouse":
          this.currentIndex = 1;
          break;
        case "feast":
          this.currentIndex = 2;
          break;
        case "my":
          this.currentIndex = 3;
          break;
      }
      console.log(this.currentIndex);
    },
    // 切换active状态函数
    activeSwitch(index){
      this.itemList[this.currentIndex].isActive = false;
      this.currentIndex = index;
      this.itemList[this.currentIndex].isActive = true;
    }
    // 具体实现方法
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Icon.name]: Icon,
    [Tabbar.name]: Tabbar,
    [TabbarItem.name]: TabbarItem,
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
<style lang="scss">
  .van-tabbar{
    box-shadow: 0px 1px 2px 0px rgba(0,0,0,0.50);
  }
</style>
