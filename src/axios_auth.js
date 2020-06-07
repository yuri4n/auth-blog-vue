import axios from "axios";

const instance = axios.create({
  baseURL: "https://vue-axios-auth-d95fa.firebaseio.com"
});

instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;
