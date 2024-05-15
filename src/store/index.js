// store/index.js
import { createStore } from 'vuex';

export default createStore({
  state: {
    searchQuery: ''
  },
  mutations: {
    setSearchQuery(state, query) {
      state.searchQuery = query;
    }
  },
  actions: {
    updateSearchQuery({ commit }, query) {
      commit('setSearchQuery', query);
    }
  },
  getters: {
    getSearchQuery: (state) => state.searchQuery
  }
});
