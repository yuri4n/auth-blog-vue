<template>
  <div class="grid grid-cols-3 gap-8 w-10/12 mx-auto my-10">
    <app-post
      v-for="(post, index) in posts"
      :post="post"
      :key="index"
    ></app-post>
  </div>
</template>

<script>
import Post from "./Post";
export default {
  name: "Posts",
  components: {
    appPost: Post
  },
  data: () => ({
    posts: [
      {
        title: "This a title, or a long title",
        author: "Julian Garzon",
        summary:
          "Lorem ipsum dolor sit ammet Donec ut est interdum sapien ultrices pellentesque. In commodo ut est et placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      },
      {
        title: "This a title, or a long title",
        author: "Julian Garzon",
        summary:
          "Lorem ipsum dolor sit ammet Donec ut est interdum sapien ultrices pellentesque. In commodo ut est et placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      },
      {
        title: "This a title, or a long title",
        author: "Julian Garzon",
        summary:
          "Lorem ipsum dolor sit ammet Donec ut est interdum sapien ultrices pellentesque. In commodo ut est et placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      },
      {
        title: "This a title, or a long title",
        author: "Julian Garzon",
        summary:
          "Lorem ipsum dolor sit ammet Donec ut est interdum sapien ultrices pellentesque. In commodo ut est et placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      },
      {
        title: "This a title, or a long title",
        author: "Julian Garzon",
        summary:
          "Lorem ipsum dolor sit ammet Donec ut est interdum sapien ultrices pellentesque. In commodo ut est et placerat. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas."
      }
    ]
  })
};
</script>

<style scoped></style>
