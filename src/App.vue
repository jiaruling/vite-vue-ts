<template>
  <div class="container">
    <global-header :user="user" />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
  import "bootstrap/dist/css/bootstrap.min.css";
  import { computed } from "vue";
  import { useStore } from "vuex";
  import GlobalHeader from "./components/GlobalHeader.vue";
  import { GlobalDataProps } from "/@/define";

  const store = useStore<GlobalDataProps>();
  const user = computed(() => store.state.user);
</script>

<style scoped></style>
