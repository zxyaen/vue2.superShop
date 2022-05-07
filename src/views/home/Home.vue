<template>
  <div id="home">
    <!-- 导航部分 -->
    <nav-bar class="home-nav-bar"><div slot="center">购物街</div></nav-bar>

    <!-- ref 是用于定位元素和取到组件的内容，:是绑定属性 @是绑定方法-->
    <!--  -->
    <scroller
      class="home-scroller"
      ref="scroller"
      :probeType="3"
      @scroll="getPosition"
      :pullUpLoad="true"
      @pullingUp="pullMore"
    >
      <!-- 轮播部分 -->
      <home-swiper :cbanners="banners" />
      <!-- 推荐部分 -->
      <home-recommend :crecommends="recommends" />
      <!-- 本周流行大图 -->
      <home-feature-view />
      <!-- 三个小版块，通过点击决定触发那个goods-list -->
      <tab-control
        class="home-tab-control"
        :ctitles="['流行', '新款', '精选']"
        @tabClick="pTabClick"
      />
      <!-- 商品渲染列表，使用showGoods对传入数据进行封装 -->
      <goods-list :cgoods="showGoods" />
    </scroller>
    <!-- 回到顶部 -->
    <back-top @click.native="backTopClick" v-show="isShowBackTop" />
  </div>
</template>

<script>
// 公共组件
import NavBar from "components/common/navbar/NavBar";
import Scroller from "components/common/scroller/Scroller";
import BackTop from "components/contents/backTop/BackTop";

// 主页组件
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommend from "./childComps/HomeRecommend";
import GoodsList from "components/contents/good/GoodsList";
import HomeFeatureView from "./childComps/HomeFeatureView";
import TabControl from "components/contents/tabControl/TabControl";

// 方法
import { getHomeMultiData, getGoodsData } from "network/home";

export default {
  name: "Home",
  components: {
    NavBar,
    HomeSwiper,
    HomeRecommend,
    HomeFeatureView,
    TabControl,
    GoodsList,
    Scroller,
    BackTop,
  },
  data() {
    return {
      // 用于保存后台请求的数据
      banners: [],
      recommends: [],
      goods: {
        // 设计数据结构，分别保存流行，新款，精选的数据
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      isShowBackTop: false,
    };
  },

  // 在主页创建时，发送网络请求，请求数据
  created() {
    // 请求轮播和展示数据
    this.getHomeData();
    // 请求商品数据
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  computed: {
    // 决定将哪个展示数据传给goods渲染组件
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  methods: {
    /**
     * 事件监听相关方法
     */
    // 回到顶部
    backTopClick() {
      // 通过$refs拿到组件中的scroller对象
      this.$refs.scroller.scrollTo(0, 0, 500);
    },

    // 获取对位置的实时监测，决定是否要回到顶部
    getPosition(position) {
      // 如果向下滚动超过300px，则显示回到顶部按钮
      this.isShowBackTop = -position.y > 300;
      // console.log(-position.y);
    },
    // 上拉加载更多事件
    pullMore(){
      this.getHomeGoodsData(this.currentType)
      console.log("上拉加载更多");
    },

    // 对选中的流行-新款-精选标签的currentType进行切换
    pTabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },

    /**
     * 网络请求相关方法
     */
    // 请求轮播，展示数据,并进行包装
    getHomeData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    // 请求商品数据,并进行包装
    getHomeGoodsData(type) {
      let page = this.goods[type].page + 1;
      getGoodsData(type, page).then((res) => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
        // 清除pullingUp事件，使他下一次仍可以正常触发
        this.$refs.scroller.scroller.finishPullUp()
      });
    },
  },
};
</script>

<style scoped>
#home {
  /* padding-top: 44px; */
  /* vh  viewport height */
  height: 100vh;
  position: relative;
}

.home-nav-bar {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;
}

.home-tab-control {
  /*两个要混合使用*/
  position: sticky;
  top: 43px; /*顶部navbar的高度*/
  z-index: 9;
}

.home-scroller {
  /*此处hidden导致sticky不起作用！！！！！！！*/
  overflow: hidden;
  position: absolute;
  bottom: 49px;
  right: 0;
  left: 0;
  height: calc(100% - 93px);
}
</style>
