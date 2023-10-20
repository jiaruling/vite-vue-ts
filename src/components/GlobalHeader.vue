<template>
  <nav class="navbar navbar-dark bg-primary justify-content-between mb-4 px-4">
    <router-link class="navbar-brand" to="/">CCC</router-link>
    <ul v-if="!user.isLogin" class="list-inline mb-0">
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2">
          登陆
        </router-link>
      </li>
      <li class="list-inline-item">
        <router-link to="/login" class="btn btn-outline-light my-2">
          注册
        </router-link>
      </li>
    </ul>
    <ul v-else class="list-inline mb-0">
      <li class="list-inline-item">
        <Dropdown :title="`你好 ${user.name}`">
          <DropdownItem>个人中心</DropdownItem>
          <DropdownItem :disabled="true">登录历史</DropdownItem>
          <DropdownItem>退出</DropdownItem>
        </Dropdown>
      </li>
    </ul>
  </nav>
</template>

<script lang="ts" setup>
  import { PropType } from "vue";
  import Dropdown from "./Dropdown.vue";
  import DropdownItem from "./DropdownItem.vue";

  export interface UserProps {
    isLogin: boolean;
    name?: string;
    id?: number;
  }

  defineOptions({
    name: "GlobalHeader",
  });

  defineProps({
    user: {
      type: Object as PropType<UserProps>,
      required: true,
    },
  });
</script>
