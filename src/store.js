import Vue from 'vue';
import Vuex from 'vuex';
import http from './http';

Vue.use(Vuex);

export default () => {
  return new Vuex.Store({
    state: () => ({
      user: {
        username: null,
        logged: false,
      },
      rows: [],
    }),
    mutations: {
      setRows(state, rows) {
        state.rows = rows;
      },
    },
    actions: {
      async fetchRows({ commit }) {
        const { data } = await http.get('/api/public');
        commit('setRows', data);
      },
    },
  });
};
