import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    backPageRoute: '/home',
  },
  mutations: {
    changeBackPageRoute(state, route) {
      state.backPageRoute = route;
    },
  },
  actions: {
    changeBackPageRoute(context, route) {
      context.commit('changeBackPageRoute', route);
    },
  },
});
