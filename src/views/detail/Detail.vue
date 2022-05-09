<template>
  <div id="detail">
    <children-detail class="navBar"/>
    <scroller class="content">
      <children-swiper :topImages="topImages" />
      <children-base-info :goods="goods" />
      <shop-info :shopInfo="shopInfo"/>
    </scroller>
  </div>
</template>

<script>
// 导入子组件
import ChildrenDetail from "./childrenComps/childrenDetail.vue";
import childrenBaseInfo from "./childrenComps/childrenBaseInfo.vue";
import ShopInfo from "./childrenComps/shopInfo.vue";
// 导入轮播组件
import childrenSwiper from "./childrenComps/childrenSwiper";
// 导入滚动组件
import Scroller from "components/common/scroller/Scroller";

// 导入请求数据模块
import { getDetailData, Goods ,shopInfo} from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: null,
      shopInfo:null,
    };
  },
  components: {
    ChildrenDetail,
    childrenSwiper,
    childrenBaseInfo,
    Scroller,
    ShopInfo
},
  created() {
    // 1.保存传入的数据
    this.id = this.$route.params.id;
    // 2.请求detailData数据
    getDetailData(this.id).then((res) => {
      console.log(res.result);
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
      this.shopInfo=new shopInfo(
        data.shopInfo
      )
    });
  },
};
</script>

<style scoped>
.navBar{
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
  top: 44px;
  height: calc(100% - 44px)
}
</style>
