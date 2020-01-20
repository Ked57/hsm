<template>
  <div class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl">
    <h1 class="text-2xl">Server status</h1>
    <ul class="list-none">
      <li>
        State:
        <span
          class="text-green-600 bold"
          v-if="state.isUp"
          >UP</span
        >
        <span class="text-red-600 bold" v-else>DOWN</span>
      </li>
      <li>Ping: {{ state.ping }} ms</li>
    </ul>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent, reactive, computed } from "@vue/composition-api";
import store from "../store/store";
import { ACTIONS } from "../store/action-definitions";

const fetchServerStatus = () =>
  setInterval(() => store.dispatch(ACTIONS.FETCH_SERVER_STATUS), 5000);

export default createComponent({
  name: "ServerStatus",
  beforeMount() {
    fetchServerStatus();
  },
  setup() {
    const state = computed(() => reactive({
      isUp: store.state.servers['mine'].status.isUp,
      ping: Math.round(store.state.servers["mine"].status.ping)
    }));
    return {
      state
    };
  }
});
</script>
