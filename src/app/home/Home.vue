<template>
  <div>
    <app-navigation></app-navigation>
    <app-header></app-header>
    <app-posts></app-posts>
  </div>
</template>

<script>
import Navigation from "../partials/Navigation";
import Posts from "./components/Posts";
import Header from "./components/Header";

export default {
  name: "Home",
  components: {
    appNavigation: Navigation,
    appHeader: Header,
    appPosts: Posts
  }
};
</script>

<style scoped></style>
