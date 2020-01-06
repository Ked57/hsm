<template>
  <div id="Login" class="flex flex-col justify-center items-center">
    <h1 class="text-4xl p-5 text-center gradient-text">Login</h1>
    <span class="text-xl p-5 gradient-text">URL / IP</span>
    <input
      id="address-input"
      class="rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16 bg-gray-400"
      v-model="state.address"
    />
    <span class="text-xl p-5 gradient-text">Security Code</span>
    <input
      id="security-input"
      type="password"
      class="rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16 bg-gray-400"
      v-model="state.key"
    />
    <button
      class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16"
      :click="onLoginClick"
    >
      Login
    </button>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent, reactive } from "@vue/composition-api";
import store from "../store/store";
import { ACTIONS } from "../store/action-definitions";
import { of } from "await-of";
import router from "../router";
export default createComponent({
  async beforeCreate() {
    if (store.state.manager.address === "" || store.state.manager.key === "") {
      return;
    }
    const [_, err] = await of(
      store.dispatch(ACTIONS.LOGIN, store.state.manager)
    );
    if (!err) {
      router.push("/");
    }
  },
  setup() {
    const state = reactive({
      address: store.state.manager.address,
      key: store.state.manager.key
    });

    const onLoginClick = async () => {
      const [_, err] = await of(
        store.dispatch(ACTIONS.LOGIN, { address: state.address, key: state.key })
      );
      if (!err) {
        router.push("/");
      }
    }
    return {
      state,
      onLoginClick
    }
  }
});
</script>
