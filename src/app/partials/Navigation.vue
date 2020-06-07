<template>
  <div
    class="py-8 w-10/12 mx-auto flex justify-between tracking-wider items-center"
  >
    <div class="flex items-center">
      <router-link to="/">
        <img
          class="w-6 mr-5 hover:"
          src="../../assets/images/logo.png"
          alt="logo"
        />
      </router-link>
      <router-link
        tag="span"
        to="/"
        class="font-bold cursor-pointer hover:text-gray-700 transition duration-300"
        >My Blog</router-link
      >
    </div>
    <div class="flex items-center">
      <ul class="flex items-center">
        <router-link
          active-class="font-bold"
          to="/"
          class="mr-8 hover:text-gray-700"
          >Home</router-link
        >
        <router-link
          to="/about"
          active-class="font-bold"
          class="mr-8 hover:text-gray-700"
          >About</router-link
        >
        <router-link to="/auth" class="text-red-500">Sign Out</router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation"
};
</script>

<style scoped></style>
