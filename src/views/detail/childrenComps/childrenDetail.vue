<template>
  <div>
    <nav-bar>
      <div slot="left" @click="back">
          <img src="~assets/images/common/back.svg" alt="" class="img" >
      </div>
      <div slot="center" class="detailNav">
        <div
          v-for="(item, index) in titles"
          :class="{ active: index === currentIndex }"
          @click="changeIndex(index)"
        >
          {{ item }}
        </div>
      </div>
    </nav-bar>
  </div>
</template>

<script> 
import NavBar from "components/common/navbar/NavBar";

export default {
  name: "childrenDetail",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  components: {
    NavBar,
  },
  methods: {
      changeIndex(index){
          this.currentIndex=index
      },
      back(){
          this.$router.back()
      }
  },
};
</script>

<style scoped>
.detailNav {
  display: flex;
  justify-content: space-around;
}
.active {
  color: pink;
}
.img{
margin-top: 10px;
}
</style>
