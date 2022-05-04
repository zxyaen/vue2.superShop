<template>
<!-- 顶部导航栏 -->
    <div class="nar-bar">
      <!-- 预留左右插槽，方便后期添加内容 -->
      <div class="left"><slot name="left"></slot></div>
      <div class="center"><slot name="center"></slot></div>
      <div class="right"><slot name="right"></slot></div>
  
    </div>
</template>

<script>
    export default {
        name: "NavBar"
    }
</script>

<style scoped>
/* 对插槽进行布局 */
  .nar-bar {
    display: flex;
    line-height: 44px;
    text-align: center;
    box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
  }

  .left, .right {
    width: 40px;
  }

  .center {
    flex: 1;
  }

</style>
