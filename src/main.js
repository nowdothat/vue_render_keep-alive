// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import Antd from "ant-design-vue";
import "ant-design-vue/dist/antd.css";
// import zhCN from "ant-design-vue/lib/locale-provider/zh_CN";

Vue.use(Antd);
Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  render: h => h(App)
}).$mount("#app");
