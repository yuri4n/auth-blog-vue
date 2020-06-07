<template>
  <div class="w-10/12 mx-auto bg-gray-900 grid grid-cols-3 tracking-wider">
    <div class="col-span-2 p-10">
      <img
        class="w-full"
        src="../../../assets/images/illustration_2.png"
        alt="image"
      />
    </div>
    <div class="col-span-1 py-10 pr-10">
      <p class="text-3xl text-white">This is a title, or a long title</p>
      <p class="text-gray-400 mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut est
        interdum sapien ultrices pellentesque. In commodo ut est et placerat.
        Pellentesque habitant morbi tristique senectus et netus et malesuada
        fames ac turpis egestas.
      </p>
      <router-link
        to="/auth/register"
        tag="button"
        class="py-2 border-gray-100 border w-32 tracking-wider bg-gray-900 shadow text-gray-100 hover:shadow-2xl transition duration-300 hover:text-red-400 hover:border-red-400"
      >
        Learn More
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped></style>
