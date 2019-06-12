<template>
  <div class="box">
      
    <div class="searchBox">

    
    <mt-button icon="back"  @click="boback"></mt-button>
    <mt-search v-model='value' @keyup.enter.native="search(value)"></mt-search>
</div>
    <div class="lis" v-infinite-scroll="loadMore" infinite-scroll-disabled="busy" infinite-scroll-distance="10">
        <ul>
            <li class="details" v-for="(item,i) in searchLis" :key='i' @click="toDetails(item.title)">
                <img v-lazy="item.cover" alt="">
                <div>
                    <p v-text="item.title"></p>
                    <p v-text="item.tags"></p>
                    <span v-text="item.author"></span>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>




<script>
const axios = require("axios");

export default {
  data() {
    return {
      val: null,
      searchLis: []
    };
  },
  methods: {
    search(data){
        this.val = data
        let that = this
      axios.get("https://www.apiopen.top/novelInfoApi", {
          params: {
            name: data
          }
        })
        .then(function(response) {
          that.searchLis = response.data.data.data
        })
        .catch(function(error) {
          console.log(error);
        })
    },
    boback(){
        this.$router.go(-1);
    },
    loadMore(){
        let data = this.val
        let that = this
      axios.get("https://www.apiopen.top/novelInfoApi", {
          params: {
            name: data
          }
        })
        .then(function(response) {
          that.searchLis = [...that.searchLis,...response.data.data.data]
        })
        .catch(function(error) {
          console.log(error);
        })
    },
    toDetails(data){
        this.$router.push({
          path: "/about",
          query: { name: data }
        });
    }
  }
};
</script>

<style lang="scss" scoped>
body {
  padding-top: 0 !important;
}
.box{
    clear: both;
    overflow: hidden;
}
.mint-button--default{
    box-shadow: none;
}
.searchBox{
    clear: both;
    overflow: hidden;
    height: 52px;
}
.mint-button{
    display: block;
    float: left;
    width: 10%;
    color: white;
    background-color: #ef9965 ;
    border-radius: 0;
    border: 0;
    height: 100%;
}
.mint-search{
    height: 100%;
    width: 90%;
    float: left;
}
/deep/.mint-search-list{
    display: none
}
/deep/.mint-searchbar {
  background-color: #ef9965 !important;
}
/deep/.mint-searchbar-cancel {
  color: white;
}
.lis{
    padding: 0 13.33px;
}
ul{
    padding: 0;
}
li{
    list-style: none;
    margin-top: 11.33px;
    overflow: hidden;
    clear:both;
    img{
        float: left;
        height: 67.800px;
        width: 54.237px;
        margin-right:11.300px; 
    }
    div{
        width: 238px;
        float: left;
        p{
            margin: 0;
            color: #333;
            font-size: 15.82px;
            padding-top: 2.260px;
            white-space:nowrap;
            overflow: hidden;
            text-overflow:ellipsis;
        }
        span{
            display: block;
            margin-top: 5px;
            font-size: 13.54px;
            color: gray;
        }
    }
}
</style>