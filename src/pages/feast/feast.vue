<template>
  <div class="feast-content">
    <bottom-bar :type="'feast'"></bottom-bar>
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


     <!-- 左侧导航栏
      首先是侧导航栏，考虑到宽度问题，将二级导航栏放置到顶部（以checkbox-group方式显示）
       -->
    <div class="side-bar">
      <van-sidebar 
        v-model="activeKey"
        @change="onSidebarChange">
        <van-sidebar-item 
          v-for="(item, index) in firstClassify"
          :key="index"
          :title="item" 

        />
      </van-sidebar>
    </div>
    <!-- 中间主要部分 -->
    <div class="main-content">
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
    <!-- fixed底部购物车部分
      要显示什么：
      1、上方浮动显示一个列表，只放名字，后面加上红色的删除icon、点击删除
      2、右侧放上一个确认按钮，点击确认时进行跳转，至综合页面
     -->
    <div class="shopping-cart">
      <!-- 分别设置左侧和右侧的提示文字 -->
      <div class="cart-text">
        <div class="cart-left-text" @click="showDishBoard">
          <span>当前共选择了{{ cartArr.length }}道菜</span>
          <!-- <span>一道主食</span> -->
        </div>
        <div 
          class="cart-right-text"
          @click="toSummary">
          <span>查看总结</span>
        </div>
      </div>
      <!-- cart detail使用绝对定位，子绝父相 -->
      <div 
        class="cart-detail"
        :style="dishBoardShowIf?dishBoardShowStyle:dishBoardHiddenStyle"
      >
        <!-- 这存在的样式问题：
          1、要使用内部盒子将银色盒子撑高，并且在300px时达到最大值，
          内部内容开始scroll
          2、显示的层级问题，面板要显示在整个bar的底层
           -->

        <!-- <div style="width: 200px; height: 200px; background: red;">
          
        12123123123
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Sidebar, SidebarItem, List, PullRefresh, Toast } from "vant";
import bottomBar from "../../components/BottomBar";
import recommendItem from "../../components/recommend/RecommendItem";
export default {
  name: "feast",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      // 左侧导航栏部分
      activeKey: 0,
      firstClassify: ["主食", "素菜", "肉类", "海鲜", "汤类", "小吃", "甜品",],

      // 下拉list部分
      list: [],
      loading: false,
      finished: false,
      refreshing: false,

      // 传入准备数据
      dataObj: {
        name: "鱼香肉丝怎么做才能做得比包书言做出来的鱼香肉丝一样好吃",
        imgUrl: require('../../assets/test1.jpg'),
        viewTimes: 10000,
        thumbTimes: 100,
      },

      // 购物车所需数组
      cartArr: ["鱼香肉丝"],
      // 购物车面板是否显示
      dishBoardShowIf: false,
      // 购物车面板所需样式
      dishBoardShowStyle: {
        height: "500px",
      },
      dishBoardHiddenStyle: {
        height: "0",
        visibility: "hidden",
      },
    };
  },
  methods: {
    // sidebar改变时触发的事件
    onSidebarChange(index) {
      console.log(index);
      console.log("正在加载"+this.firstClassify[index]);
      // 将右侧内容清空
      this.list = [];
      // 重置loading状态并将其显示
      this.onRefresh();
      // // 调用接口获取对应数据
      // let _this = this;
      // _this.$http.post(_this.$api.testApi, {
      //   isJson: true,
      //   params: params,
      // }).then(res=>{
      //   if(res.code == 200){
      //     console.log(res.data.info);
      //     // 将获得的数组拼接到现存的数组之后
      //     _this.list.concat(res.data.info.rows);
      //   }
      // });
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
          this.list.push(this.dataObj);
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

    // 查看菜品面板
    showDishBoard() {
      this.dishBoardShowIf = !this.dishBoardShowIf;
    },

    // 查看总结
    toSummary() {
      Toast("查看菜品总结");
    },
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name]: CellGroup,
    [Sidebar.name]: Sidebar,
    [SidebarItem.name]: SidebarItem,
    [List.name]: List,
    [PullRefresh.name]: PullRefresh,
    bottomBar,
    recommendItem,
  }
};
</script>
<style lang="scss" scoped>
.feast-content{
  // 设置margin bottom防止被bottom bar遮住
  margin-bottom: 55px;
  .side-bar{
    width: 80px;
    height: 100vh;
    // fixed定位
    position: fixed;
    left: 0;
    top: 0;
    box-sizing: border-box;
    // border-right: 1px #999 solid;
  }
  .main-content{
    width: calc(100vw - 80px);
    min-height: 100vh;
    // background-color: aqua;
    margin-left: 80px; // 将左侧的导航栏位置空出来
  }
  // 购物车部分
  .shopping-cart{
    width: 340px;
    height: 56px;
    border-radius: 28px;
    background: #666;
    // fixed固定位置
    position: fixed;
    bottom: 68px;
    left: calc((100vw - 340px) / 2);
    z-index: 1000;
    .cart-text{
      display: flex;
      align-items: center;
      width: 100%;
      height: 100%;
      .cart-left-text{
        width: 70%;
        height: 100%;
        background-color: transparent;
        border-radius: 28px 0 0 28px;
        // 内部span垂直水平居中
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: 16px;
          font-weight: 600;
          color: #fafafa;
        }
      }
      .cart-right-text{
        width: 30%;
        height: 100%;
        background-color: #35D6B6;
        border-radius: 0 28px 28px 0;
        // 内部span垂直水平居中
        display: flex;
        justify-content: center;
        align-items: center;
        span{
          font-size: 16px;
          font-weight: 600;
          color: #fafafa;
        }
      }
    }
    // 弹出列表部分
    .cart-detail{
      width: 280px;
      min-height: 0;
      max-height: 300px;
      background-color: silver; // 怀念那个拯救我的银衣少女
      // 定位位置
      position: absolute;
      bottom: 56px;
      left: calc((100% - 280px) / 2);
      // 设置过渡时间
      transition: all 0.6s ease-in-out;
      z-index: 100!important;
    }
  }
}
</style>
<style lang="scss">

.feast-content{
  // 重置sidebar左侧的样式
  .van-sidebar-item--select::before{
    background-color: #35D6B6 !important;
  }
}
</style>