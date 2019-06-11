<template>
  <div class="box">
    <div class="zhuanti">
      <h2>专题推荐</h2>
      <ul>
        <li v-for="item in list" :key="item.bid" @click="toDetails(item.bookname)">
          <a href="#">
            <img :src="item.book_cover" alt>
            <p>{{item.bookname}}</p>
          </a>
        </li>
        <li v-for="item in twolist" :key="item.bid" @click="toDetails(item.bookname)">
          <a href="#">
            <img :src="item.book_cover" alt>
            <p>{{item.bookname}}</p>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [],
      twolist: []
    };
  },
  methods: {
    getList() {
      this.$http.get("https://www.apiopen.top/novelApi").then(result => {
        this.list = result.body.data;
      });
    },
    getTwoList() {
      this.$http.get("https://www.apiopen.top/novelApi?page=6").then(result => {
        this.twolist = result.body.data;
      });
    }
  },
  created() {
    this.getList();
    this.getTwoList();
  },
    toDetails(data){
        this.$router.push({
          path: "/about",
          query: { name: data }
        });
    }
};
</script>

<style lang="scss" scoped>
p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.box {
  width: 100%;
  margin-top: 12px;
  background-color: #fff;
  height: 450px;
  .zhuanti{
      background-color: #fff;
      height: 450px;
      overflow: hidden;
  }
  h2 {
    margin: 0 2.4%;
    padding: 0;
    color: #333;
    font-size: 0.12rem;
    height: 0.3rem;
    line-height: 0.3rem;
    font-weight: 400;
    border-bottom: 1px solid #ccc;
  }
  ul {
    padding: 0;
    margin-top: 0.1rem;
    li {
      display: inline-block;
      width: 30.1%;
      margin-left: 2.4%;
      text-align: center;
      vertical-align: top;
      a {
        color: #666;
        text-decoration: none;
        font-size: 0.1rem;
        img {
          margin-bottom: 0.02rem;
          width: 100%;
        }
        p {
          margin: 0px;
          height: 0.4rem;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
