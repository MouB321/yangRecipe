<template>
  <div>
    <bottom-bar :type="'recommend'"></bottom-bar>
    <div class="top-bar clearfix">
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
    </div>
  </div>
</template>

<script>
import { Cell, CellGroup, Swipe, SwipeItem, Lazyload, Icon } from "vant";
import bottomBar from "../../components/BottomBar";
export default {
  name: "recommend",
  data() {
    return {
      msg: "Welcome to Your Vue.js App",


      images: [
        'https://img01.yzcdn.cn/vant/apple-1.jpg',
        'https://img01.yzcdn.cn/vant/apple-2.jpg',
      ],
    };
  },
  methods:{
    toUrl(){
      this.$router.push({
        name: "search",
      });
    },
  },
  components: {
    [Cell.name]: Cell,
    [CellGroup.name] :CellGroup,
    [Swipe.name]:Swipe, 
    [SwipeItem.name]:SwipeItem, 
    [Lazyload.name]:Lazyload, 
    [Icon.name]:Icon, 
    bottomBar,
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
    width: 98%;
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
        border-radius: 16px;
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
