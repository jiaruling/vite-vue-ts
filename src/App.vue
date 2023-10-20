<template>
  <div class="container">
    <global-header :user="user" />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import GlobalHeader, { UserProps } from "./components/GlobalHeader.vue";

  const user: UserProps = {
    isLogin: false,
    name: "wiki",
  };
</script>

<style scoped></style>
