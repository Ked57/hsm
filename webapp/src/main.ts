import Vue from "vue";
import VueCompositionApi from "@vue/composition-api";
import App from "./App";
import store from "./store";
import "./registerServiceWorker";
import router from "./router";

import "./assets/styles/index.css";

Vue.config.productionTip = false;
Vue.use(VueCompositionApi);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount("#app");
