<template>
  <div class="box">
    <mt-swipe :auto="4000">
      <mt-swipe-item v-for="(item,i)  in this.imgLis" :key="i">
        <img :src="item.book_cover" alt>
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<style lang="scss" scoped>
.box {
  width: 100%;
  height: 134.762px;
  padding-top: 80px;
}
.mint-swipe-indicators {
  .is-active {
    background: #ff6600 !important;
  }
}
.mint-swipe-item {
  img {
    height: 100%;
    width: 100%;
  }
}
</style>
<script>
import { constants } from "crypto";
const axios = require("axios");
export default {
  data() {
    return {
      imgLis: []
    };
  },
  created() {
    const that = this;
    // console.log(that)
    async function getImg() {
      try {
        //发送请求获取推荐的小说的数据，把数据储存到imgLis中 然后进行渲染
        const response = await axios.get("https://www.apiopen.top/novelApi");
        that.imgLis = response.data.data;
      } catch (error) {
        console.error(error);
      }
    }
    getImg();
  }
};
</script>
