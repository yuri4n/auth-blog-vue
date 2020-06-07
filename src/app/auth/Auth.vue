<template>
  <div>
    <div class="flex">
      <div class="md:w-1/2 sm:w-full md:h-screen relative px-20">
        <div class="w-full h-full flex flex-col justify-center">
          <div class="mb-10 transition-all duration-300">
            <p class="text-2xl text-gray-900 tracking-wider">
              Artificial Intelligence Driving Results For The Travel Industry
            </p>
            <p class="tracking-wider mt-4 text-gray-700" v-if="!authRoute">
              Welcome back, Please
              {{ this.loginRoute ? "login to" : "register" }} your account
            </p>
            <p class="tracking-wider mt-4 text-gray-700" v-else>
              Welcome, Please select an option
            </p>
          </div>
          <router-view></router-view>
          <div v-if="authRoute">
            <router-link
              to="/auth/login"
              tag="button"
              class="mr-5 py-2 w-32 tracking-wider bg-red-500 shadow text-white hover:shadow-2xl transition duration-300 hover:bg-red-400"
            >
              Login
            </router-link>
            <router-link
              to="/auth/register"
              tag="button"
              class="py-2 border-red-500 border w-32 tracking-wider bg-gray-100 shadow text-red-500 hover:shadow-2xl transition duration-300 hover:text-red-400 hover:border-red-400"
            >
              Sign Up
            </router-link>
          </div>
        </div>
      </div>
      <div class="md:w-1/2 sm:w-full bg-red-100 md:h-screen relative">
        <img
          class="md:w-4/5 sm:w-full absolute absolute-center"
          src="../../assets/images/illustration_2.png"
          alt="illustration"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Auth",
  data() {
    return {
      loginRoute: this.$route.name === "Login",
      authRoute: this.$route.name === "Auth"
    };
  },
  watch: {
    $route(to) {
      this.loginRoute = to.name === "Login";
      this.authRoute = to.name === "Auth";
    }
  }
};
</script>

<style scoped>
.absolute-center {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
