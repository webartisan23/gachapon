import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import "./plugin"
import 'bootstrap/dist/css/bootstrap.min.css'
import { isMobile } from 'mobile-device-detect';
Vue.config.productionTip = false;
Vue.prototype.$isMobile = isMobile
new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
