import Vue from "vue";
import App from "./app/App.vue";
import router from "./router";
import axios from "axios";
import Vuelidate from "vuelidate";
import store from "./store/store";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;
Vue.use(Vuelidate);

axios.defaults.baseURL = "https://vue-axios-auth-d95fa.firebaseio.com";

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
