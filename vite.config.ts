import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "~/": `${resolve(__dirname, ".")}/`,
      "/@/": `/${resolve(__dirname, "src")}/`,
      "/@vab/": `/${resolve(__dirname, "library")}/`,
      "/@types/": `/${resolve(__dirname, "src/types")}/`,
      "vue-i18n": "vue-i18n/dist/vue-i18n.cjs.js",
    },
  },
});
