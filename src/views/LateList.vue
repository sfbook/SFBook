<template>
  <div>
    <div class="book_top">
      <SfHeader/>
      <ul class="book_tab">
        <li class="book_tab_UP">全部作品</li>
        <li>
          <a href="#">签约VIP作品</a>
        </li>
      </ul>
    </div>
    <div id="page" style="overflow:hidden;" ref="list">
      <ul class="book_bk_qs1 book_list" v-for="(item,index) in bookList" :key="index" @click="toDetails(item.bookname)">
        <router-link :to="`/about/${index}/`">
          <li>
            <img :src="item.cover">
            <div>{{(item.tags).replace(/,/g,' /')}}</div>
          </li>
          <li>
            <div id="listtitle">{{item.title}}</div>
            <div
              class="rating-container rating-gly"
              style="margin: 0.08rem 0;"
            >
              <div
                class="rating-stars"
                style="width: 100.0%;color:#FBDC04;"
              ></div>
            </div>
            <div>{{item.author}}/{{item.category}}</div>
          </li>
        </router-link>
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
      bool: false
    };
  },
  created() {
    this.getGoodList();
  },
  methods: {
    getGoodList() {
      this.$http
        .get("https://www.apiopen.top/novelInfoApi?name=盗墓笔记")
        .then(result => {
          this.bookList = [...this.bookList, ...result.body.data.data];
        });
      this.bool = true;
    }
  },
  toDetails(data){
        this.$router.push({
          path: "/about",
          query: { name: data }
        });
       location.reload()
    },
  mounted() {
    window.addEventListener("scroll", () => {
      if (this.bool) {
        if (window.scrollY + 600 >= this.$refs.list.offsetHeight) {
          this.bool = false; 
          console.log("到底部了");
          console.log(this.bookList);
          this.timer = setTimeout(this.getGoodList, 1000);
        }
      }
    });
  },
  destroyed(){
      window.addEventListener("scroll",null);
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
  margin-top: 40px;
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
