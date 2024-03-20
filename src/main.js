import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/main.css";

import CommonInfo from "@/components/common/commonInfo.vue";
import BaseInput from "@/components/common/baseInput.vue";

Vue.config.productionTip = false;

import "@/renderFn/anchor-head";

Vue.component("commonInfo", CommonInfo);
Vue.component("baseInput", BaseInput);

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
