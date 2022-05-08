<template>
  <div>
    <children-detail/>
    <children-swiper :topImages="topImages"/>
  </div>
</template>

<script>
// 导入子组件
import ChildrenDetail from "./childrenComps/childrenDetail.vue";
// 导入轮播组件
import childrenSwiper from "./childrenComps/childrenSwiper";

// 导入请求数据模块
import { getDetailData } from "network/detail";

export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages:[],
    };
  },
  components: {
    ChildrenDetail,
    childrenSwiper,
  },
  created() {
    // 1.保存传入的数据
    this.id = this.$route.params.id;
    // 2.请求detailData数据
    getDetailData(this.id).then((res)=>{
      // 分离数据
      // 1.topImages
      this.topImages=res.result.itemInfo.topImages
    })
  },

};
</script>

<style></style>
