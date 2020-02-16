<template>
  <button
    class="gradient-container rounded-lg m-4 p-2 max-w-xl w-11/12 text-xl text-center h-16"
    v-on:click="onActionButtonClick"
  >
    {{ props.text }}
  </button>
</template>

<script lang="ts">
import { createComponent } from "@vue/composition-api";
import Vue from "vue";
import store from "../store/store";
export default createComponent({
  name: "ActionButton",
  props: {
    text: {
      type: String,
      required: true
    },
    action: {
      type: String,
      required: true
    }
  },
  setup(props) {
    const onActionButtonClick = async () => {
      await store.dispatch(props.action);
    }
    return {
      props,
      onActionButtonClick
    }
  }
});
</script>
