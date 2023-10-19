<template>
  <div class="dropdown" ref="dropdownRef">
    <a
      href="#"
      class="btn btn-outline-light my-2 dropdown-toggle"
      @click.prevent="toggleOpen"
    >
      {{ title }}
    </a>
    <ul class="dropdown-menu" :style="{ display: 'block' }" v-if="isOpen">
      <slot></slot>
    </ul>
  </div>
</template>

<script lang="ts" setup>
  import { ref, watch } from "vue";
  import { useClickOutside } from "/@/hooks/useClickOutside";

  defineOptions({
    name: "Dropdown",
  });

  defineProps({
    title: {
      type: String,
      required: true,
    },
  });

  const isOpen = ref(false);
  const dropdownRef = ref<null | HTMLElement>(null);
  const outside = useClickOutside(dropdownRef);
  watch(outside, () => {
    if (outside && isOpen.value) {
      isOpen.value = false;
    }
  });

  const toggleOpen = () => {
    isOpen.value = !isOpen.value;
  };
</script>
