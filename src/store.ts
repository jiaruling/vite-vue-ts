import { createStore } from "vuex";
import { GlobalDataProps } from "/@/define";
import { testData, testPosts } from "/@/testData";

const store = createStore<GlobalDataProps>({
  state: {
    columns: testData,
    posts: testPosts,
    user: { isLogin: false },
  },
  mutations: {
    login(state) {
      state.user = { ...state.user, isLogin: true, name: "viking" };
    },
  },
  getters: {
    getColumnById: (state) => (id: number) => {
      return state.columns.find((c) => c.id === id);
    },
    getPostsByCid: (state) => (id: number) => {
      return state.posts.filter((post) => post.columnId === id);
    },
  },
});

export default store;
