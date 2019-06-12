<template>
  <div class="box">
    <div class="tuijian">
      <h2>最新有意思的新书</h2>
      <ul>
        <li v-for="item in list" :key="item.bid" @click="toDetails(item.bookname)">
          <a>
            <img :src="item.book_cover" alt>
            <p>{{item.introduction}}</p>
          </a>
        </li>
        <li v-for="item in twolist" :key="item.bid" @click="toDetails(item.bookname)">
          <a>
            <img :src="item.book_cover" alt>
            <p>{{item.introduction}}</p>
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
      twolist:[]
    };
  },
  methods: {
    getList() {
      this.$http.get("https://www.apiopen.top/novelApi?page=3").then(result => {
        this.list = result.body.data;
      });
    },
    getTwoList(){
       this.$http.get("https://www.apiopen.top/novelApi?page=4").then(result => {
        this.twolist = result.body.data;
      }); 
    },
    toDetails(data){
        this.$router.push({
          path: "/about",
          query: { name: data }
        });
    }
  },
  created() {
    this.getList();
    this.getTwoList();
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
  height: 375px;
  width: 100%;
  margin-top: 12px;
  background-color: #fff;
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
      width: 22%;
      margin-left: 2.4%;
      text-align: center;
      vertical-align: top;
      a {
        color: #666;
        text-decoration: none;
        font-size: 0.1rem;
        img {
          height: 103px;
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
