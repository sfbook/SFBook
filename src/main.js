import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 导入 vue-resourse
import VueResource from "vue-resource";
// 安装 vue-sourse
Vue.use(VueResource);
// 导入 MintUI 
import MintUI from 'mint-ui';
// 安装 MintUI
Vue.use(MintUI);
import 'mint-ui/lib/style.css';
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
