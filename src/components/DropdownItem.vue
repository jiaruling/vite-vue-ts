<template>
  <li>
    <a class="dropdown-item" :class="{ 'is-disabled': disabled }" href="#">
      <slot></slot>
    </a>
  </li>
</template>

<script lang="ts" setup>
  defineOptions({
    name: "DropdownItem",
  });
  defineProps({
    disabled: {
      type: Boolean,
      default: false,
    },
  });
</script>

<style scoped>
  .dropdown-item.is-disabled * {
    color: #6c757d;
    pointer-events: none;
    background-color: transparent;
  }
</style>
