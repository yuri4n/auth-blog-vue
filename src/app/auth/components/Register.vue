<template>
  <div class="text-gray-900 text-base tracking-wider">
    <div class="mb-10">
      <label class="my-2 inline-block w-full">
        Name
        <input
          placeholder="Your Nice Name"
          class="transition duration-300 inline-block w-full px-5 py-3 italic outline-none"
          :class="{
            ['bg-red-500 text-white placeholder-white border-2 border-red-700 focus:border-gray-900']:
              $v.userData.name.$error,
            ['placeholder-gray-600 border border-gray-400 text-gray-800 focus:border-red-500']: !$v
              .userData.name.$error
          }"
          type="email"
          v-model="userData.name"
          @blur="$v.userData.name.$touch()"
        />
      </label>
      <label class="my-2 inline-block w-full">
        Email Address
        <input
          placeholder="Your Awesome Email"
          class="transition duration-300 inline-block w-full px-5 py-3 italic outline-none"
          :class="{
            ['bg-red-500 text-white placeholder-white border-2 border-red-700 focus:border-gray-900']:
              $v.userData.email.$error,
            ['placeholder-gray-600 border border-gray-400 text-gray-800 focus:border-red-500']: !$v
              .userData.email.$error
          }"
          type="email"
          v-model="userData.email"
          @blur="$v.userData.email.$touch()"
        />
        <span v-if="!$v.userData.email.email" class="text-sm italic"
          >Provide a valid email</span
        >
      </label>
      <label class="my-2 inline-block w-full">
        Password
        <input
          placeholder="Your Secret Password"
          class="transition duration-300 inline-block w-full px-5 py-3 italic outline-none"
          :class="{
            ['bg-red-500 text-white placeholder-white border-2 border-red-700 focus:border-gray-900']:
              $v.userData.password.$error,
            ['placeholder-gray-600 border border-gray-400 text-gray-800 focus:border-red-500']: !$v
              .userData.password.$error
          }"
          type="password"
          @blur="$v.userData.password.$touch()"
          v-model="userData.password"
        />
      </label>
      <label class="my-2 inline-block w-full">
        Repeat Password
        <input
          @blur="$v.repeatPassword.$touch()"
          class="transition duration-300 inline-block w-full px-5 py-3 italic outline-none"
          :class="{
            ['bg-red-500 text-white placeholder-white border-2 border-red-700 focus:border-gray-900']:
              $v.repeatPassword.$error,
            ['placeholder-gray-600 border border-gray-400 text-gray-800 focus:border-red-500']: !$v
              .repeatPassword.$error
          }"
          placeholder="Repeat Your Secret Password"
          type="password"
          v-model="repeatPassword"
        />
      </label>
    </div>
    <div>
      <button
        class="mr-5 py-2 border w-32 tracking-wider bg-gray-100 shadow transition duration-300"
        @click="sendData"
        :class="{
          ['border-gray-500 text-gray-500']: $v.$invalid,
          ['border-red-500 text-red-500 hover:text-red-400 hover:border-red-400 hover:shadow-2xl']: !$v.$invalid
        }"
        :disabled="$v.$invalid"
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
import { required, email, minLength, sameAs } from "vuelidate/lib/validators";
import axios from "axios";

export default {
  name: "Register",
  data: () => ({
    userData: {
      name: "",
      email: "",
      password: ""
    },
    repeatPassword: "",
    invalid: "border-5 border-red-800"
  }),
  validations: {
    userData: {
      name: {
        required,
        minLength: minLength(4)
      },
      email: {
        required,
        email,
        unique: value => {
          if (value === "") {
            return true;
          }
          return axios
            .get(`/users.json?orderBy="email"&equalTo="${value}"`)
            .then(res => {
              console.log(res);
              return Object.keys(res.data).length === 0;
            });
        }
      },
      password: {
        required,
        minLength: minLength(6)
      }
    },
    repeatPassword: {
      required,
      sameAs: sameAs(vm => {
        return vm.userData.password;
      })
    }
  },
  methods: {
    async sendData() {
      if (this.userData.password !== this.repeatPassword) {
        return;
      }

      await this.$store.dispatch("signUp", this.userData);

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
