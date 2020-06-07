import axios from "axios";

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1/accounts"
});

// instance.defaults.headers.common["SOMETHING"] = "something";

export default instance;
