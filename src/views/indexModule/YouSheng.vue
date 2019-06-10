<template>
  <div class="box">
    <div class="yousheng">
      <h2>有声轻小说</h2>
      <ul>
        <li v-for="item in list" :key="item.bid">
          <a href="#">
            <img :src="item.book_cover" alt>
            <p>{{item.bookname}}</p>
          </a>
        </li>
        <li v-for="item in twolist" :key="item.bid">
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
      this.$http.get("https://www.apiopen.top/novelApi").then(result => {
        this.twolist = result.body.data;
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
  .yousheng{
      background-color: #fff;
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
      margin-left: 2.6%;
      margin-right: 2.6%;
      text-align: center;
      vertical-align: top;
      -webkit-box-pack: center;
      width: 1.4rem;
      text-align: center;
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
          font-size: 14px;
          color: #000;
        }
      }
    }
  }
}
</style>