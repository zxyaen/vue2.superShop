<template>
  <div v-if="shopInfo">
    <div class="shopName">
      <img :src="shopInfo.logo" alt="" />
      <span>{{ shopInfo.name }}</span>
    </div>
    <div class="shopInfo-bottom">
      <div class="left-sell">
        <div>
          <p>{{ shopInfo.allSell }}</p>
          <span>总销量</span>
        </div>
        <div>
          <p>{{ shopInfo.allGoods }}</p>
          <span>全部宝贝</span>
        </div>
      </div>
      <div class="right-sell">
        <ul>
          <li v-for="item in shopInfo.score" class="shopService">
            <span>{{ item.name }}</span>
            <span class="bad" :class="{ better: item.isBetter }">{{
              item.score
            }}</span>
            <span class="isBetter" :class="{ score: item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}</span
            >
          </li>
        </ul>
      </div>
    </div>
    <div class="goShop">
      <span>
        进店逛逛
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "shopInfo",
  data() {
    return {};
  },
  props: ["shopInfo"],
};
</script>

<style scoped>
li {
  list-style: none;
  margin: 0;
}
.shopName {
  margin: 1.5em 0.5em;
}
.shopName img {
  width: 40px;
  height: 40px;
  margin-right: 10px;
  vertical-align: middle;
}
.shopName span {
  vertical-align: middle;
}
.shopInfo-bottom {
  display: flex;
  justify-content: space-between;
  padding: 0 0.5em;
}
.shopService {
  margin: 0.4em 0;
}
.shopService span {
  margin-right: 5px;
}
.left-sell {
  display: flex;
  width: 50%;
  justify-content: space-around;
}
.left-sell div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  
}
.left-sell div p {
  margin-bottom: 10px;
}
.right-sell {
  border-left: 1px solid rgb(218, 215, 215);
  padding-left: 15px;
}
.right-sell span:nth-child(3) {
  float: right;
  display: block;
  height: 20px;
  width: 20px;
  color: aliceblue;
  line-height: 20px;
  text-align: center;
  border-radius: 10%;
}
.isBetter {
  background-color: rgb(47, 175, 28);
}
.score {
  background-color: rgb(236, 17, 17);
}
.better {
  color: red !important;
}
.bad {
  color: green;
}
.goShop {
  width: 100%;
  text-align: center;
  margin-top: 10px;
}
.goShop span{
    display: inline-block;
    width: 100px;
    height: 30px;
    line-height: 30px;
    border: 1px solid rgb(160, 157, 157);
    border-radius: 10%;
}
</style>
