<template>
  <div>
    <bottom-bar :type="'recommend'"></bottom-bar>
    <div class="recommend clearfix">
      <div class="search-container">
        <div 
          class="search-content"
          @click="toUrl()"
        >
            <van-icon name="search" size="16"></van-icon>
            <span>大家都在搜鱼香肉丝</span>
          <div></div>
        </div>
      </div>
      <div class="swipe">
        <!-- 轮播图以及页面懒加载 -->
        <van-swipe 
          :autoplay="3000"
          class="swipe"
        >
          <van-swipe-item 
            v-for="(image, index) in images" 
            :key="index"
            class="swipe_wrap"
          >
            <img 
              v-lazy="image" 
              class="swipeItem"
            />
          </van-swipe-item>
        </van-swipe>
      </div>
      <div class="recommend-item-content">
        <!-- 改为使用list列表组件进行展示，另外结合下拉刷新进行使用 -->
        <!-- <recommend-item 
          v-for="i in 10" 
          :key="i" 
          :dataObj="dataObj"
        >
        </recommend-item> -->
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
  </div>
</template>

<script>
import { Cell, CellGroup, Swipe, SwipeItem, Lazyload, Icon, List, PullRefresh } from "vant";
import bottomBar from "../../components/BottomBar";
import recommendItem from "../../components/recommend/RecommendItem";
export default {
  name: "recommend",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",


      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],

      dataObj: {
        name: "鱼香肉丝怎么做才能做得比包书言做出来的鱼香肉丝一样好吃",
        imgUrl: require('../../assets/test1.jpg'),
        viewTimes: 10000,
        thumbTimes: 100,
      },

      // 下拉list部分
      list: [],
      loading: false,
      finished: false,
      refreshing: false,
    };
  },
  methods:{
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
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name] :CellGroup,
    [Swipe.name]:Swipe, 
    [SwipeItem.name]:SwipeItem, 
    [Lazyload.name]:Lazyload, 
    [Icon.name]:Icon, 
    [List.name]:List, 
    [PullRefresh.name]: PullRefresh, 
    bottomBar,
    recommendItem,
  }
};
</script>
<style lang="scss" scoped>
// vant轮播图样式覆盖
// .my-swipe .van-swipe-item {
//   color: #fff;
//   font-size: 20px;
//   line-height: 150px;
//   text-align: center;
//   background-color: #39a9ed;
// }
.recommend{
  margin-bottom: 55px;
  // 搜索框部分样式
  .search-container{
    height: 45px;
    width: 100%;
    background: linear-gradient(149deg, #1DEFCA 0%, #39ed66 100%);
    display: flex;
    align-items: center;
    justify-content: center;
    .search-content{
      width: 350px;
      height: 30px;
      background: #FAFAFA;
      border-radius: 15px;
      opacity: 0.79;
      display: flex;
      align-items: center;
      justify-content: center;
      span{
        font-size: 12px;
        line-height: 12px;
      }
    }
  }
  // 轮播图部分样式 
  .swipe {
    width: 350px;
    height: 200px;
    border-radius: 8px;
    margin: 7px auto 0;
    .swipe_wrap {
      width: 100%;
      height: inherit;
      .swipeItem {
        width: 100%;
        height: inherit;
        box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
        border-radius: 8px;
      }
    }
  }
}
</style>
<style lang="scss">
// vant轮播图样式覆盖
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
  background-color: #39a9ed;
  overflow: hidden;
}
</style>
