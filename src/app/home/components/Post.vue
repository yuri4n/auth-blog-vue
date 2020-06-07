<template>
  <div class="bg-gray-100 shadow-xl tracking-wider  text-gray-900">
    <img
      class="w-full"
      src="../../../assets/images/illustration_1.png"
      alt="illustration"
    />
    <div class="px-5 py-5 w-full">
      <p class="text-xl">{{ post.title }}</p>
      <p class="text-sm text-gray-700 mb-5">{{ post.author }}</p>
      <p class="mb-5">{{ post.summary }}</p>
      <router-link
        to="/auth/register"
        tag="button"
        class="py-2 border-gray-900 border w-32 tracking-wider bg-gray-100 shadow text-gray-900 hover:shadow-2xl transition duration-300 hover:text-red-400 hover:border-red-400"
      >
        Learn More
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: {
      required: true,
      type: Object
    }
  }
};
</script>

<style scoped></style>
