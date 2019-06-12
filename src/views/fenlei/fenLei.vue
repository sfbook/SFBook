<template>
  <div id="page" style="margin-top:0.7rem;overflow:hidden;">
    <div class="Content_Frame" style="overflow:hidden;">
      <ul class="fenlei">
        <li>
          <a @click="toDetails('人气')">
            <img src="//rs.sfacg.com/web/m/images/phb_01.png">
          </a>
          <br>
        </li>
        <li>
          <a @click="toDetails('畅销')">
            <img src="//rs.sfacg.com/web/m/images/phb_02.png">
          </a>
          <br>
        </li>
        <li>
          <a @click="toDetails('新书')">
            <img src="//rs.sfacg.com/web/m/images/phb_03.png">
          </a>
          <br>
        </li>
        <li>
          <a @click="toDetails('日轻')">
            <img src="//rs.sfacg.com/web/m/images/phb_04.png">
          </a>
          <br>
        </li>
        <li>
          <a @click="toDetails('收藏')">
            <img src="//rs.sfacg.com/web/m/images/phb_05.png">
          </a>
          <br>
        </li>
        <li>
          <a @click="toDetails('月票')">
            <img src="//rs.sfacg.com/web/m/images/phb_06.png">
          </a>
          <br>
        </li>
        <li>
          <a @click="toDetails('魔幻')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_21.jpg">
          </a>
          <br>魔幻
        </li>
        <li>
          <a @click="toDetails('玄幻')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_22.jpg">
          </a>
          <br>玄幻
        </li>
        <li>
          <a @click="toDetails('古风')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_23.jpg">
          </a>
          <br>古风
        </li>
        <li>
          <a @click="toDetails('科幻')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_24.jpg">
          </a>
          <br>科幻
        </li>
        <li>
          <a @click="toDetails('校园')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_25.jpg">
          </a>
          <br>校园
        </li>
        <li>
          <a @click="toDetails('都市')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_26.jpg">
          </a>
          <br>都市
        </li>
        <li>
          <a @click="toDetails('游戏')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_27.jpg">
          </a>
          <br>游戏
        </li>
        <li>
          <a @click="toDetails('同人')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_28.jpg">
          </a>
          <br>同人
        </li>
        <li>
          <a @click="toDetails('悬疑')">
            <img src="//rs.sfacg.com/web/m/images/fenlei_29.jpg">
          </a>
          <br>悬疑
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    toDetails(data) {
      this.$router.push({
        path: "/xinshu",
        query: { name: data }
      });
    },
  }
};
</script>

<style lang="scss" scoped>
* {
  padding: 0;
  margin: 0;
}
body {
  font-family: Helvetica;
  font-size: 0.12rem;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
#page {
  width: 100%;
  margin: 0 auto;
}
.Content_Frame {
  overflow: hidden;
  padding: 0.1rem;
}
a {
  text-decoration: none;
}
a:-webkit-any-link {
  color: -webkit-link;
  cursor: pointer;
  text-decoration: underline;
}
ul {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-inline-start: 40px;
  padding: 0;
  margin: 0;
  border: medium none;
  list-style-type: none;
  text-overflow: ellipsis;
}
li {
  display: list-item;
  text-align: -webkit-match-parent;
}
.fenlei {
  overflow: hidden;
  li {
    width: 33.3%;
    text-align: center;
    float: left;
    font-size: 0.14rem;
    img {
      margin: 0.1rem;
      width: 90px;
    }
  }
}
</style>
