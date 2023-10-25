<template>
  <div>
    <pre>{{ route }}</pre>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: "CreatePost",
  });
  import { useRoute } from "vue-router";
  const route = useRoute();
</script>
