<template>
  <div class="warehouse">
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
        食材加载的时候要通过id值来获取assets中的对应图片
      3、点击食材，弹出详细信息
        包含：名称、当前数量、两个按钮查找有关的菜、出库功能
      4、仓库下边list显示我现在能做的菜，和推荐地方的列表一样的
      5、（之后可以考虑加入，缺少材料的菜，也做成tab切换，缺一种材料、两种三种）

     -->
     <!-- top-tabbar用来放置新增入库按钮 -->
     <div class="top-tab-bar">
      <van-nav-bar 
        title="仓库"
        @click-right="onClickRight">
        <template #right>
          <van-icon name="add-o" size="18" />
          <span>入库</span>
          <!-- <van-icon name="search"/> -->
        </template>
      </van-nav-bar>
     </div>
     <!-- 物品栏开始(最多放置25个，做成5*5大小) -->
    <div class="food-item-container">
      <!-- <div class="food-item" v-for="i in 25" :key="i">

      </div> -->
      <food-item
        v-for="i in 25"
        :key="i"
        :dataObj="foodItemDataObj">

      </food-item>
    </div>
    <!-- 物品栏分页开始 -->
    <div class="food-item-pager">
      <van-pagination
        v-model="currentPage"
        :total-items="125"
        :show-page-size="3"
        force-ellipses
      />
    </div>

    <!-- 底部推荐部分（使用recommend中的封装组件即可） -->
    <div class="able-food-recommend">
      <div class="able-food-recommend-title">
        <span>制作菜谱推荐</span>
      </div>
      <van-pull-refresh v-model="refreshing" @refresh="onRefresh">
        <van-list
          v-model="loading"
          :finished="finished"
          finished-text="没有更多了"
          @load="onLoad"
        >
          <recommend-item 
            v-for="(item, index) in list" 
            :key="index" 
            :dataObj="item"
          >
          </recommend-item>
          <!-- <van-cell v-for="item in list" :key="item" :title="item" /> -->
        </van-list>
      </van-pull-refresh>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, NavBar, Toast, Icon, Pagination, List, PullRefresh } from "vant";
import bottomBar from "../../components/BottomBar";
import foodItem from "../../components/warehouse/FoodItem";
import recommendItem from "../../components/recommend/RecommendItem";
export default {
  name: "warehouse",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      barName: "warehouse",

      // 分页数据
      currentPage: 2,
      
      // 下拉list部分
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
      // recommend CPN需要传入的数据, 之后使用调用的接口数据代替
      recommendItemDataObj: {
        name: "鱼香肉丝怎么做才能做得比包书言做出来的鱼香肉丝一样好吃",
        imgUrl: require('../../assets/test1.jpg'),
        viewTimes: 10000,
        thumbTimes: 100,
      },
      foodItemDataObj: {
        name: "大白菜",
        id: 1,
        number: 2,
        imgUrl: require("../../assets/test2.png"),
      }
    };
  },
  methods: {
    // 右上角入库方法
    onClickRight(){
      Toast("开始入库");
    },

    
    // recommendCPN对应的方法
    toUrl(){
      this.$router.push({
        name: "search",
      });
    },
    onLoad() {
      setTimeout(() => {
        if (this.refreshing) {
          this.list = [];
          this.refreshing = false;
        }

        for (let i = 0; i < 10; i++) {
          this.list.push(this.recommendItemDataObj);
        }
        this.loading = false;

        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 1000);
    },
    onRefresh() {
      // 清空列表数据
      this.finished = false;

      // 重新加载数据
      // 将 loading 设置为 true，表示处于加载状态
      this.loading = true;
      this.onLoad();
    },
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [NavBar.name]: NavBar,
    [Toast.name]: Toast,
    [Icon.name]: Icon,
    [Pagination.name]: Pagination,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh, 
    bottomBar,
    foodItem,
    recommendItem,
  }
};
</script>
<style lang="scss" scoped>
.warehouse{
  margin-bottom: 55px;
  .food-item-container{
    width: 350px;
    height: 350px;
    // background: aqua;
    // margin: calc((100vw - 350px) / 2) auto 0;
    margin: 8px auto 0;
    box-sizing: border-box;
    border: 2px #939393 solid;
    border-radius: 10px;
    // 设置为flex模式，对item进行展示
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;


    // 设置foodItem的样式
    .food-item{
      width: 50px;
      height: 50px;
      border-radius: 5px;
      border: 1px #333 solid;
      background-color:orange;
      margin: 0 8px;
    }
  }
  .food-item-pager{
    width: 350px;
    height: 40px;
    margin: 10px auto 0;
    background: #fff;
  }
  .able-food-recommend{
    width: 350px;
    min-height: 240px;
    margin: 10px auto 0;
    // background: orange;
    .able-food-recommend-title{
      // 设置为居中对齐
      margin: 0 auto;

      // 对于渐变背景色
      width: 100px;
      height: 18px;
      font-size: 15px;
      font-family: PingFangSC-Medium, PingFang SC;
      font-weight: 500;
      color: #999999;
      line-height: 19px;
      background: linear-gradient(149deg, #1DEFCA 0%, #39CCED 100%);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;


    }
  }
}
</style>
<style lang="scss">
.warehouse{
  // 重置navbar的icon文字样式
  .van-nav-bar .van-icon{
    color: #323233;
  }
  // 重置分页部分样式
  .van-pagination__item--active{
    color: #fff !important; // 必须加上important
    background-color: #35D6B6;
  }
  .van-pagination__item{
    color: #35D6B6;
  }
  .van-pagination__item:active{
    background-color: rgb(53, 214, 182);
  }
}
</style>

