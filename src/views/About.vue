<template>
  <div class="about">
    <mt-header fixed>
      <a @click="boback" slot="left">
        <mt-button icon="back">返回</mt-button>
      </a>
    </mt-header>
    <div class="details">
      <div class="detBox">
      <div class="detL" >
        <p class="title" v-text="dataLis.title"></p>
        <p>
          <span class="kind" v-text="dataLis.category"></span>
        </p>
        <p class="related" ><span v-text="dataLis.author"></span>  /<span v-text="dataLis.words"></span>字/<span v-text="dataLis.hh_hot"></span>热度</p>
        <p class="time">{{time}}</p>
      </div>
      <div class="detR">
        <img :src="dataLis.cover" alt="">
      </div>
      </div>
      <p class="btn">
        <a href="###" class="btnL">点击阅读</a>
        <a href="###" class="btnR">目录列表</a>
      </p>
    </div>

    <div class="intro">
        <p class="introTitle">作品介绍</p>
        <div class="content book_bk_qs1" v-text="dataLis.desc"></div>
        <p class="mark"><span v-for="(item,i) in tagLis" :key='i' v-text="item"></span></p>
    </div>

    <div class="intro">
        <p class="introTitle book_bk_qs1" style="border-top:none">这些作品你可能也喜欢</p>
        <div class="likes">
          <ul>                                  
            <li v-for="(item,i) in like" :key="i" @click="toDetails(item.title)">
              <img v-lazy="item.cover" alt="" >
              <p v-text="item.title" ></p>
            </li>
          </ul>
        </div>
    </div>
  </div>

</template>
<script>
import { constants } from 'crypto';
const axios = require("axios");
export default {
  data() {
    return {
      dataLis: [],
      like: [],
      time:'',
      tagLis:[]
    };
  },
  created() {
    let bookname = this.$route.query.name;
    let that = this;
    axios
      .get("https://www.apiopen.top/novelInfoApi", {
        params: {
          name: bookname
        }
      })
      .then(function(response) {
        that.dataLis = response.data.data.aladdin;
        that.like = response.data.data.data;
        that.time = that.getTime(response.data.data.aladdin.latest_chapter.ctime);
        that.getTags(response.data.data.aladdin.tags);
      })
      .catch(function(error) {
        console.log(error);
      });
  },
  methods: {
    getTime(times){
      let time = new Date(times*1000);
      let y = time.getFullYear()
      let m = time.getMonth() + 1 
      let d = time.getDate();
      return y + "-" + (m < 10 ? "0" + m : m) + "-" + (d < 10 ? "0" + d : d);
    },
    getTags(tags){
      let lis = tags.split(',');
      this.tagLis = lis;
    },
    toDetails(data){
        this.$router.push({
          path: "/about",
          query: { name: data }
        });
       location.reload()
    },
    boback() {
      this.$router.go(-1);
    }
  },
  computed: {
    
  }
};
</script>
<style lang="scss" scoped>
p{
  margin: 0;
}
li{
  list-style: none;
}
ul{
  padding: 0;
}
.mint-header {
  height: 45px;
  background-color: #ef9965;
  font-size: 15.5px;
}
.details {
  padding: 11.3px;
  background: #ef9965;
  color: #fff;
  margin-top: 45px;
  overflow: hidden;
  .detBox{
    clear: both;
    overflow: hidden;
  }
  .detL,.detR{
    float: left;
  }
  .detL {
    width: 60%;
    p{
      margin: 5px 0;
    }
    .title {
      margin: 0;
      font-size: 17px;
    }
    .kind {
      background-color: rgba(255, 255, 255, 0.4);
      padding: 2px 4px;
      border-radius: 8px;
      font-size: 12px;
    }
    .time,.related {
      font-size: 12px;
    }
  }
  .detR {
    width: 40%;
    img{
      width: 103.950px;
      height: 129.950px;
      float: right;
    }
  }
  .btn{
    margin: 16.950px 0 0 0;
    clear: both;
    overflow: hidden;
    display: -webkit-box;
    a{
      font-size: 14.69px;
    height: 31.637px;
    border-radius: 0.14rem;
    -webkit-box-flex: 1;
    display: -webkit-box;
    -webkit-box-pack: center;
    -webkit-box-align: center;
    margin-right: 0.2rem;
    color: #FFF;
    background: #EB7C3A;
    text-decoration: none;
    }
    .btnR{
      margin: 0;
    }
  }
}
.intro{
    color: #999;
    background: #FFF;
    padding: 0 11.300px;
    margin-top: 11.300px;
    .introTitle{
      color: #333;
      height: 33.900px;
      line-height: 33.900px;
      font-size: 13.56px;
    }
    .content{
      color: #666;
      font-size: 11.3px;
      line-height: 1.8em;
      padding: 5.650px 0;
    }
    .book_bk_qs1 {
    border-style: solid;
    border-width: 1px 0px;
    -webkit-border-image: url(//rs.sfacg.com/web/m/images/1px_bk_qs2.png) 2 0 stretch;
    background: #FFF;
}
    .mark{
      padding: 9.040px 0 3.390px 0;
      clear: both;
      overflow: hidden;
      span{
        float: left;
        font-size: 9.605px;
        background: #E0E0E0;
        display: -webkit-box;
        -webkit-box-pack: center;
        -webkit-box-align: center;
        height: 15.813px;
        padding: 0 6.780px;
        margin-right: 11.300px;
        margin-bottom: 5.650px;
        border-radius: 7.906px;
      }
    }
}
.likes{
  overflow-y:hidden;
  margin-top: 11px;
  ul{
    margin: 0px;
    white-space : nowrap; 
    li{
      display: inline-block;
      height: 148.850px;
      width:79.200px ;
      margin-right: 10px;
      img{
        width: 79.200px;
        height: 99px;
      }
    }
  }
}
</style>
