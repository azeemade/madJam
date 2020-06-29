import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Bootstrap from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "roboto-fontface/css/roboto/roboto-fontface.css";
import "@mdi/font/css/materialdesignicons.css";

Vue.config.productionTip = false;
Vue.component("navbar", require("./components/navbar.vue").default);
Vue.component("formFail", require("./components/formFail.vue").default);
Vue.component("formSuccess", require("./components/formSuccess.vue").default);

new Vue({
  router,
  store,
  Bootstrap,
  render: h => h(App)
}).$mount("#app");
