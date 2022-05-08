<template>
    <swiper class="itemImg">
      <swiper-item v-for="item in topImages">
        <img :src="item" alt="" />
      </swiper-item>
    </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name: "childrenSwiper",
  components: {
    Swiper,
    SwiperItem,
  },
  props: ["topImages"],
};
</script>

<style scoped>
.itemImg {
  height: 350px;
}
</style>
