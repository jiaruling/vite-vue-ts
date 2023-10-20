<template>
  <div>
    <pre>{{ route }}</pre>
  </div>
</template>

<script lang="ts" setup>
  defineOptions({
    name: "ColumnDetail",
  });
  import { useRoute } from "vue-router";
  const route = useRoute();
</script>
