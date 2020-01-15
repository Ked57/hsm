<template>
  <div :class="`content flex ${state.showMenu ? 'flex-row' : 'flex-col'}`">
    <Menu :class="state.showMenu ? 'w-full' : ''"></Menu>
    <router-view :class="state.showMenu ? 'hidden' : ''" />
  </div>
</template>

<script lang="ts">
import { createComponent, computed } from "@vue/composition-api";
import Menu from "./components/Menu.vue";
import store from "./store/store";

export default createComponent({
  name: "App",
  components: {
    Menu
  },
  setup() {
    const state = computed(() => ({
      showMenu: store.state.showMenu
    }));
    return { state };
  }
});
</script>

<style>
html {
  background-color: #1a202c;
  height: 100%;
}

body {
  background-color: #1a202c;
  height: 100%;
}

.content {
  height: 100%;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1em;
}

.gradient-text {
  background: linear-gradient(45deg, #984447 45%, #c75146 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-container {
  background: linear-gradient(45deg, #984447 45%, #c75146 100%);
  color: #cbd5e0;
}

.menu {
  transition-property: width; 
  transition-duration: 1s; 
}

</style>
