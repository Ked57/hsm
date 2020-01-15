import Vue from "vue";
import VuexPersistence from "vuex-persist";
import Vuex from "vuex";
import { state, State } from "./state";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

Vue.use(Vuex);

const vuexLocal = new VuexPersistence<State>({
  storage: window.localStorage
});

export default new Vuex.Store({
  state,
  getters,
  mutations,
  actions
  // plugins: [vuexLocal.plugin]
});
