<template>
  <div>
    <children-detail />
    <children-swiper :topImages="topImages" />
    <children-base-info  :goods="goods" />
  </div>
</template>

<script>
// 导入子组件
import ChildrenDetail from "./childrenComps/childrenDetail.vue";
import childrenBaseInfo from "./childrenComps/childrenBaseInfo.vue";
// 导入轮播组件
import childrenSwiper from "./childrenComps/childrenSwiper";

// 导入请求数据模块
import { getDetailData, Goods } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goods: null,
    };
  },
  components: {
    ChildrenDetail,
    childrenSwiper,
    childrenBaseInfo,
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
    });
  },
};
</script>

<style></style>
