<template>
  <div class="shuping">
    <div class="pllist" v-for="(item,i) in list" :key="i">
      <ul class="shang" style="margin:0.1rem;">
        <li>
          <figure>
            <img :src="pinglun[i].header">
          </figure>
          <div class="content2">
            <span>
              <b>{{pinglun[i].username}}</b>
              <br>
              {{pinglun[i].passtime}}
            </span>
          </div>
          <div style="color:#333;line-height:2em;">{{pinglun[i].top_commentsName}}</div>
          <a href="###">
            <p>{{pinglun[i].top_commentsContent}}</p>
          </a>
        </li>
      </ul>
      <a href="/b/147294/">
        <ul class="shuping_tips">
          <li>
            <img :src="item.book_cover">
          </li>
          <li>
            {{item.bookname}}
            <em>{{item.search_heat/10}}</em>
            <br>
            <span>{{item.class_name}} / {{item.first_cate_name}}</span>
          </li>
        </ul>
      </a>
      <ul class="shuping_hudong book_bk_qs1" style="border-bottom-width:0px;">
        <li>分享 13</li>
        <li cid="6356755">
          赞
          <label>16</label>
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
      pinglun: [],
      page: 1
    };
  },
  methods: {
    getshuList() {
      this.$http.get("https://www.apiopen.top/novelApi").then(result => {
        //   this.comments = this.comments.concat(result.body.data.normal.list);
        this.list = this.list.concat(result.body.data);
      });
    },
    getpinglun() {
      this.$http
        .get("https://www.apiopen.top/satinGodApi?type=1&page=" + this.page)
        .then(result => {
          this.pinglun = this.pinglun.concat(result.body.data);
        });
    },
    getMore(){
        this.pageIndex++;
        this.getshuList();
        this.getpinglun();
    },
  },
  created() {
    this.getshuList();
    this.getpinglun();
    window.addEventListener("scroll", ()=> {
      // 判断是否滚动到底部
      if (
        document.body.scrollTop + window.innerHeight >=
          document.body.offsetHeight ||
        document.documentElement.scrollTop + window.innerHeight >=
          document.body.offsetHeight
      ) {
        //滚动高度+可视区高度>=文档高度
        this.getMore();
      }
    });
  }
};
</script>

<style lang="scss" scoped>
html,
body {
  padding: 0;
  margin: 0;
}
figure {
  padding: 0;
  border-radius: 0.15rem;
  overflow: hidden;
  height: 0.3rem;
  width: 0.3rem;
  margin: 0 0.08rem 0 0;
  display: block;
}
.shuping {
  padding-top: 90px;
  font-size: 0.12rem;
  .pllist {
    border: 1px solid #fff;
    margin-bottom: 0.08rem;
    background-color: #fff;
    a {
      color: #666;
      text-decoration: none;
    }
    ul {
      padding-inline-start: 40px;
      padding: 0;
      border: medium none;
      text-overflow: ellipsis;
      li {
        display: list-item;
        p {
          margin: 0.05rem 0 0 0;
          line-height: 1.8em;
          text-indent: 2em;
          font-size: 0.1rem;
        }
      }
    }
    .shang {
      background-color: #fff;
      li {
        color: #666;
        overflow: hidden;
        font-size: 0.11rem;
        figure {
          float: left;
          img {
            width: 0.3rem;
            height: 0.3rem;
          }
        }
        .content2 {
          padding: 0 0 0.05rem 0;
          span {
            font-size: 0.1rem;
          }
        }
        span {
          line-height: 0.15rem;
          color: #999;
          b {
            font-weight: normal;
            font-size: 0.11rem;
            color: #3686d8;
          }
        }
      }
    }
    .book_bk_qs1 {
      border-top: 1px solid #ccc;
      background: #fff;
      padding: 0;
      margin: 0;
    }
  }
}
.shuping_tips {
  width: 80%;
  margin: 0.15rem auto;
  background: #f3f3f3;
  display: -webkit-box;
  border-radius: 0.04rem;
  overflow: hidden;
  li {
    font-size: 0.1rem;
    display: -webkit-box;
    -webkit-box-align: center;
    img {
      width: 100%;
      vertical-align: bottom;
    }
    em {
      color: #f90;
      font-style: normal;
    }
    span {
      color: #999;
      font-size: 0.09rem;
    }
  }
}
.shuping_tips li:first-child {
  width: 15%;
  margin-right: 0.08rem;
}
.shuping_tips li + li {
  line-height: 2em;
}

.shuping_hudong {
  display: -webkit-box;
  li {
    border-style: solid;
    text-align: center;
    width: 49%;
    font-size: 0.1rem;
    height: 0.3rem;
    border-width: 0 1px 0 0;
    color: #999;
    list-style-type: none;
    line-height: 0.3rem;
  }
}
.shuping_hudong li + li {
  border-width: 0px;
}
</style>
