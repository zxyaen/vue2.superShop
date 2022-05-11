<template>
  <div id="detail">
    <children-detail class="navBar" @titleClick="titleClick" ref="nav" />
    <scroller
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
    >
      <children-swiper :topImages="topImages" />
      <children-base-info :goods="goods" />
      <shop-info :shopInfo="shopInfo" />
      <detail-info
        :detailInfo="detailInfo"
        :desc="desc"
        @imgLoad="goodsImgLoad"
      />
      <!-- 商品参数部分 -->
      <detail-params-info :paramInfo="paramInfo" ref="param" />
      <!-- 商品评论部分 -->
      <detail-comment-info :commentInfo="commentInfo" ref="comment" />
      <goods-list :cgoods="recommendInfo" ref="recommend" />
    </scroller>
    <back-top v-show="isShowBackTop" @click.native="backTop" />
    <bottom-bar @addCart="addCart"/>
  </div>
</template>

<script>
// 导入子组件
import ChildrenDetail from "./childrenComps/childrenDetail.vue";
import childrenBaseInfo from "./childrenComps/childrenBaseInfo.vue";
import ShopInfo from "./childrenComps/shopInfo.vue";
import DetailInfo from "./childrenComps/detailInfo.vue";
import DetailCommentInfo from "./childrenComps/DetailCommentInfo.vue";
import DetailParamsInfo from "./childrenComps/detailParamsInfo.vue";
import BottomBar from "./childrenComps/bottomBar.vue";

// 导入轮播组件
import childrenSwiper from "./childrenComps/childrenSwiper";
// 导入滚动组件
import Scroller from "components/common/scroller/Scroller";
// 导入返回顶部组件
import BackTop from "../../components/contents/backTop/BackTop.vue";
// 组件复用导入goodslist
import GoodsList from "components/contents/good/GoodsList";

// 导入请求数据模块
import {
  getDetailData,
  Goods,
  shopInfo,
  Param,
  getRecommend,
} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: null,
      shopInfo: null,
      detailInfo: null,
      desc: null,
      commentInfo: null,
      paramInfo: null,
      recommendInfo: null,
      themeTopY: null,
      isShowBackTop: false,
      positionY: null,
      product:null,
    };
  },
  components: {
    ChildrenDetail,
    childrenSwiper,
    childrenBaseInfo,
    Scroller,
    ShopInfo,
    DetailInfo,
    DetailCommentInfo,
    DetailParamsInfo,
    BottomBar,
    BackTop,
    GoodsList,
  },
  created() {
    // 1.保存传入的数据
    this.id = this.$route.params.id;
    // 2.请求detailData数据
    getDetailData(this.id).then((res) => {
      // console.log(res);
      // 分离数据
      // 1.topImages轮播图获取
      const data = res.result;
      this.topImages = data.itemInfo.topImages;
      // 2.商品信息获取
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      // 3.店铺信息获取
      this.shopInfo = new shopInfo(data.shopInfo);
      // 4.商品详情,简介获取
      this.detailInfo = data.detailInfo.detailImage[0].list;
      this.desc = data.detailInfo.desc;
      //5.获取参数信息
      this.paramInfo = new Param(data.itemParams.info, data.itemParams.rule);
      //6.获取评论信息
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list;
      }
    });

    // 7.获取推荐商品数据
    getRecommend().then((res) => {
      this.recommendInfo = res.data.list;
    });
  },
  methods: {
    // 点击跳转到相应位置
    goodsImgLoad() {
      this.$refs.scroll.scroller.refresh();
      this.themeTopY = [];
      this.themeTopY.push(0);
      this.themeTopY.push(this.$refs.param.$el.offsetTop);
      this.themeTopY.push(this.$refs.comment.$el.offsetTop);
      this.themeTopY.push(this.$refs.recommend.$el.offsetTop);
      // this.themeTopY.push(Number.MAX_VALUE);
    },
    titleClick(index) {
      // console.log("offset为"+this.themeTopY[index]);
      // console.log(this.$refs.param.$el.offsetTop);
      this.$refs.scroll.scrollTo(0, this.themeTopY[index], 200);
    },

    //返回顶部是否显示
    contentScroll(position) {
      this.isShowBackTop = -position.y > 500;
      const positionY = -position.y;
      let _lenth = this.themeTopY.length;
      for (let i = 0; i < _lenth - 1; i++) {
        if (
          this.currentIndex !== i &&
          (positionY >= this.themeTopY[i] && positionY < this.themeTopY[i + 1])
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    // 返回顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0);
    },
    //加入购物车
    addCart() {
      // 获取购物车需要展示的信息
      const product = {};
      product.image = this.topImages[0];
      product.title = this.goods.title;
      product.desc = this.desc;
      product.price = this.goods.realPrice;
      product.iid = this.id;

      //将商品添加到购物车里
      this.$store.commit("addCart", product);
    },
  },
};
</script>

<style scoped>
.navBar {
  position: relative;
  background-color: #fff;
  z-index: 9;
}
#detail {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
}
.content {
  position: absolute;
  /* top: 44px;
  height: calc(100% - 94px); */
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>
