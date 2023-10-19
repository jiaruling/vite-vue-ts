<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-4">
      <div class="card h-100 shadow-sm">
        <div class="card-body text-center">
          <img
            :src="column.avatar"
            :alt="column.title"
            class="rounded-circle border border-light w-25 my-3"
          />
          <div class="card-body">
            <h5 class="card-title">{{ column.title }}</h5>
            <p class="card-text text-left">{{ column.description }}</p>
            <a href="#" class="btn btn-outline-primary">进入专栏</a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
  import { computed, PropType } from "vue";

  export interface ColumnProps {
    id: number;
    title: string;
    avatar: string;
    description: string;
  }

  defineOptions({
    name: "ColumnList",
  });

  const props = defineProps({
    list: {
      // Array 是一个数组的构造函数不是类型，可以使用 PropType 这个方法，它接受一个泛型，将 Array 构造函数返回传入的泛型类型。
      type: Array as PropType<ColumnProps[]>,
      required: true,
    },
  });

  const columnList = computed(() => {
    return props.list.map((column) => {
      if (!column.avatar) {
        column.avatar = require("@/assets/column.jpg");
      }
      return column;
    });
  });
</script>
