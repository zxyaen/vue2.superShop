<template>
  <swiper class="home-swiper">
    <swiper-item v-for="item in cbanners" :key="item.image">
      <a :href="item.link">
        <img :src="item.image" alt="" @load="swiperLoad" />
      </a>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";
export default {
  name: "HomeSwiper",
  props: {
    // 用于接收父组件传来的轮播图数据数组
    cbanners: {
      type: Array,
      default() {
        return [];
      },
    },
    data() {
      return {
        isLoad: false,
      };
    },
  },
  components: {
    Swiper,
    SwiperItem,
  },
  methods: {
    swiperLoad() {
      if (!this.isLoad) {
        this.$emit("swiperLoad");
        this.isLoad=true
      }
    },
  },
};
</script>

<style scoped></style>
