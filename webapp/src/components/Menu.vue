<template>
  <div class="menu">
    <button v-if="!state.showMenu" v-on:click="onMenuButtonClick" id="showMenuButton">
      <img src="../assets/icons/burger.svg" class="w-24" />
    </button>
    <div class="menuContent" v-if="state.showMenu">
      <button class="float-right p-1" v-on:click="onMenuButtonClick">
        <img src="../assets/icons/cross.svg" class="w-24" />
      </button>
      <ul class="p-2 text-white">
        <li>
          <button
            class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16"
          >
            Home
          </button>
          <button
            v-if="state.manager.address !== '' || state.manager.key !== ''" v-on:click="onLogOutClick" class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16"
          >
            Log Out
          </button>
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import { createComponent, computed } from "@vue/composition-api";
import store from "../store/store";
import { ACTIONS } from "../store/action-definitions";

export default createComponent({
  name: "Menu",
  props: {},
  setup() {
    const state = computed(() => ({
      showMenu: store.state.showMenu,
      manager: {
        address: store.state.manager.address,
        key: store.state.manager.key
      }
    }));
    const onMenuButtonClick = () => {
      store.dispatch(ACTIONS.TOOGLE_MENU);
    };
    const onLogOutClick = () => {
      store.dispatch(ACTIONS.LOGOUT)
    }

    return {
      state,
      onMenuButtonClick,
      onLogOutClick
    };
  }
});
</script>

<style scoped></style>
