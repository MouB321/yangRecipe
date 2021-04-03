<template>
  <div>
    <bottom-bar :type="'recommend'"></bottom-bar>
    <div class="top-bar">
      <div class="search-content">

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
import { Cell, CellGroup, Swipe, SwipeItem, Lazyload } from "vant";
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
  components: {
    [Cell.name]: Cell,
    [CellGroup.name] :CellGroup,
    [Swipe.name]:Swipe, 
    [SwipeItem.name]:SwipeItem, 
    [Lazyload.name]:Lazyload, 
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
  .swipe {
    width: 100%;
    height: 200px;
    border-radius: 16px;
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
