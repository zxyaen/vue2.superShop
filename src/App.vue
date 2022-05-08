<template>
  <div id="app">
    <!-- router-view使路由页面渲染到这里 -->
    <keep-alive exclude="Detail">
    <router-view></router-view>
    </keep-alive>
    <main-tar-bar v-if="showTabBar"></main-tar-bar>
  </div>
</template>

<script>
  // 在全局使用MainTabBar
  import MainTarBar from 'components/contents/maintarbar/MainTarBar'
  export default {
    name: 'app',
    data(){
      return{
        showTabBar:true
      }
    },
    methods:{
      // 使子组件动态改变tabbar是否显示
      changeTabBar(){
        this.$bus.$on('')
      }
    },
    components: {
        MainTarBar
    }
  }
</script>

<style>
  /*引入css*/
  @import "assets/css/base.css";
</style>
