<template>
  <div>
    <p class="title">{{ goods.title }}</p>
    <div>
      <ul class="priceStyle">
        <li>¥{{ goods.realPrice }}</li>
        <li>¥{{ goods.newPrice }}</li>
        <li>{{ goods.discount }}</li>
      </ul>
    </div>
    <div>
      <ul class="columns">
        <li v-for="item in goods.columns">{{ item }}</li>
      </ul>
    </div>
    <div>
      <ul  class="services">
        <li v-for="item in goods.services">
          <img v-if="item.icon" :src="item.icon" alt="" />
          {{ item.name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "childrenBaseInfo",
  data() {
    return {};
  },
  props: ["goods"],
};
</script>

<style scoped>
li {
  margin-left: 1em;
  list-style: none;
}

.title {
  padding: 10px;
  line-height: 1.5em;
  font-size: 1.2em;
}
.priceStyle {
  display: flex;
  margin-left: -15px;
  align-items: flex-end;
}

.priceStyle li:nth-child(1) {
  font-size: 1.5em;
  color: rgb(249, 134, 153);
}
.priceStyle li:nth-child(2) {
  height: 1.2em;
  text-decoration: line-through;
}
.priceStyle li:nth-child(3) {
  padding: 0.3em 0.5em;
  background-color: rgb(251, 102, 127);
  color: aliceblue;
  border-radius: 40%;
  margin-bottom: 0.4em;
}
.columns {
  display: flex;
  justify-content: space-between;
  padding: 0.8em 0.6em;
}
.columns > li {
  margin: 0;
}
.services {
  display: flex;
  justify-content: space-between;
  padding: 2em 0.5em;
    border-top: 1px solid rgb(222, 217, 217);
    border-bottom: 1px solid rgb(222, 217, 217);
}
.services li{
    margin-left: 5px;
}
.services li:nth-child(1){
    margin-left: 0;
}
.services li img{
    width: 0.7em;
}
</style>
