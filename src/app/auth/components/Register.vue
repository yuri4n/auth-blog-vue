<template>
  <div class="text-gray-900 text-base tracking-wider">
    <div class="mb-10">
      <label class="my-2 inline-block w-full">
        Name
        <input
          placeholder="Your Nice Name"
          class="transition duration-300 inline-block w-full border border-gray-400 px-5 py-3 italic placeholder-gray-600 text-gray-800 focus:border-red-500 outline-none"
          type="email"
          v-model="userData.name"
        />
      </label>
      <label class="my-2 inline-block w-full">
        Email Address
        <input
          placeholder="Your Awesome Email"
          class="transition duration-300 inline-block w-full border border-gray-400 px-5 py-3 italic placeholder-gray-600 text-gray-800 focus:border-red-500 outline-none"
          type="email"
          v-model="userData.email"
        />
      </label>
      <label class="my-2 inline-block w-full">
        Password
        <input
          placeholder="Your Secret Password"
          class="transition duration-300 inline-block w-full border border-gray-400 px-5 py-3 italic placeholder-gray-600 text-gray-800 focus:border-red-500 outline-none"
          type="password"
          v-model="userData.password"
        />
      </label>
      <label class="my-2 inline-block w-full">
        Repeat Password
        <input
          placeholder="Repeat Your Secret Password"
          class="transition duration-300 inline-block w-full border border-gray-400 px-5 py-3 italic placeholder-gray-600 text-gray-800 focus:border-red-500 outline-none"
          type="password"
          v-model="repeatPassword"
        />
      </label>
    </div>
    <div>
      <button
        class="mr-5 py-2 border-red-500 border w-32 tracking-wider bg-gray-100 shadow text-red-500 hover:shadow-2xl transition duration-300 hover:text-red-400 hover:border-red-400"
        @click="sendData"
      >
        Sign Up
      </button>
      <router-link
        to="/auth/login"
        tag="button"
        class="py-2 w-32 tracking-wider bg-red-500 shadow text-white hover:shadow-2xl transition duration-300 hover:bg-red-400"
      >
        Login
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "../../../axios_auth";

export default {
  name: "Register",
  data: () => ({
    userData: {
      name: "",
      email: "",
      password: ""
    },
    repeatPassword: ""
  }),
  methods: {
    async sendData() {
      if (this.userData.password !== this.repeatPassword) {
        return;
      }

      await axios.post(":signUp?key=AIzaSyBh7e65HnZbT04Ex9r2ikLm3VsniBnSwuk", {
        email: this.userData.email,
        password: this.userData.password,
        returnSecureToken: true
      });

      this.userData = {
        name: "",
        email: "",
        password: ""
      };
      this.repeatPassword = "";
    }
  }
};
</script>

<style scoped></style>
