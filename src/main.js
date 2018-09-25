import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

Vue.config.productionTip = false;
console.log("version", process.env.VUE_APP_VERSION);
console.log("author", process.env.VUE_APP_AUTHOR);

Vue.config.productionTip = false;
Vue.config.devtools = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
