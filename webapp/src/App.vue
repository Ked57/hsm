<template>
  <div class="content"><Menu class="menu"></Menu><router-view class="" /></div>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import Menu from "./components/Menu.vue"; 

export default createComponent({
  name: "App",
  components: {
    Menu
  },
  setup() {}
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

.menu {
  background-color: #1a202c;
}

#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-size: 1em;
}

.gradient-text {
  background: linear-gradient(45deg, #1f487e 0%, #984447 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.gradient-container {
  background: linear-gradient(45deg, #1f487e 0%, #984447 100%);
  color: #cbd5e0;
}
</style>
