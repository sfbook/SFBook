<template>
  <div>
    <!-- 头部 -->
    <ul class="menu_top_list">
      <li>
        <router-link to="/">
          <span>返回</span>
        </router-link>
      </li>
      <li>用户注册</li>
      <li id="Register">
        <router-link to="/">首页</router-link>
      </li>
    </ul>
    <!-- 内容区域 -->
    <div class="container">
      <div class="login">
        <table>
          <tbody>
            <tr>
              <td class="td1">帐号：</td>
              <td>
                <input
                  type="text"
                  name="username"
                  placeholder="请输入登录帐号"
                  id="username"
                  class="login_name"
                  value
                  v-model="user"
                >
                <span style="position:absolute;bottom:0;left:0;">asd</span>
              </td>
            </tr>
            <tr>
              <td class="td1">密码：</td>
              <td>
                <input
                  type="password"
                  name="password"
                  placeholder="请输入登录密码"
                  id="password"
                  class="login_name"
                >
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input type="hidden" name="do" value="check">
                <input type="submit" value="注 册" class="login_btn">
              </td>
            </tr>
            <tr>
              <td colspan="2">
                <input
                  type="button"
                  onclick="window.location.href='https://m.xs74.com/user.php?action=login'"
                  value="已有账号？点击登录"
                  class="login_btn"
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      user: ""
    };
  },
  methods: {
    register() {
      this.$http.get(
        "https://www.apiopen.top/createUser?key=00d91e8e0cca2b76f515926a36db68f5&phone=1259434245247817&passwd=123654"
      ).then(result=>{
          console.log(result);
      });
    }
  },
  created(){
      this.register();
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
.container {
  margin-top: 5px;
  font-family: sans-serif;
}
table {
  border-collapse: collapse;
  display: table;
  border-collapse: separate;
  border-spacing: 2px;
  border-color: grey;
}
tbody {
  display: table-row-group;
  vertical-align: middle;
  border-color: inherit;
}
tr {
  display: table-row;
  vertical-align: inherit;
  border-color: inherit;
}
td {
  display: table-cell;
  vertical-align: inherit;
  position: relative;
  span {
  }
}
input {
  -webkit-writing-mode: horizontal-tb !important;
  text-rendering: auto;
  color: initial;
  letter-spacing: normal;
  word-spacing: normal;
  text-transform: none;
  text-indent: 0px;
  text-shadow: none;
  display: inline-block;
  text-align: start;
  -webkit-appearance: textfield;
  background-color: white;
  -webkit-rtl-ordering: logical;
  cursor: text;
  margin: 0em;
  font: 400 13.3333px Arial;
  padding: 1px 0px;
  border-width: 2px;
  border-style: inset;
  border-color: initial;
  border-image: initial;
}
.login_name {
  border: 1px solid #b7f3f9;
  height: 25px;
  width: 98%;
  border-radius: 3px;
}
input[type="hidden" i] {
  display: none;
  -webkit-appearance: initial;
  background-color: initial;
  cursor: default;
  padding: initial;
  border: initial;
}
.login {
  margin: 50px 10px 10px;
  table {
    width: 100%;
    .td1 {
      width: 50px;
      padding: 20px 0px;
    }
  }
}
.login_btn {
  display: block;
  margin-top: 15px;
  width: 100%;
  height: 40px;
  border: 0 none;
  background-color: #ef9965;
  border-radius: 2px;
  line-height: 40px;
  text-align: center;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
}
</style>
