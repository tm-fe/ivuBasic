import Vue from "vue";
import iView from "tm-iview";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "tm-iview/dist/styles/iview.css";

Vue.config.productionTip = false;
Vue.use(iView);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
