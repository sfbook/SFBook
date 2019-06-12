<template>
  <div>
    <ul class="menu_top_list">
      <li>
        <a @click="boback">
          <span>返回</span>
        </a>
      </li>
      <li>新书榜</li>
      <li id="Register">
        <a ></a>
      </li>
    </ul>
    <div id="page" style="overflow:hidden;" ref="list">
      <ul
        class="book_bk_qs1 book_list"
        v-for="(item,index) in bookList"
        :key="index"
        @click="toDetails(item.title)"
      >
        <a>
          <li>
            <img :src="item.cover">
            <div>{{(item.tags).replace(/,/g,' /')}}</div>
          </li>
          <li>
            <div id="listtitle">{{item.title}}</div>
            <div class="rating-container rating-gly" style="margin: 0.08rem 0;">
              <div class="rating-stars" style="width: 100.0%;color:#FBDC04;"></div>
            </div>
            <div>{{item.author}}/{{item.category}}</div>
          </li>
        </a>
      </ul>
    </div>
  </div>
</template>

<script>
import SfHeader from "@/components/SfHeader.vue";
import { constants } from "crypto";
export default {
  data() {
    return {
      bookList: [],
      offsetHeight: 0,
      timer: null,
      bool: false,
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    getGoodList() {
      let bookname = this.$route.query.name;
      this.$http
        .get("https://www.apiopen.top/novelInfoApi?name="+bookname)
        .then(result => {
          this.bookList = [...this.bookList, ...result.body.data.data];
        });
      this.bool = true;
    },
    toDetails(data) {
      this.$router.push({
        path: "/about",
        query: { name: data }
      });
      location.reload();
    },
    boback() {
      this.$router.go(-1);
    }
  },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.bool) {
        if (window.scrollY + 600 >= this.$refs.list.offsetHeight) {
          this.bool = false;
          this.timer = setTimeout(this.getGoodList, 1000);
        }
      }
    });
  },
  destroyed() {
    window.addEventListener("scroll", null);
  },
  components: {
    SfHeader
  }
};
</script>

<style lang="scss" scoped>
ul {
  padding: 0px;
  margin: 0;
  border: medium none;
  list-style-type: none;
  text-overflow: ellipsis;
}
ul li {
  list-style: none;
}
a {
  text-decoration: none;
}
ul {
  padding: 0px;
  margin: 0;
  border: medium none;
  list-style-type: none;
  text-overflow: ellipsis;
}
a {
  text-decoration: none;
}
.menu_top_list {
  height: 0.4rem;
  width: 100%;
  background-color: #ef9965;
  color: #fff;
  font-size: 0.14rem;
}
.menu_top_list li:first-child {
  width: 18%;
}

.menu_top_list li {
  float: left;
  display: -webkit-box;
  -webkit-box-align: center;
  height: 0.4rem;
}
.menu_top_list li:first-child::before {
  background: url(//rs.sfacg.com/web/m/images/menu_top_icon.png) no-repeat -0.42rem
    0.085rem;
  background-size: 0.9rem;
  content: "";
  height: 0.4rem;
  width: 0.21rem;
  display: block;
}
.menu_top_list a {
  color: #fff;
}
.menu_top_list li + li {
  width: 64%;
  -webkit-box-pack: center;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
.menu_top_list li:last-child {
  width: 18%;
}
.book_tab {
  display: -webkit-box;
  margin: 0.08rem;
}
.book_tab li {
  display: -webkit-box;
  margin-right: 0.08rem;
  border: 1px solid #e7e7e7;
  background: #fff;
  -webkit-box-pack: center;
  -webkit-box-align: center;
  -webkit-box-flex: 1;
  border-radius: 0.15rem;
  height: 0.26rem;
  font-size: 0.11rem;
  width: 0;
}

.book_tab_UP {
  color: #f90 !important;
  border: 1px solid #f90 !important;
}
.book_tab li:last-child {
  margin-right: 0rem;
}
.book_tab li a {
  color: #666;
}
#page {
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
}
.book_bk_qs1 {
  border-style: solid;
  border-width: 1px 0px;
  -webkit-border-image: url(//rs.sfacg.com/web/m/images/1px_bk_qs2.png) 2 0
    stretch;
  background: #fff;
}
.book_list {
  padding: 8px;
  overflow: hidden;
  margin-top: 0.06rem;
}
.book_list li:first-child {
  width: 24%;
  margin-right: 8px;
}
.book_list li {
  float: left;
  font-size: 0.1rem;
  color: #999;
  position: relative;
}
.book_list li:first-child img {
  width: 100%;
  display: block;
}
.book_list li:first-child div {
  position: absolute;
  bottom: 0px;
  left: 100%;
  margin-left: 8px;
  white-space: nowrap;
}
.book_list li #listtitle {
  font-size: 0.12rem;
  color: #333;
}
.book_list li .rating-container {
  font-size: 0.08rem;
  letter-spacing: 0.03rem;
}

.rating-container {
  position: relative;
  vertical-align: middle;
  display: inline-block;
  color: #e3e3e3;
  overflow: hidden;
  letter-spacing: 0.05rem;
  margin: 0.15rem 0;
}
.rating-gly {
  font-family: "Goodicon";
}
</style>
