<template>
  <div class="home-recommend">
    <div class="home-recommend-item" v-for="item in filterT4(crecommends)" :key="item.url">
      <a :href="item.link">
        <img :src="item.image" alt="">
      </a>
      <p>{{item.title}}</p>

    </div>
  </div>


</template>

<script>
    export default {
        name: "HomeRecommend",
        props:{
            crecommends:{
                type:Array,
                default() {
                    return []
                }
            }
        },
        methods:{
            filterT4() {
                return this.crecommends.slice(0,4)
            }
        }
    }
</script>

<style scoped>
  .home-recommend{
    display: flex;
    width: 100%;
    text-align: center;
    padding: 5px 0 10px 0;
    /* border-bottom: 10px solid #eee; */
    background-color: rgb(249, 244, 249);
  }

  .home-recommend-item{
    flex: 1;
    
  }

  .home-recommend-item img{
    width: 65px;
    height: 65px;
    border-radius: 100%;
    margin-bottom: 8px; 
  }
</style>
