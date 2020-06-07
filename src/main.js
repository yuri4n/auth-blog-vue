import Vue from "vue";
import App from "./app/App.vue";
import router from "./router";
import axios from "axios";

import "@/assets/css/tailwind.css";

Vue.config.productionTip = false;

axios.defaults.baseURL = "https://vue-axios-auth-d95fa.firebaseio.com";
axios.defaults.headers.common["Authorization"] = "thisisatoken";
axios.defaults.headers.get["Accepts"] = "application/json";

const reqInter = axios.interceptors.request.use(config => {
  console.log("Req: ", config);
  return config;
});
const resInter = axios.interceptors.response.use(res => {
  console.log("Res: ", res);
  return res;
});

axios.interceptors.request.eject(reqInter);
axios.interceptors.response.eject(resInter);

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
