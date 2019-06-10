<template>
  <div class="book_bk_qs1 book_top">
    <!--导航菜单-->

    <ul class="book_top_menu">
      <li>
        <img src="//rs.sfacg.com/web/m/images/logo.gif" width="105">
      </li>
      <li>
        <router-link to="/sheets/">
          <span class="iconfont icon-storage"></span>
        </router-link>
        <router-link to="/my/">
          <span class="iconfont icon-user"></span>
        </router-link>
        <router-link to="/search">
          <span class="iconfont icon-Magnifier_px"></span>
        </router-link>
      </li>
    </ul>
    <div style="text-align:center;">
      <ul class="book_top_Nav">
        <li :class="{
          'book_top_Nav_up':act[index]
          }" v-for="(item,index) in title" :key="index">
          <router-link :to="url[index]">{{item}}</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      top:[],
      title: ["推荐", "VIP", "更新", "书评", "分类"],
      url: ["/", "/vip/", "/lateList/", "/cmt/", "/category/"],
      act: [true, false, false, false, false]
    };
  },
  created() {
    for (var i = 0; i < this.url.length; i++) {
      this.act[i] = false;
    }
    this.act[this.url.indexOf(this.$route.path)] = true;
  }
};
</script>

<style lang="scss" scoped>
@import url(./iconfont/iconfont.css);
a {
  text-decoration: none;
}
.book_bk_qs1 {
  border-style: solid;
  border-width: 1px 0px;
  -webkit-border-image: url(//rs.sfacg.com/web/m/images/1px_bk_qs2.png) 2 0
    stretch;
  background: #fff;
}
.book_top {
  position: fixed;
  z-index: 90;
  width: 100%;
  top: 0;
  left: 0;
  color: #666;
  border-top-width: 0px;
}
.book_top_menu {
  margin: 0.05rem 0.05rem 0 0.05rem;
  height: 0.21rem;
  display: -webkit-box;
}
ul {
  padding: 0px;
  margin: 0;
  border: medium none;
  list-style-type: none;
  text-overflow: ellipsis;
}
.book_top_menu li {
  display: -webkit-box;
  width: 50%;
  color: #f90;
}
.book_top_menu li:last-child {
  -webkit-box-pack: end;
  -webkit-box-align: center;
}
.book_top_menu li span {
  font-size: 0.16rem;
  padding: 0 10px;
}
[class^="icon-"],
[class*=" icon-"] {
  font-family: "Goodicon";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.book_top_Nav {
  font-size: 0.14rem;
  display: inline-block;
}
.book_top_Nav li {
  display: inline-block;
  line-height: 0.4rem;
  text-align: center;
  padding: 0 0.1rem;
  border-bottom: 3px solid #fff;
}
.book_top_Nav_up {
  border-bottom-color: #f90 !important;
}
.book_top_Nav li a {
  color: #666;
  display: block;
  width: 100%;
}
.book_top_Nav_up a {
  font-weight: bold;
  color: #f90 !important;
}
.book_top_menu li a {
  color: #f90;
}
</style>
