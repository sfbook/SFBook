<template>
  <div>
    <ul class="menu_top_list">
      <li>
        <a @click="boback">
          <span>返回</span>
        </a>
      </li>
      <li>用户登录</li>
      <li id="Register">
        <router-link to="/reg">注册</router-link>
      </li>
    </ul>
    <div class="book_Content_style" style="margin-top:0.1rem;padding:0 0.1rem;overflow:hidden;">
      <ul class="denglu_input">
        <li>
          账号 ：
          <input type="text" placeholder="可输入用户名 / 邮箱 / 手机号" id="LoginName" v-model="user">
        </li>
        <li class="book_bk_qs1" style="border-bottom-width:0px;">
          密码 ：
          <input id="LoginPassword" type="password" v-model="pw">
        </li>
        <li class="book_bk_qs1" style="border-bottom-width:0px;">
          验证码 ：
          <div id="slipBar" class="nc-container" style="display: block;">
            <div class="_nc">
              <div id="nc_1-stage-1" class="stage stage1" style="display: block;">
                <div ref="box" class="slider">
                  <div class="label">向右滑动验证</div>
                  <div class="track" :style="`width:${lefts+26}px;`">
                    <div class="bg-green" style="width: 321.775px;"></div>
                  </div>
                  <div ref="mb" class="button" :style="`left:${lefts}px`" @touchstart="moves">
                    <div
                      class="icon nc-iconfont icon-slide-arrow iconfont icon-Magnifier_px"
                      id="nc_1_n1t"
                    ></div>
                  </div>
                </div>
              </div>
              <div id="nc_1-stage-2" class="stage stage2" style="display: none;">
                <div class="textbox">
                  <input
                    class="input"
                    type="text"
                    maxlength="6"
                    autocomplete="off"
                    autocorrect="off"
                    autocapitalize="off"
                    spellcheck="false"
                  >
                  <div class="placeholder" style="display: block;">验证码</div>
                  <div class="icon tip nc-iconfont icon-message"></div>
                  <div class="icon clear nc-iconfont icon-close-white" style="display: none;"></div>
                  <div class="icon refresh nc-iconfont icon-refresh"></div>
                  <img class="code" width="100" height="30" alt>
                </div>
                <div class="ope">
                  <button class="btn-ok" disabled>确 定</button>
                  <div class="tips">验证码错误，请重新输入</div>
                </div>
              </div>
              <div id="nc_1-stage-3" class="stage stage3" style="display: none;">
                <div class="title">非常抱歉，这出错了</div>
                <span class="menu refresh">
                  <span class="icon nc-iconfont icon-refresh"></span>
                  <span class="label">刷新</span>
                </span>
                <span class="menu nc-sep"></span>
                <span class="menu feedback">
                  <span class="icon nc-iconfont icon-message"></span>
                  <span class="label">反馈</span>
                </span>
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <span
      id="Login"
      style="background:#EF9965;color:#FFF;margin:0.4rem auto;width:0.8rem;height:0.3rem;border-radius:0.15rem;display:-webkit-box;-webkit-box-pack:center;-webkit-box-align: center;"
      @click="denglu"
    >登 录</span>
    <div class="denglu_logo">
      第三方账号登录
      <br>
      <a
        href="https://api.weibo.com/oauth2/authorize?client_id=2836361557&amp;response_type=code&amp;redirect_uri=http://passport.sfacg.com/oauth/sina/authsuccess.ashx"
        target="_blank"
      >
        <img src="//rs.sfacg.com/web/m/images/weibo.png">
      </a>
      <a
        href="https://graph.qq.com/oauth2.0/authorize?client_id=101142681&amp;response_type=code&amp;redirect_uri=http://passport.sfacg.com/oauth/qq/authsuccess.ashx&amp;state=sf"
        target="_blank"
      >
        <img src="//rs.sfacg.com/web/m/images/qq.png">
      </a>
      <a
        href="https://www.facebook.com/dialog/oauth?client_id=314584345382224&amp;response_type=code&amp;redirect_uri=https://proxypassport.sfacg.com/oauth/facebook/authsuccess-1.ashx&amp;state=sf&amp;&amp;scope=email"
        target="_blank"
      >
        <img src="//rs.sfacg.com/web/m/images/fb.png">
      </a>
    </div>
    <div id="bottomNav" style v-if="btshow">
      <i></i>
      <img src="//rs.sfacg.com/web/m/images/APP_icon.png" width="172" height="30" border="0">
      <img src="//rs.sfacg.com/web/m/images/APP_D.png" width="65px" height="24px" border="0">
      <img
        src="//rs.sfacg.com/web/m/images/APP_Close.png"
        width="11.5px"
        height="11.5px"
        @click="btshow=false"
      >
    </div>
  </div>
</template>

<script>
import { Toast } from 'mint-ui';
import { setInterval, clearInterval } from "timers";
export default {
  data() {
    return {
      btshow: true,
      lefts: 0,
      user:"",
      pw:""
    };
  },
  methods: {
    moves(ev) {
      document.ontouchmove = ev => {
        this.lefts =
          ev.touches[0].clientX -
          this.$refs.mb.offsetWidth / 2 -
          this.$refs.box.offsetLeft;
        if (this.lefts <= 0) {
          this.lefts = 0;
        }
        if (
          this.lefts >=
          this.$refs.box.offsetWidth - this.$refs.mb.offsetWidth
        ) {
          this.lefts = this.$refs.box.offsetWidth - this.$refs.mb.offsetWidth;
        }
      };
      document.ontouchend = ev => {
        document.ontouchmove = null;
        if (
          this.lefts <
          this.$refs.box.offsetWidth - this.$refs.mb.offsetWidth
        ) {
          const fast = 20;
          let timer = setInterval(() => {
            this.lefts -= 40;
            if (this.lefts <= 0) {
              this.lefts = 0;
              clearInterval(timer);
            }
          }, 20);
        }
      };
    },
    boback() {
      this.$router.go(-1);
    },
    denglu() {
      this.$http.get(
        "https://www.apiopen.top/login?key=00d91e8e0cca2b76f515926a36db68f5&phone="+this.user+"&passwd="+this.pw
      ).then(result=>{
        console.log(result.body.msg);
        if(result.body.msg == "用户不存在！"){
          Toast(result.body.msg);
        }else if(result.body.msg == "成功!"){
          Toast("登录成功");
          location.href="/";
        }else{
          Toast("用户名或密码错误！");
        }
      })
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../components/iconfont/iconfont.css";
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

.book_Content_style {
  background: #fff;
  border-width: 1px 0px;
  -webkit-border-image: url(//rs.sfacg.com/web/m/images/1px_bk2.png) 2 0 stretch;
  border-image: url(//rs.sfacg.com/web/m/images/1px_bk2.png) 2 0 stretch;
  color: #999;
  background: #fff;
}
.denglu_input li {
  line-height: 0.35rem;
}
.denglu_input input {
  border: none;
  color: #666;
  width: 60%;
}
input[type="button"],
input[type="text"],
input[type="number"],
input[type="password"],
textarea {
  -webkit-appearance: none;
  outline: 0;
}
.book_bk_qs1 {
  border-style: solid;
  border-width: 1px 0px;
  -webkit-border-image: url(//rs.sfacg.com/web/m/images/1px_bk_qs2.png) 2 0
    stretch;
  background: #fff;
}
.nc-container {
  font-size: 12px;
  touch-action: none;
}
._nc {
  width: 100%;
  height: 100%;
  touch-action: none;
  font-size: 16px;
}
._nc .stage1 {
  height: 55px;
  position: relative;
}
._nc .stage {
  position: relative;
  padding: 0 15px;
}
._nc .stage1 .slider {
  position: absolute;
  height: 52px;
  box-shadow: 0 0 3px #999;
  background-color: #ddd;
  left: 15px;
  right: 15px;
}

._nc .stage1 .label {
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(0, #4d4d4d),
    color-stop(0.4, #4d4d4d),
    color-stop(0.5, white),
    color-stop(0.6, #4d4d4d),
    color-stop(1, #4d4d4d)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  -webkit-animation: slidetounlock 3s infinite;
  -webkit-text-size-adjust: none;
}
@-webkit-keyframes slidetounlock {
  0% {
    background-position: -200px 0;
  }
  100% {
    background-position: 200px 0;
  }
}

._nc .stage1 .track div,
._nc .stage1 .label {
  line-height: 52px;
  height: 52px;
  text-align: center;
  font-size: 16px;
}

._nc .stage1 .label {
  display: block;
  width: 100%;
  color: #aaa;
}

._nc .stage1 .track {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 0;
  overflow: hidden;
}
._nc .stage1 .track div {
  color: #fff;
}
._nc .stage1 .bg-green {
  background-color: #78c430;
}
._nc .stage1 .button {
  position: absolute;
  left: 0;
  top: 0;
  width: 52px;
  height: 52px;
  background-color: #fff;
  cursor: pointer;
}
.icon-Magnifier_px {
  font-size: 30px;
  margin-left: 10px;
  margin-top: 8px;
}
.denglu_logo {
  text-align: center;
  color: #999;
}
.denglu_logo img {
  width: 0.5rem;
  height: 0.5rem;
  margin: 0.2rem;
}
#bottomNav {
  background: rgba(0, 0, 0, 0.8);
  z-index: 999;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 0.4rem;
}
#bottomNav i {
  display: inline-block;
  height: 100%;
  vertical-align: middle;
}
#bottomNav img {
  vertical-align: middle;
  margin: 0 0.15rem 0 0.05rem;
}
#bottomNav img + img + img {
  float: right;
  margin: 0.15rem 0.15rem 0 0;
}
</style>
