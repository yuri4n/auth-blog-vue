import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../app/home/Home";
import Auth from "../app/auth/Auth";
import Register from "../app/auth/components/Register";
import Login from "../app/auth/components/Login";

Vue.use(VueRouter);

const routes = [
  {
    path: "/home",
    name: "Home",
    component: Home
  },
  {
    path: "/",
    redirect: { name: "Home" }
  },
  {
    path: "/auth",
    name: "Auth",
    component: Auth,
    children: [
      {
        path: "login",
        name: "Login",
        component: Login
      },
      {
        path: "register",
        name: "Register",
        component: Register
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
