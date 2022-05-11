<template>
  <div ref="wrapper">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";

export default {
  name: "scroller",
  data() {
    return {
      scroller: {
        type: Object,
        default() {
          return {};
        },
      },
    };
  },
  //接收父组件来的probeType（0，1不侦测实时位置，2在手指滚动过程中被侦测，手指离开后惯性不侦测，3只要滚动，都侦测）
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  mounted() {
    // 不可以在created上创建，要在组件渲染完之后，再挂载
    // 将模版根组件挂载到滚动组件上
    // 默认情况下scroller不可以实时监听滚动位置，将获取到的probeType存入data
    // 1.创建scroller对象
    this.scroller = new BScroll(this.$refs.wrapper, {
      //动态决定调用组件时需不需要对滚动进行侦听
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
      click: true,
    });
    // 2.监听滚动事件确定滚动位置
    if (this.probeType === 2 || this.probeType === 3) {
      this.scroller.on("scroll", (position) => {
        // 通过emit调用父组件身上的方法
        this.$emit("scroll", position);
      });
    }
    // 3.监听上拉事件
    if (this.pullUpLoad) {
      this.scroller.on("pullingUp", () => {
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    //   回到顶部
    scrollTo(x, y, time = 300) {
      // 调用data中scroller数据，触发scrollTo事件
      this.scroller.scrollTo(x, y, time);
    },
    // 上拉完成
    finishPullUp() {
      this.scroll.finishPullUp();
    },
    // 封装refresh方法
    refresh() {
      this.scroller.refresh();
      console.log("---");
    },
  },
};
</script>

<style scoped></style>
