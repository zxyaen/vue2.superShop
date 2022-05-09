<template>
  <div>
    <div class="shopName">
      <img src="" alt="" />
      <p>{{ shopInfo.name }}</p>
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
            <span class="bad" :class="{ 'better': item.isBetter }">{{
              item.score
            }}</span>
            <span class="isBetter" :class="{ 'score': item.isBetter }">
              {{ item.isBetter ? "高" : "低" }}</span
            >
          </li>
        </ul>
      </div>
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
}
.left-sell div {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
}
.left-sell div p {
  margin-bottom: 5px;
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
</style>
