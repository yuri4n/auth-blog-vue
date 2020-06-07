import Vue from "vue";
import Vuex from "vuex";
import router from "../router";

import axios from "../axios_auth";
import globalAxios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    idToken: null,
    userId: null,
    user: null
  },
  mutations: {
    authUser(state, userData) {
      state.idToken = userData.token;
      state.userId = userData.userId;
    },
    storeUser(state, user) {
      state.user = user;
    },
    clearAuthData(state) {
      state.idToken = null;
      state.userId = null;
    }
  },
  actions: {
    async signUp({ commit, dispatch }, authData) {
      const response = await axios.post(
        ":signUp?key=AIzaSyBh7e65HnZbT04Ex9r2ikLm3VsniBnSwuk",
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      );

      commit("authUser", {
        token: response.data.idToken,
        userId: response.data.localId
      });
      dispatch("storeUser", authData);
      await router.push("/");
    },
    async logIn({ commit }, authData) {
      const response = await axios.post(
        ":signInWithPassword?key=AIzaSyBh7e65HnZbT04Ex9r2ikLm3VsniBnSwuk",
        {
          email: authData.email,
          password: authData.password,
          returnSecureToken: true
        }
      );

      commit("authUser", {
        token: response.data.idToken,
        userId: response.data.localId
      });
      await router.push("/");
    },
    async logOut({ commit }) {
      commit("clearAuthData");
      await router.push("/auth");
    },
    async storeUser({ state }, userData) {
      if (!state.idToken) {
        return;
      }

      const response = await globalAxios.post(
        `/users.json?auth=${state.idToken}`,
        userData
      );
      console.log(response);
    },
    async fetchUser({ commit, state }) {
      if (!state.idToken) {
        return;
      }

      const response = await globalAxios.get(
        `/users.json?auth=${state.idToken}`
      );
      const user = Object.values(response.data)[0];
      commit("storeUser", user);
    }
  },
  getters: {
    user(state) {
      return state.user;
    },
    isAuthenticated(state) {
      return state.idToken !== null;
    }
  }
});
