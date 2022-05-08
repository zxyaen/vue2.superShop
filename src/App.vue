<template>
  <div id="app">
    <!-- router-view使路由页面渲染到这里 -->
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <main-tar-bar></main-tar-bar>
  </div>
</template>

<script>
  // 在全局使用MainTabBar
  import MainTarBar from 'components/contents/maintarbar/MainTarBar'
  export default {
    name: 'app',
    components: {
        MainTarBar
    }
  }
</script>

<style>
  /*引入css*/
  @import "assets/css/base.css";
</style>
