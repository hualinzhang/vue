import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import ElementUI from "element-gui";
import "element-gui/lib/theme-chalk/index.css";

import "./assets/styles/base/base.scss";
import "./assets/styles/base/layout.scss";
Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
}).$mount("#app");
