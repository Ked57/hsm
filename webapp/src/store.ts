import Vue from "vue";
import VuexPersistence from "vuex-persist";
import Vuex from "vuex";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence({
  storage: window.localStorage
});

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  plugins: [vuexLocal.plugin]
});
