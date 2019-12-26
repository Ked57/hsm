import Vue from "vue";
import Router from "vue-router";
import Home from "./components/Home";
import Error from "./components/Error";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "*",
      name: "error",
      component: Error as any
    }
  ]
});
