<template>
  <div class="text-gray-900 text-base tracking-wider">
    <div class="mb-10">
      <label class="my-2 inline-block w-full">
        Email Address
        <input
          v-model="userData.email"
          placeholder="Your Awesome Email"
          class="transition duration-300 inline-block w-full border border-gray-400 px-5 py-3 italic placeholder-gray-600 text-gray-800 focus:border-red-500 outline-none"
          type="email"
        />
      </label>
      <label class="my-2 inline-block w-full">
        Password
        <input
          placeholder="Your Secret Password"
          v-model="userData.password"
          class="transition duration-300 inline-block w-full border border-gray-400 px-5 py-3 italic placeholder-gray-600 text-gray-800 focus:border-red-500 outline-none"
          type="password"
        />
      </label>
    </div>
    <div>
      <button
        class="mr-5 py-2 w-32 tracking-wider bg-red-500 shadow text-white hover:shadow-2xl transition duration-300 hover:bg-red-400"
        @click="login"
      >
        Login
      </button>
      <router-link
        tag="button"
        to="/auth/register"
        class="py-2 border-red-500 border w-32 tracking-wider bg-gray-100 shadow text-red-500 hover:shadow-2xl transition duration-300 hover:text-red-400 hover:border-red-400"
      >
        Sign Up
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Login",
  data: () => ({
    userData: {
      email: "",
      password: ""
    }
  }),
  methods: {
    async login() {
      await this.$store.dispatch("logIn", {
        email: this.userData.email,
        password: this.userData.password
      });

      this.userData = {
        email: "",
        password: ""
      };
    }
  }
};
</script>

<style scoped></style>
